import React from 'react'
import * as Loader from 'react-loader-spinner'
export const Loading = () => {
  return (
    <div className='d-flex justify-content-center items-centre'>
      <Loader.Puff  type="Puff" color="#00BFFF" height={550} width={80}/>
    </div>
  )
}

 
