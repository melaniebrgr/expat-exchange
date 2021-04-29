import React from 'react'
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis'

type listItem = { x: number, y: number }
interface Props {
  values: listItem[]
}

const HistoricalRates = ({ values }: Props) => {
  return (
    <XYPlot height={300} width= {300}>
      <XAxis title="last 30 days" tickTotal={0} />
      <YAxis />
      <LineSeries data={values} />
    </XYPlot>
  )
}

export default HistoricalRates