'use client'

import Link from 'next/link'
import Formatter from '@/components/Formatter'
import { ArrowUpRightIcon, LinkCalendar } from '@/components/Icons'

export default function SavingPeriodItem ({ data = {} }) {
  return (
    <div className='border border-1 border-gray-200 rounded-xl max-h-[268px]'>
      <div className='p-6 bg-gray-50 rounded-t-xl border-b gap-x-4 items-center flex'>
        <div className='ring-1 p-2 bg-white ring-offset-0 ring-gray-900/[0.1] rounded-lg shadow-md'>
          <LinkCalendar className='w-12 h-12' />
        </div>
        <div className='font-medium leading-6 text-gray-900 text-sm'>{data.periodDTO.monthByLocale + '/' + data.periodDTO.year}</div>
        <div className='relative ml-auto'>
          <Link href={`/savings/${data.id}`} className='block m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
      <dl className='text-sm leading-6 py-4 px-6 -my-3'>
        <div className='flex justify-between py-3 gap-x-4'>
          <dt className='text-gray-500'>Ingresos</dt>
          <dd className='text-gray-700'>{Formatter.formatCurrencyWithSymbol(data.income)}</dd>
        </div>
        <div className='flex justify-between py-3 gap-x-4'>
          <dt className='text-gray-500'>Gastos</dt>
          <dd className='text-gray-700'>{Formatter.formatCurrencyWithSymbol(data.expense)}</dd>
        </div>
        <div className='flex justify-between border-gray-100 border-t py-3 gap-x-4'>
          <dt className='text-gray-500'>Diferencia</dt>
          <dd className='flex items-start gap-x-2'>
            <div className='text-gray-900 font-medium'>{Formatter.formatCurrencyWithSymbol(data.totalReturn)}</div>
          </dd>
        </div>
      </dl>
    </div >

  )
}
