'use client'

import { useState } from 'react'
import CustomModalAddData from '@/components/modal/modalAddData/ModalAddData'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function Keypad ({ className = '' }) {
  const [show, setShow] = useState(false)
  return (
    <div className={className}>
      <PrimaryButton onClick={() => setShow(true)}>Importar</PrimaryButton>
      <CustomModalAddData open={show} setOpen={setShow} />
    </div>
  )
}
