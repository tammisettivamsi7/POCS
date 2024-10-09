import React from 'react'
import ColumnChart from './ColumnChart'
import BarChart from './BarChart'
import LineChart from './LineChart'
import Piech from './Piech'
import TableData from './TableData'
import { Link } from 'react-router-dom'
import '../assests/style/Charts.css'
export default function Charts() {
  return (
    <div>
      <div className="backButton">
        <Link to="/">
          <button className="backLink">Back</button>
        </Link>
      </div>
      <div className='dataContainer'>
      <TableData />
      <ColumnChart />
      <BarChart />
      <LineChart />
      <Piech />
      </div>
    </div>
  )
}
