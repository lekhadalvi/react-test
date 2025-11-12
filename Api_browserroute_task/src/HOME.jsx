import React from 'react'
import InvestorsList from './Investor'
import Investorform from './Investorform'
import { NavLink } from 'react-router-dom'


function HOME()  {

  return (
    <>
   <nav>
    
    <NavLink to="/investors">Investor</NavLink>
     <NavLink to="/investorform">Investor form</NavLink>
   </nav>
        </>
  )
}

export default HOME