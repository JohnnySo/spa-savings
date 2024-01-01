'use client'

import { useRouter } from 'next/navigation'
import { Title, Text } from "@tremor/react"
import CustomDonutChart from '@/components/chart/CustomDonutChart'
import MovesTable from '@/components/movesTable/MovesTable'
import CustomBarChart from '@/components/chart/CustomBarChart'
import useInMemoryPagination from '@/hooks/useInMemoryPagination/useInMemoryPagination'
import InMemoryPagination from '@/components/pagination/inMemoryPagination'
import * as Constants from '@/components/Constants'
import TertiaryButton from '@/components/button/TertiaryButton'
import useSavingDetails from '@/hooks/useSavingDetails'

export default function DetailSavingPage ({ savingPeriod = {} }) {
  const router = useRouter()
  const { totals, movements, handleFilterCategoryClick, handleUpdateMovement } = useSavingDetails(savingPeriod)
  const { paginationState, handleClick, handleClickLimits } = useInMemoryPagination(movements.filtered, Constants.IN_MEMORY_PAGINATION_INIT_STATE)

  return (
    <div className='flex flex-col h-full p-4'>
      <div className='flex items-center justify-between'>
        <Title>Movimientos</Title>
        <TertiaryButton onClick={() => router.back()}>Volver</TertiaryButton>
      </div>
      <Text>Lista de movimientos para el período <span className='lowercase'>{savingPeriod.periodDTO.monthByLocale}</span> de {savingPeriod.periodDTO.year}.</Text>
      <div className='flex flex-grow flex-col justify-start content-center 5xl:flex-row-reverse 5xl:items-start'>
        <div className='flex w-full justify-center my-2 5xl:flex-col-reverse 5xl:w-2/6 5xl:items-start 5xl:pl-4'>
          <div className='pr-4 w-1/2 5xl:w-full 5xl:pt-4 5xl:pr-0'>
            <div className='w-full'>
              <CustomBarChart chartInfo={Constants.SAVINGS_DETAIL_BAR_CHART_INFO} data={savingPeriod.thisMonthOverYears} />
            </div>
          </div>
          <div className='w-1/2 5xl:w-full'>
            <CustomDonutChart info={savingPeriod.totalReturnByCategory} handleClick={handleFilterCategoryClick} />
          </div>
        </div>
        <div className='flex flex-col justify-center content-center w-full 5xl:w-4/6'>
          <MovesTable totals={totals} movements={paginationState.currentData} updateMovement={handleUpdateMovement} />
        </div>
      </div>
      <div className='flex 5xl:flex-row flex-col mt-4 justify-between items-end'>
        <div className='flex flex-col justify-center content-center w-full 5xl:w-4/6'>
          <InMemoryPagination state={paginationState} handleClickNumber={handleClick} onClickButtonsLimit={handleClickLimits} withTopBorder={false} />
        </div>
      </div>
    </div>
  )
}