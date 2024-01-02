'use client'

import { useState } from 'react'
import ImportMovementsModal from '@/components/modal/import/ImportMovementsModal'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function Keypad ({ className = '' }) {
  const [show, setShow] = useState(false)
  return (
    <div className={className}>
      <PrimaryButton onClick={() => setShow(true)}>Importar</PrimaryButton>
      <ImportMovementsModal open={show} setOpen={setShow} />
    </div>
  )
}
