import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'


function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); /* this will give array full of datapointvalues [0,1,2,3] */
    const totalMaximum = Math.max(...dataPointValues) /*  => Math.max(takes values as input) input will be 0,1,2,3,4 */
    /* since max function requires  group of values seperated by comma but dataPointValues is an array of values so to convert it into individual values we used spread operator */
    /* It will get input as 12 months expenses values */
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => (
        <ChartBar key={dataPoint.label}
        maxValue={totalMaximum}
        value={dataPoint.value}
        label={dataPoint.label}
        ></ChartBar>))}
    </div>
  )
}

export default Chart