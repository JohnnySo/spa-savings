'use client'

import { useTransition, useRef, useState } from 'react'
import AddFileDropZone from '@/components/modal/modalAddData/AddFileDropZone'
import useInMemoryPagination from '@/hooks/useInMemoryPagination/useInMemoryPagination'
import FileContent from '@/components/modal/modalAddData/FileContent'
import { Dialog, Transition } from '@headlessui/react'
import TertiaryButton from '@/components/button/TertiaryButton'
import SuccessButton from '@/components/button/SuccessButton'
import Modal from '@/components/modal/Modal'
import { importFileInteraction } from '@/app/savings/server-actions'

export default function ModalAddData ({ open, setOpen }) {
  const errorRef = useRef()
  const [dataLoaded, setDataLoaded] = useState(null)
  const [file, setFile] = useState(null)
  const { paginationState, handleClick, handleClickLimits } = useInMemoryPagination(dataLoaded)
  const [isPending, startTransition] = useTransition()

  const handleSave = () => {
    if (file && !isPending) {
      const formData = new FormData()
      formData.append('file', file)
      startTransition(() => {
        importFileInteraction(formData).then(() => {
          handleClose()
        }).catch((e) => {
          errorRef.current.style.visibility = 'initial'
        })
      })
    }
  }

  const handleClose = () => {
    setOpen(false)
    setDataLoaded(false)
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className='bg-white px-4 pb-4 pt-5 sm:p-4 sm:pb-4 overflow-auto'>
        <div className='sm:flex sm:items-center'>
          <div className='mt-3 text-center sm:mt-0 sm:text-left w-full'>
            <Dialog.Title as='h3' className='text-base font-semibold leading-6 text-gray-900'>
              Agregar movimientos
            </Dialog.Title>
            <div className='mt-2'>
              {
                dataLoaded
                  ? <FileContent paginationState={paginationState} handleClick={handleClick} handleClickLimits={handleClickLimits} />
                  : <AddFileDropZone onDataLoaded={setDataLoaded} onFileAdded={setFile} />
              }
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 px-4 py-4 sm:flex sm:flex-row-reverse'>
        <SuccessButton type='button' onClick={() => handleSave()}>{isPending ? 'Agregando...' : 'Agregar'}</SuccessButton>
        <TertiaryButton onClick={() => handleClose()}>Cancel</TertiaryButton>
        <div ref={errorRef} className='flex text-red-600 flex-1 justify-center items-center invisible'>
          El archivo no se ha podido importar.
        </div>
      </div>
    </Modal>
  )
}
