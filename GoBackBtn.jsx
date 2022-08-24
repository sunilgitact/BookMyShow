import React from 'react'
import {useNavigate } from "react-router-dom"

const GoBackBtn = () => {

    let navigate=useNavigate()
    
  return (
   <>

<button id='GoBackBtn' onClick={()=>{navigate(-1)}}>Goback</button>
   
   </>
  )
}

export default GoBackBtn