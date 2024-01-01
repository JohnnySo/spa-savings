import Dashboard from '@/app/dashboard/dashboard-page'
import { fetchYears } from '@/app/lib/data'

export default async function Page () {
  const years = await fetchYears()
  return (
    <Dashboard years={years} />
  )
}
