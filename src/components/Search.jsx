import { useEffect, useState } from 'react'
import React from 'react'
import {Links} from './Links'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../context/ResultContextProvider'

const Search = () => {
  const [text,setText]=useState("Virat");
  const {setSearchTerm}=useResultContext();
  const [debouncedValue]=useDebounce(text,1000);
  useEffect(()=>{
    if(debouncedValue) setSearchTerm(debouncedValue);
  },[debouncedValue]);


  return (
    <div >
      <div className="container  d-flex justify-content-center align-items-center mt-3">
      <div className="input-group " style={{width:"50%"}}>
  <input
    value={text}
    type="text"
    className="form-control border border-1 rounded-pill bg-light "
    
    placeholder="🔎 Search Google or type URL"
    onChange={(e) => setText(e.target.value)}
  />
  {text !== '' && (
    <div className="input-group-append">
      <button type="button" className="btn  border rounded-pill border-opacity-0" onClick={() => setText('')}>
        ❌
      </button>
    </div>
  )}
      </div>
    
</div>

    
      <Links/>
    </div>
  )
}

export default Search
