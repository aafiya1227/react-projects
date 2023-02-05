import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote ,deleteNote } from '../Reducer/action'
import "./Notes.css"
function Notes() { 
  const [input,setInput]=useState("")
  const dispatch=useDispatch()
  return (
    <div className='container'>
      <h1 className='heading'> Notes App</h1>
      <input className='search' type="search" placeholder='Search...' value={input} onChange={(e)=>setInput(e.target.value)} ></input>
      <div className='notes_editor'>
      <textarea className='textarea' placeholder='Enter Your note here' rows="5" ></textarea>
     <button className='btn' onClick={()=>dispatch(addNote(input))} >Add</button>
      </div>
    </div>
  )
}

export default Notes

