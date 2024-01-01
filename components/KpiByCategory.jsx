import { useEffect, useState } from 'react'
import { Card, Title, Bold, Text, List, ListItem } from "@tremor/react"
import Util from '@/components/Util'
import Formatter from '@/components/Formatter'

export default function KpiByCategory ({ year, report }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(report.map(r => r.amount).reduce((a, b) => a + b, 0))
  }, [report])

  return (
    <div className='grow'>
      <Title className="mt-8">{year}</Title>
      <List className="mt-2">
        {report.map((r) => (
          <ListItem key={r.category}>
            <Text>{r.category}</Text>
            <Text>
              <Bold>{r.amount}</Bold>{" "}
              {`(${Formatter.formatNumber(Util.getPercentege(r.amount, total))}%)`}
            </Text>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
