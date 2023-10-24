import React from 'react'
import Results from './Results'
import { Route,Routes } from 'react-router'

const Routing = () => {
  return (
    <>    
    <div>
      <Routes>
          <Route exact path='/web' element={<Results/>} />
          <Route exact path='/images' element={<Results />} />
          <Route exact path='/news' element={<Results />} />
          <Route exact path='/vedios' element={<Results />} />
       </Routes>

    </div>
    </>

  )
}

export default Routing
