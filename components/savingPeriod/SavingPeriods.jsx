'use client'

import SavingPeriodItem from '@/components/savingPeriod/SavinPeriodItem'
import ServerPagination from '@/components/pagination/ServerPagination'
import usePagination from '@/hooks/usePagination'
import CustomBarChart from '@/components/chart/CustomBarChart'
import Keypad from '@/components/savingPeriod/Keypad'
import styles from 'styles/Savings.module.css'

const chartInfo = {
  title: 'Evolución - 12 meses',
  subtitle: 'Evolución de los gastos en los Últimos 12 meses',
  index: 'Nombre',
  categories: ['Ingresos', 'Gastos'],
  colors: ['teal', 'blue'],
  mapperFunc: (period) => {
    return {
      'Nombre': `${period.periodDTO.monthByLocale}/${period.periodDTO.year}`,
      'Ingresos': period.income,
      'Gastos': Math.abs(period.expense)
    }
  }
}

export default function SavingPeriods ({ paginatedData }) {
  const { paginationState, getPageOfBoundaryButton } = usePagination(paginatedData)

  return (
    <main className='w-full h-full flex flex-col'>
      <div className='w-full flex justify-center'>
        <div className='mt-8 mx-8 min-w-0 w-full xl:w-[80rem] max-w-7xl'>
          <CustomBarChart chartInfo={chartInfo} data={paginatedData.value} />
        </div>
      </div >
      <div className={`w-full grow grid gap-8 p-8 mb-auto ${styles.gridContainer}`}>
        {paginationState.data && paginationState.data.map((savingPeriod) => <SavingPeriodItem key={savingPeriod.id} data={savingPeriod} />)}
      </div>
      <div className='px-8 pb-8'>
        {paginationState.data && paginationState.data.length > 0 && <ServerPagination state={paginationState} getPageOfBoundaryButton={getPageOfBoundaryButton} />}
        <Keypad className='flex justify-end' />
      </div>
    </main >
  )
}