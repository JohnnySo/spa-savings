'use client'

import { useCallback } from 'react'
import Dropzone from 'react-dropzone'
import ReadExcelFile from '@/components/modal/import/ReadExcelFile'
import { CloudUpIcon } from '@/components/Icons'

export default function AddFileDropZone ({ onDataLoaded, onFileAdded }) {
  const uploadHandler = useCallback((file) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      ReadExcelFile.read(event, readCallback)
    }
    onFileAdded(file[0])
    reader.readAsBinaryString(file[0])
  }, [])

  function readCallback (json) {
    onDataLoaded(json)
  }

  return (
    <Dropzone onDrop={uploadHandler} maxFiles={1}>
      {({ getRootProps, getInputProps }) => (
        <section className='h-full w-full'>
          <div {...getRootProps()} className='h-full p-32 text-gray-500 cursor-pointer'>
            <input {...getInputProps()} />
            <div className='text-center'>
              <div className='flex justify-center animate-bounce'>
                <CloudUpIcon className='w-28 h-28' />
              </div>
              <p>Drag and drop a file here, or click to select a file</p>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
