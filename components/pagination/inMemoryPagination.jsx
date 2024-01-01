'use client'

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons'
import PaginationBoundaryButton from '@/components/button/PaginationBoundaryButton'
import PaginationButton from '@/components/button/PaginationButton'
import * as Constants from '@/components/Constants'

export default function InMemoryPagination ({ state, handleClickNumber, onClickButtonsLimit, withTopBorder = true }) {
  return (
    <div className={`flex items-center justify-center sm:justify-between bg-white py-3 ${withTopBorder ? 'border-t border-gray-200' : ''}`}>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='hidden sm:block text-sm text-gray-700'>
            Mostrando <span className='font-medium'>{((state.activePage * state.pageSize) - (state.pageSize - 1))}</span> a <span className='font-medium'>{(state.activePage * state.pageSize)}</span> de{' '}
            <span className='font-medium'>{state.totalElements}</span> resultados
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            <PaginationBoundaryButton show href='javascript:void(0)' onClick={() => { onClickButtonsLimit(Constants.PAGINATION_BOUNDARY_ACTIONS.FIRST) }} otherStyles='rounded-l-md text-gray-400 hover:bg-gray-50 focus:z-20'>
              <span className='sr-only'>First</span>
              <ChevronDoubleLeftIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show href='javascript:void(0)' onClick={() => { onClickButtonsLimit(Constants.PAGINATION_BOUNDARY_ACTIONS.PREVIOUS) }} otherStyles='text-gray-400 hover:bg-gray-50 focus:z-20' >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show={state.ellipsis.showInitialEllipsis} href='javascript:void(0)' otherStyles='text-sm font-semibold text-gray-700' onClick={() => { }}><span>...</span></PaginationBoundaryButton>
            {
              state.pageCount && state.pagesNumberToShow && state.pagesNumberToShow.map((pN) => {
                return (
                  <PaginationButton key={pN} current={pN === state.activePage} href='javascript:void(0)' onClick={handleClickNumber} pageNumber={pN}>
                    {pN}
                  </PaginationButton>
                )
              })
            }
            <PaginationBoundaryButton show={state.ellipsis.showFinalEllipsis} href='javascript:void(0)' otherStyles='text-sm font-semibold text-gray-700' onClick={() => { }}><span>...</span></PaginationBoundaryButton>
            <PaginationBoundaryButton show href='javascript:void(0)' onClick={() => { onClickButtonsLimit(Constants.PAGINATION_BOUNDARY_ACTIONS.NEXT) }} otherStyles='text-gray-400 hover:bg-gray-50 focus:z-20' >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show href='javascript:void(0)' onClick={() => { onClickButtonsLimit(Constants.PAGINATION_BOUNDARY_ACTIONS.LAST) }} otherStyles='rounded-r-md text-gray-400 hover:bg-gray-50 focus:z-20'>
              <span className='sr-only'>Next</span>
              <ChevronDoubleRightIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
          </nav>
        </div>
      </div>
    </div>
  )
}
