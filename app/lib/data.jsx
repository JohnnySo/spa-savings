import { notFound } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchYears () {
  //to avoid nextjs interprete dashboard as static page generation I have to put this here to tell him it is dinamic
  noStore()
  const res = await fetch(process.env.SAVINGS_API_URL + '/master-data/years', { cache: 'no-store' })
  if (res.status == 404) {
    return notFound()
  }
  const years = await res.json()
  return years.map(String)
}

export async function fetchSavingPeriods (pageNumber, pageSize) {
  pageNumber = pageNumber ?? 0
  pageSize = pageSize ?? 12
  const res = await fetch(process.env.SAVINGS_API_URL + '/savings/paginated?' + new URLSearchParams({ page: pageNumber, size: pageSize }), { cache: 'no-store' })
  if (res.status == 404) {
    return notFound()
  }
  const savingPeriods = await res.json()
  return savingPeriods
}

export async function fetchSavingPeriod (savingPeriodId) {
  const res = await fetch(process.env.SAVINGS_API_URL + '/savings/' + savingPeriodId, { cache: 'no-store' })
  if (res.status == 404) {
    return notFound()
  }
  const savingPeriods = await res.json()
  return savingPeriods
}