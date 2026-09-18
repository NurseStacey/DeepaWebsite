import { useState } from 'react'

import { NavLink, Link } from "react-router";

function App() {


  return (
    <div
      style={{display:'block'}}>
      <div>
          <NavLink
          to="/home"
        >
          Home
        </NavLink>      
      </div>
      <div>
        <NavLink
          to="/about"
        >
          About
        </NavLink>      
      </div>   
    </div>
  )
}

export default App
