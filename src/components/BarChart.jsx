import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import chart from '../assests/jsonData/Chart.json';



Highcharts3D(Highcharts);
export default function BarChart() {
  const options = {
    chart:{
      type: 'bar',
      width: 800,
      height: 800,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 100
      }
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
      text: 'Bar Chart'
    },
    plotOptions: {
      bar: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
        name:'value',
      data: chart.map((data) => data.value)
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
