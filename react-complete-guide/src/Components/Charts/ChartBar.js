import React from 'react'
import './ChartBar.css'

function ChartBar(props) {

    let barFillHeight = '0%';

    if(props.maxValue > 0)
    {
        barFillHeight =  Math.round((props.value / props.maxValue) * 100) + '%' ;
    }

  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height : barFillHeight}}></div> {/* dynamically setting the barheight using style attribute it takes object as a input({}) which consiste of key value pair */}
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar