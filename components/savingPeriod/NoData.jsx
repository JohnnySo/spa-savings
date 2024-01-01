import React from 'react'
import Keypad from '@/components/savingPeriod/Keypad'

export default function NoData ({ className }) {
  return (
    <>
      <h1 className='text-center m-32 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Comienza importando algunos datos de tu cuenta</h1>
      <Keypad className='flex grow content-start justify-center' />
    </>
  )
}
