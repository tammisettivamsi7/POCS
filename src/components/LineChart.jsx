import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chart from '../assests/jsonData/Chart.json';



export default function LineChart() {

    const options = {
        chart:{
            type: 'spline',//line
            width: 800,
            height: 800,
        },

        xAxis:{
            title:{
                text: 'Months'
            },
                categories: chart.map((data) => data.month)
            },

        yAxis:{
            title: {
                text: 'sales of sony Tv'
            }
        },

        title: {
          text: 'Line Chart'
        },
        
       
        series: [{
            name:'value',
          data: chart.map((data) => data.value),
          colors: ['#FF0000', '#00FF00', '#0000FF'] 
        }]
      };
  return (
    <div>
      <HighchartsReact 
        highcharts = {Highcharts} 
        options = {options} 
        />
    </div>
  )
}
