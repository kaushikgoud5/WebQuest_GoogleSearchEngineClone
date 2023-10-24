import React from 'react'
const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-${props.darkmode?"dark":"light"} bg-${props.darkmode?"dark":"light"}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            WebQuest🔍
            </a>
            <div className={`form-check form-switch text-${props.darkmode?"light":"dark"} border rounded-pill bg-${props.darkmode?"dark":"white"} border-4 ` }>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" for="flexSwitchCheckDefault">{props.darkmode?"Light☀️":"Dark🌜"}  </label>
            </div>
            
        </div>
        
        </nav>
    </div>
  )
}

export default Navbar
