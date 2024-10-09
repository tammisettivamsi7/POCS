import React, { useEffect, useState } from 'react';
import {utils, writeFile} from 'xlsx';
import './datafetch.css';  
 
const Excel = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>Response.json())
        .then(data=>setData(data))
        .catch(error=>console.error("error occured", error));
       
        }
        ,[]);
        const downloadXLSX=()=>{
            const worksheet=utils.json_to_sheet(data);
            const workbook=utils.book_new();
            utils.book_append_sheet(workbook,worksheet,'Data');
            writeFile(workbook,'data.xlsx');
        };
       
  return (
    <div>
        <h1>Fetch Data</h1>
        <button onClick={downloadXLSX}>Download data</button>
        <ul className='d'>
            {data.map(item=>(<li  key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </li>))}
        </ul>
    </div>

  )
}
 
export default Excel;
 