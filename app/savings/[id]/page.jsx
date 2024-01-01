import DetailSavingPage from '@/app/savings/[id]/detail-saving-page'
import { fetchSavingPeriod } from '@/app/lib/data'

export default async function Page ({ params }) {
  const savingPeriod = await fetchSavingPeriod(params.id)
  return <DetailSavingPage savingPeriod={savingPeriod} />
}