'use server'

import { revalidatePath } from 'next/cache'

export async function importFileInteraction (formData) {
  const response = await fetch(process.env.SAVINGS_API_URL + '/savings/import-file',
    { method: 'POST', body: formData, cache: 'no-store' })
  if (response.ok) {
    revalidatePath(`/savings?pageNumber=0&pageSize=12`)
  } else {
    throw new Error(`HTTP error ${response.status}`)
  }
}

export async function editMovementInteraction (dataToUpdate) {
  const response = await fetch(process.env.SAVINGS_API_URL + '/movement',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToUpdate),
      cache: 'no-store'
    })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(`HTTP error ${response.status}`)
  }
}