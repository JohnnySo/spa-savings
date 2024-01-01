'use client'

import NoData from '@/components/savingPeriod/NoData'
import SavingPeriods from '@/components/savingPeriod/SavingPeriods'

export default function Savings ({ paginatedSavingPeriods = {} }) {
  return (
    <div className='flex flex-col flex-grow justify-between'>
      {paginatedSavingPeriods && paginatedSavingPeriods.value && paginatedSavingPeriods.value.length > 0
        ? <SavingPeriods paginatedData={paginatedSavingPeriods} />
        : <NoData />}
    </div>
  )
}
