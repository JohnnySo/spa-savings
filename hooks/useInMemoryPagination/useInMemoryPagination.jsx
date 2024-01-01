'use client'

import { useReducer, useEffect } from 'react'
import paginationReducer, { PAGINATION_ACTIONS } from '@/hooks/useInMemoryPagination/PaginationReducer'
import * as Constants from '@/components/Constants'

export default function useInMemoryPagination (data, paginationInitState = Constants.IN_MEMORY_PAGINATION_INIT_STATE) {
  const [paginationState, dispatch] = useReducer(paginationReducer, paginationInitState)

  useEffect(() => {
    if (data) {
      dispatch({
        type: PAGINATION_ACTIONS.CHANGE_PAGE,
        payload: data
      })
    } else {
      dispatch({
        type: PAGINATION_ACTIONS.RESET,
        payload: Constants.IN_MEMORY_PAGINATION_INIT_STATE
      })
    }
  }, [data, paginationState.pageSize, paginationState.offset])

  const handleClick = (e) => {
    const clickValue = parseInt(e.target.getAttribute('data-page'), 10)
    dispatch({
      type: PAGINATION_ACTIONS.HANDLE_CLICK,
      payload: clickValue
    })
  }

  const handleClickLimits = (clickAction) => {
    let payload
    switch (clickAction) {
      case Constants.PAGINATION_BOUNDARY_ACTIONS.FIRST:
        payload = 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.PREVIOUS:
        payload = paginationState.activePage - 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.NEXT:
        payload = paginationState.activePage + 1
        break
      case Constants.PAGINATION_BOUNDARY_ACTIONS.LAST:
        payload = paginationState.pageCount
        break
    };
    dispatch({
      type: PAGINATION_ACTIONS.HANDLE_CLICK,
      payload
    })
  }

  return {
    paginationState,
    handleClick,
    handleClickLimits
  }
}
