
import { useEffect, useState, useTransition } from 'react'
import { fetchTotalsByYears } from '@/app/dashboard/server-actions'

export default function useTotalsByYears (years = []) {
  const [isPending, startTransition] = useTransition()
  const [reports, setReports] = useState([])

  useEffect(() => {
    startTransition(() => {
      if (years.length > 0) {
        fetchTotalsByYears(years).then((report) => {
          setReports(report.getReport.data)
        })
      }
    })
  }, [years])

  return {
    isPending,
    reports
  }
}
