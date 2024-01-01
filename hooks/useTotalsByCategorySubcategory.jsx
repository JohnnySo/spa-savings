
import { useEffect, useState, useTransition } from 'react'
import { fetchTotalsByCategory } from '@/app/dashboard/server-actions'

export default function useTotalsByCategorySubcategory (years = []) {
  const [isPending, startTransition] = useTransition()
  const [reports, setReports] = useState([])

  useEffect(() => {
    startTransition(() => {
      if (years.length > 0) {
        fetchTotalsByCategory(years).then((report) => {
          setReports(report.getReport.dataByCategory)
        })
      }
    })
  }, [years])

  return {
    isPendingByCategory: isPending,
    reportsByCategory: reports
  }
}
