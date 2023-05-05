import React from 'react'
import Leftside from "../DBComponent/Leftside"
import Rightside from "../DBComponent/Rightside"

const Dashbord = () => {
  return (
   <>
    <h1 className='w-screen h-screen flex items-center'>
        <Leftside />
        <Rightside />
    </h1>
   </>
  )
}

export default Dashbord