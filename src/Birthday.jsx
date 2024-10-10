import React, { useState} from 'react'
import db from './db.js'
import "./style.css"
const Birthday = () => {
    let[details,setdetails]=useState(db);
    // console.log(details);
    
  return (
    <div className='card'>
        <h1 className='head'>{details.length} Birthdays today</h1>
      {details.map((x,y)=>{
        return(
            <div key={y}>
            <img src={x.image} alt=""  className='img'/>
            <div className='name-age'>
            <p className='name'><strong>{x.name}</strong></p>
            <p className='age'>{x.age}</p>
            </div>
            </div>
        )
      })}
      <button onClick={()=>setdetails([])} className='bct'>Clear All</button>
    </div>
  )
}

export default Birthday
