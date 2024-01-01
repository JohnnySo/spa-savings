'use client'

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons'
import PaginationBoundaryButton from '@/components/button/PaginationBoundaryButton'
import PaginationButton from '@/components/button/PaginationButton'
import * as Constants from '@/components/Constants'

const DEFAULT_PAGE_SIZE = 12

export default function ServerPagination ({ state, getPageOfBoundaryButton }) {
  return (
    <div className='flex items-center justify-center sm:justify-between border-t border-gray-200 bg-white py-8'>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='hidden sm:block text-sm text-gray-700'>
            Mostrando <span className='font-medium'>{((state.activePage * state.pageSize) - (state.pageSize - 1))}</span> a <span className='font-medium'>{(state.activePage * state.pageSize)}</span> de{' '}
            <span className='font-medium'>{state.totalElements}</span> resultados
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            <PaginationBoundaryButton show navigateWithUrl href={`/savings?pageNumber=${getPageOfBoundaryButton(Constants.PAGINATION_BOUNDARY_ACTIONS.FIRST)}&pageSize=${DEFAULT_PAGE_SIZE}`} otherStyles='rounded-l-md text-gray-400 hover:bg-gray-50 focus:z-20'>
              <span className='sr-only'>First</span>
              <ChevronDoubleLeftIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show navigateWithUrl href={`/savings?pageNumber=${getPageOfBoundaryButton(Constants.PAGINATION_BOUNDARY_ACTIONS.PREVIOUS)}&pageSize=${DEFAULT_PAGE_SIZE}`} otherStyles='text-gray-400 hover:bg-gray-50 focus:z-20' >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show={state.ellipsis.showInitialEllipsis} href='#' otherStyles='text-sm font-semibold text-gray-700' onClick={() => { }}><span>...</span></PaginationBoundaryButton>
            {
              state.pageCount && state.pagesNumberToShow && state.pagesNumberToShow.map((pN) => {
                return (
                  <PaginationButton key={pN} navigateWithUrl current={pN === state.activePage} href={`/savings?pageNumber=${pN - 1}&pageSize=${DEFAULT_PAGE_SIZE}`}>
                    {pN}
                  </PaginationButton>
                )
              })
            }
            <PaginationBoundaryButton show={state.ellipsis.showFinalEllipsis} href='#' otherStyles='text-sm font-semibold text-gray-700' onClick={() => { }}><span>...</span></PaginationBoundaryButton>
            <PaginationBoundaryButton show navigateWithUrl href={`/savings?pageNumber=${getPageOfBoundaryButton(Constants.PAGINATION_BOUNDARY_ACTIONS.NEXT)}&pageSize=${DEFAULT_PAGE_SIZE}`} otherStyles='text-gray-400 hover:bg-gray-50 focus:z-20' >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
            <PaginationBoundaryButton show navigateWithUrl href={`/savings?pageNumber=${getPageOfBoundaryButton(Constants.PAGINATION_BOUNDARY_ACTIONS.LAST)}&pageSize=${DEFAULT_PAGE_SIZE}`} otherStyles='rounded-r-md text-gray-400 hover:bg-gray-50 focus:z-20'>
              <span className='sr-only'>Next</span>
              <ChevronDoubleRightIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationBoundaryButton>
          </nav>
        </div>
      </div>
    </div>
  )
}
