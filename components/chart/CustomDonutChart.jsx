import { Card, Title, DonutChart, Subtitle } from '@tremor/react'
import Formatter from '@/components/Formatter'
import * as Constants from '@/components/Constants'

export default function CustomDonutChart ({ info = {}, handleClick = () => { } }) {
  return (
    <Card className='h-full w-[99%]'>
      <Title>Gastos</Title>
      <Subtitle>
        Tus gastos distribuidos por categorías
      </Subtitle>
      <DonutChart
        className='mt-6 hover:cursor-pointer'
        data={info}
        category='amount'
        index='key'
        valueFormatter={Formatter.formatCurrencyWithSymbol}
        colors={['red', 'violet', 'indigo', 'stone', 'cyan', 'amber', 'yellow', 'blue', 'emerald', 'pink', 'teal', 'orange']}
        onValueChange={(event) => { handleClick(event ? event.key : Constants.SAVINGS_MOVEMENT_FILTER_ALL) }}
      />
    </Card>
  )
}