'use client'

import { useRef, useTransition } from 'react'
import { TextInput } from "@tremor/react"
import Formatter from '@/components/Formatter'
import TertiaryButton from '@/components/button/TertiaryButton'
import SuccessButton from '@/components/button/SuccessButton'
import Modal from '@/components/modal/Modal'
import { editMovementInteraction } from '@/app/savings/server-actions'

export default function EditMovementModal ({ open = false, setOpen = () => { }, data = {}, setData = {}, updateMovement = () => { } }) {
  const errorRef = useRef()
  const [isPending, startTransition] = useTransition()

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeData = (event) => {
    setData((prevValue) => { return { ...prevValue, comment: event.target.value } })
  }

  const handleSave = (event) => {
    event.preventDefault()
    if (!isPending) {
      const dataToUpdate = { 'id': data.id, 'savingId': data.savingId, 'comment': data.comment }
      startTransition(() => {
        editMovementInteraction(dataToUpdate).then((response) => {
          if (response.success) {
            updateMovement({ id: data.id, comment: data.comment })
            handleClose()
          }
        }).catch((e) => {
          errorRef.current.style.visibility = 'initial'
        })
      })
    }
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <form onSubmit={(event) => handleSave(event)}>
        <div className='bg-white px-4 pb-4 pt-5 sm:p-4 sm:pb-4 overflow-auto'>
          <div className='sm:flex sm:items-center'>
            <div className='mt-3 text-center sm:mt-0 sm:text-left w-full'>
              <div className='mt-2'>

                <div className="flex flex-wrap -mx-3 mb-0 md:mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor='category' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Categoría</label>
                    <TextInput id='category' value={data.category} disabled={true} />
                  </div>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label htmlFor='subcategory' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Subcategoría</label>
                    <TextInput id='subcategory' value={data.subcategory} disabled={true} />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label htmlFor='description' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Descripción</label>
                    <TextInput id='description' value={data.description} disabled={true} />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-6">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label htmlFor='date' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Fecha</label>
                    <TextInput id='date' value={Formatter.formatDate(data.operationDate)} disabled={true} />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label htmlFor='amount' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Cantidad</label>
                    <TextInput id='amount' value={Formatter.formatCurrencyWithoutSymbol(data.amount)} disabled={true} />
                  </div>
                  <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label htmlFor='balance' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Saldo</label>
                    <TextInput id='balance' value={Formatter.formatCurrencyWithoutSymbol(data.balance)} disabled={true} />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0 md:mb-6">
                  <div className="w-full px-3 mb-0">
                    <label htmlFor='comment' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Comentario</label>
                    <TextInput id='comment' placeholder='Coche de juguete' value={data.comment} onChange={handleChangeData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 px-4 py-4 sm:flex sm:flex-row-reverse'>
          <SuccessButton type='submit'>{isPending ? 'Guardando...' : 'Guardar'}</SuccessButton>
          <TertiaryButton onClick={() => handleClose()}>Cancel</TertiaryButton>
          <div ref={errorRef} className='flex text-red-600 flex-1 justify-center items-center invisible'>
            Ha ocurrido un problema al modificar el movimiento.
          </div>
        </div>
      </form>
    </Modal>
  )
}
