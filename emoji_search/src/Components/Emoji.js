import React, { useEffect, useState } from 'react'
import "./Emoji.css"
import  emojiData from "./Emoji.json"
function Emoji() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
  useEffect(()=>{
const newData=emojiData.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()))

setData(newData)
  },[search])
  return (
    <div >
        <div className='header'>
      <h1> Emoji Search</h1>
      <input type="search" name='search' placeholder='Search any Emoji..' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      </div>
     { data.map(emoji=><div className="card" >
  
  <ul className="list-group list-group-flush">
    <li className="list-group-item" onClick={()=>{navigator.clipboard.writeText(emoji.symbol) ;alert("Emoji Copied")}}>{emoji.symbol} {emoji.title}</li>
   
  </ul>
</div>)}
    </div>
)
}

export default Emoji
