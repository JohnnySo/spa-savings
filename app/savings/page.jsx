import Savings from '@/app/savings/savings-page'
import { fetchSavingPeriods } from '@/app/lib/data'

export default async function Page ({ searchParams }) {
  const savingPeriods = await fetchSavingPeriods(searchParams.pageNumber, searchParams.pageSize)
  return <Savings paginatedSavingPeriods={savingPeriods} />
}