import React, { useState } from 'react'
import declineimage from '../CepromasAssets/Cross sign wrong or incorrect negative no choice icon symbol icon illustration  isolated on red background 3d rendering (1).png'

const Decline = () => {
    const [decline, setDecline] = useState("");

    function  handleCancel(){

    }
    function handleDecline(){
        
    }
  return (
  
      <div className=' min-h-screen p-10  bg-black  fixed inset-0  bg-opacity-50 z-50'>
        <div className='lg:w-[400px] md:w-[400px] w-[300px] h-[400px] justify-self-center rounded-3xl bg-white  fixed inset-0 mt-10  z-50 p-10 '>
      <img src={declineimage} alt="" className='my-10 justify-self-center' />
      <div>
        <h3>Reason for declining</h3>
        <input type="text" className='lg:w-[273px] md:w-[273px] w-[200px]  h-[48px] rounded-md pl-2 outline-none border-2 ' onChange={(e)=>{setDecline(e.target.value)}} />
      </div>
      <div className='flex gap-5 mt-12'>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray text-b" onClick={handleCancel}>Cancel</button>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray text-white bg-[navy]" onClick={handleDecline}>Decline</button>
      </div>
      
      </div>
        </div>
  
  )
}

export default Decline
