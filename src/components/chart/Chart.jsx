import React from 'react'
import './chart.scss'
import AreaChart from './AreaChart'

const Chart = () => {

  return (
    <div className='chart'>
      <div className="title">Last 6 months revenue</div>
      <AreaChart />
    </div>
  )
}

export default Chart
