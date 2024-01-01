'use client'

import { useState } from 'react'
import { MultiSelect, MultiSelectItem } from "@tremor/react"
import KpiTotals from '@/components/KpiTotals'
import styles from 'styles/Dashboard.module.css'
import useTotalsByYears from '@/hooks/useTotalsByYears'
import useTotalsByCategorySubcategory from '@/hooks/useTotalsByCategorySubcategory'
import KpiByCategory from '@/components/KpiByCategory'
import { Card, Title, TabGroup, TabList, Tab, Grid, List, ListItem, Text, Bold } from '@tremor/react'

export default function Dashboard ({ years = [] }) {
  const [selectValue, setSelectValue] = useState(years.length > 3 ? years.slice(0, 4) : years)
  const { isPending, reports } = useTotalsByYears(selectValue)
  const { isPendingByCategory, reportsByCategory } = useTotalsByCategorySubcategory(selectValue)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleValueChange = (values) => {
    if ((values.length > 0 && values.length < 5) && !isPending && !isPendingByCategory) {
      setSelectValue(values)
    }
  }

  return (
    <div id='container' className='m-8 h-full'>
      <header className='w-96 ml-auto'>
        <MultiSelect value={selectValue} onValueChange={(values) => handleValueChange(values)}>
          {years.map((y) => <MultiSelectItem key={y} value={y}>{y}</MultiSelectItem>)}
        </MultiSelect >
      </header>
      <main className='mt-8'>
        <section className={`grow grid gap-8 mb-auto ${styles.gridContainer}`}>
          {reports && reports.map((r) => <KpiTotals key={r.years[0]} report={r} />)}
        </section>
        <div className='mt-8'>
          <Card>
            <Title>Gastos Categorizados</Title>
            <TabGroup className="mt-10" index={selectedIndex} onIndexChange={setSelectedIndex}>
              <TabList variant="line">
                <Tab>Subcategoría</Tab>
                <Tab>Categoría</Tab>
              </TabList>
            </TabGroup>
            <div className="flex justify-between gap-x-8 gap-y-2">
              {reportsByCategory && reportsByCategory.map((r) => <KpiByCategory key={r.year} year={r.year} report={selectedIndex > 0 ? r.expenseByCategory : r.expenseBySubcategory} />)}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}