'use client'

import { useEffect, useState } from 'react'
import * as Constants from '@/components/Constants'

const MAX_NUMBERS_FROM_MIDDLE = 2
const INITIAL_MIDDLE = 3

const INITIAL_STATE = {
  data: [],
  activePage: 0,
  pageCount: 0,
  pagesNumberToShow: [],
  ellipsis: {
    middle: INITIAL_MIDDLE,
    showInitialEllipsis: false,
    showFinalEllipsis: false
  }
}

export default function usePagination (data) {
  const [paginationState, setPaginationState] = useState(INITIAL_STATE)

  useEffect(() => {
    const activePage = data.actualPage + 1
    const newMiddle = calculateEllipsisMiddle(data.totalPages, activePage)
    setPaginationState({
      data: data.value,
      activePage: activePage,
      pageCount: data.totalPages,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      pagesNumberToShow: calculatePageNumbersToShow(activePage, newMiddle, data.totalPages),
      ellipsis: {
        middle: newMiddle,
        showInitialEllipsis: activePage > INITIAL_MIDDLE,
        showFinalEllipsis: activePage < (data.totalPages - MAX_NUMBERS_FROM_MIDDLE),
      }
    })
  }, [data])

  function calculateEllipsisMiddle (pageCount, pageNumberClicked) {
    let middle = pageNumberClicked
    if (pageNumberClicked <= INITIAL_MIDDLE) {
      middle = INITIAL_MIDDLE
    } else if (pageNumberClicked >= pageCount - MAX_NUMBERS_FROM_MIDDLE) {
      middle = pageCount - MAX_NUMBERS_FROM_MIDDLE
    }
    return middle
  }

  function calculatePageNumbersToShow (activePage, middle, totalPages) {
    const totalPagesToShow = MAX_NUMBERS_FROM_MIDDLE + 1 + MAX_NUMBERS_FROM_MIDDLE
    let start = activePage - MAX_NUMBERS_FROM_MIDDLE
    let end = activePage + MAX_NUMBERS_FROM_MIDDLE
    if (activePage <= MAX_NUMBERS_FROM_MIDDLE + 1) {
      start = 1
      end = totalPagesToShow
    }
    if (activePage >= totalPages - MAX_NUMBERS_FROM_MIDDLE) {
      start = middle - MAX_NUMBERS_FROM_MIDDLE
      end = totalPages
    }
    if (totalPages < totalPagesToShow) {
      start = 1
      end = totalPages
    }
    const range = [...Array(end - start + 1).keys()].map(x => x + start)
    return range
  }

  const getPageOfBoundaryButton = (clickAction) => {
    let page
    switch (clickAction) {
      case Constants.PAGINATION_BOUNDARY_ACTIONS.FIRST:
        page = 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.PREVIOUS:
        page = paginationState.activePage > 1 ? paginationState.activePage - 1 : 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.NEXT:
        page = paginationState.activePage + 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.LAST:
        page = paginationState.pageCount
        break
    };
    return page - 1
  }

  return {
    paginationState,
    getPageOfBoundaryButton
  }
}
