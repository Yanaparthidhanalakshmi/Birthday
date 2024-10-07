import React, { useState} from 'react'
import db from './db.js'
import "./style.css"
const Birthday = () => {
    let[details,setdetails]=useState(db);
    // console.log(details);
    
  return (
    <div className='card'>
        <h1 className='head'>{details.length} Birthdays today</h1>
      {details.map(x=>{
        return(
            <div >
            <img src={x.image} alt=""  className='img'/>
            <p className='name'><strong>{x.name}</strong></p>
            <p className='age'>{x.age}</p>
            </div>
        )
      })}
      <button onClick={()=>setdetails([])}>Clear All</button>
    </div>
  )
}

export default Birthday
