'use client'

export const PAGINATION_ACTIONS = {
  RESET: 'reset',
  CHANGE_PAGE: 'change-page',
  HANDLE_CLICK: 'handle-click'
}

function paginationReducer (paginationState, action) {
  switch (action.type) {
    case PAGINATION_ACTIONS.RESET: {
      return { ...action.payload }
    }
    case PAGINATION_ACTIONS.HANDLE_CLICK: {
      const offset = (action.payload - 1) * paginationState.pageSize
      return {
        ...paginationState,
        offset: offset,
        activePage: action.payload,
        pagesNumberToShow: calculatePageNumbersToShow(paginationState, paginationState.pageCount),
        ellipsis: {
          ...paginationState.ellipsis,
          middle: calculateEllipsisMiddle(paginationState, action.payload),
          showInitialEllipsis: calculateInitialEllipsis(paginationState),
          showFinalEllipsis: calculateFinalEllipsis(paginationState)
        }
      }
    }
    case PAGINATION_ACTIONS.CHANGE_PAGE: {
      const totalPages = Math.ceil(action.payload.length / paginationState.pageSize)
      const isFiltering = paginationState.activePage > totalPages
      const activePage = isFiltering ? 1 : paginationState.activePage
      const offset = isFiltering ? 0 : paginationState.offset
      const sliceTo = isFiltering ? action.payload.length : offset + paginationState.pageSize
      const splice = action.payload.slice(offset, sliceTo)
      const currData = splice && splice.length > 0 ? splice : null
      return {
        ...paginationState,
        totalElements: action.payload.length,
        activePage: activePage,
        offset: offset,
        currentData: currData,
        pageCount: totalPages,
        pagesNumberToShow: calculatePageNumbersToShow(paginationState, totalPages),
        ellipsis: {
          ...paginationState.ellipsis,
          showInitialEllipsis: calculateInitialEllipsis(paginationState),
          showFinalEllipsis: calculateFinalEllipsis(paginationState)
        }
      }
    }
    default: {
      return paginationState
    }
  }
}

function calculateEllipsisMiddle (paginationState, payload) {
  let middle = paginationState.ellipsis.middle + (payload - paginationState.activePage)
  if (middle <= 2) {
    middle = 3
  }
  if (middle >= paginationState.pageCount - 2) {
    middle = paginationState.pageCount - 2
  }
  return middle
}

function calculateInitialEllipsis (paginationState) {
  if (paginationState.pageCount <= 5) {
    return false
  } else if (paginationState.pageCount < (paginationState.ellipsis.maxNumbersFroMiddle + paginationState.ellipsis.middle)) {
    return false
  } else {
    return paginationState.activePage > (paginationState.ellipsis.maxNumbersFroMiddle + 1)
  }
}

function calculateFinalEllipsis (paginationState) {
  if (paginationState.pageCount <= 5) {
    return false
  } else if (paginationState.pageCount < (paginationState.ellipsis.maxNumbersFroMiddle + paginationState.ellipsis.middle)) {
    return false
  } else {
    return paginationState.activePage < (paginationState.pageCount - paginationState.ellipsis.maxNumbersFroMiddle)
  }
}

function calculatePageNumbersToShow (paginationState, actualTotalPages) {
  const totalPagesToShow = paginationState.ellipsis.maxNumbersFroMiddle + 1 + paginationState.ellipsis.maxNumbersFroMiddle
  let start = paginationState.activePage - paginationState.ellipsis.maxNumbersFroMiddle
  let end = paginationState.activePage + paginationState.ellipsis.maxNumbersFroMiddle
  if (paginationState.activePage <= paginationState.ellipsis.maxNumbersFroMiddle + 1) {
    start = 1
    end = totalPagesToShow
  }
  if (paginationState.activePage >= actualTotalPages - paginationState.ellipsis.maxNumbersFroMiddle) {
    start = paginationState.ellipsis.middle - paginationState.ellipsis.maxNumbersFroMiddle
    end = actualTotalPages
  }
  if (actualTotalPages < totalPagesToShow) {
    start = 1
    end = actualTotalPages
  }
  const range = [...Array(end - start + 1).keys()].map(x => x + start)
  return range
}

export default paginationReducer
