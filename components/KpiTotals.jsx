import { BadgeDelta, Card, Flex, Metric, ProgressBar, Text } from "@tremor/react"
import Formatter from '@/components/Formatter'
import { useEffect, useState } from 'react'
import Util from '@/components/Util'

export default function KpiTotals ({ report = {} }) {

  return (
    <Card key={report.years[0]}>
      <Flex alignItems="start">
        <div>
          <Text>Ahorros {report.years[0]}</Text>
          <Metric>{Formatter.formatCurrencyWithSymbol(report.totalSaved)}</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">{Formatter.formatNumber(Util.getPercentege(report.totalSaved, report.income))}%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">{Formatter.formatNumber(Util.getPercentege(report.expense, report.income))}% ({Formatter.formatCurrencyWithSymbol(Math.abs(report.expense))})</Text>
        <Text>{Formatter.formatCurrencyWithSymbol(report.income)}</Text>
      </Flex>
      <ProgressBar value={Util.getPercentege(report.totalSaved, report.income)} className="mt-2" />
    </Card>
  )
}
