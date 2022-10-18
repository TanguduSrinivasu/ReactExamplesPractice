import React from 'react'
import Chart from '../Charts/Chart'


function ExpensesChart(props) {

    const chartDataPoints = [

        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}

    ]

    for(const expense of props.expenses)    /* here we used of instead in because props.expenses is an array */
    {
        const expenseMonth = expense.date.getMonth();   /* starting at 0 => January */
        chartDataPoints[expenseMonth].value += expense.amount;  /* same month expense amounts will be added to that particualr month in chartDataPoints object */
    }

  return (
   <Chart dataPoints={chartDataPoints}></Chart>
  )
}

export default ExpensesChart