
import { useEffect, useState } from 'react'
import { Card, Title, BarChart, Subtitle } from '@tremor/react'
import Formatter from '@/components/Formatter'
import { ResponsiveContainer } from 'recharts'

export default function CustomBarChart ({ chartInfo, data }) {

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(data.map((period) => chartInfo.mapperFunc(period)))
  }, [chartInfo, data])

  return (
    <ResponsiveContainer className='min-w-0' width='99%'>
      <Card>
        <Title>{chartInfo.title}</Title>
        <Subtitle>{chartInfo.subtitle}</Subtitle>
        <BarChart
          className='mt-6'
          data={chartData}
          index={chartInfo.index}
          categories={chartInfo.categories}
          colors={chartInfo.colors}
          valueFormatter={Formatter.formatCurrencyWithSymbol}
          yAxisWidth={48}
          showGridLines
          noDataText='No hay datos'
        />
      </Card>
    </ResponsiveContainer>
  )
}
