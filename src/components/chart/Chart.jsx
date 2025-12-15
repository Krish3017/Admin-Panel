import React from 'react'
import './chart.scss'
import AreaChart from './AreaChart'

const Chart = () => {

  return (
    <div className='chart'>
      <div className="title">Last 6 Months revenue</div>
      <AreaChart aspect={2/1}/>
    </div>
  )
}

export default Chart
