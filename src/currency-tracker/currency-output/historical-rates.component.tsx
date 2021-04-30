import React from 'react'
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis'

type listItem = { x: number, y: number }
interface Props {
  values: listItem[]
}

const HistoricalRates = ({ values }: Props) => {
  return (
    <XYPlot margin={{left: 100}} height={200} width={400}>
      <XAxis title="last 30 days" tickTotal={0} />
      <YAxis />
      <LineSeries data={values} style={{ fill: 'none' }}/>
    </XYPlot>
  )
}

export default HistoricalRates