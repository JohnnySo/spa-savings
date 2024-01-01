'use client'

import RawMovesTable from '@/components/movesTable/RawMovesTable'
import InMemoryPagination from '@/components/pagination/inMemoryPagination'

export default function FileContent ({ paginationState, handleClick, handleClickLimits }) {
  return (
    <>
      <RawMovesTable data={paginationState.currentData} />
      <InMemoryPagination state={paginationState}
        handleClickNumber={handleClick}
        onClickButtonsLimit={handleClickLimits}
        withTopBorder={false} />
    </>
  )
}
