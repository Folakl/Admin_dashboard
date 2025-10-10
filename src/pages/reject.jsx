import React, { useState } from 'react'
import declineimage from '../CepromasAssets/Cross sign wrong or incorrect negative no choice icon symbol icon illustration  isolated on red background 3d rendering (1).png'

const Reject = () => {
    const [reject, setReject] = useState("")
      function handleCancel(){
        
      }
      function handleReject(){

      }
  return (
  
      <div className='w-[400px] h-[400px] rounded-3xl mt-10 justify-self-center border-2 p-10 '>
      <img src={declineimage} alt="" className='my-10 justify-self-center' />
      <div>
        <h3>Reason for Rejecting</h3>
        <input type="text" className='w-[273px] h-[48px] rounded-md pl-2 outline-none border-2' onChange={(e)=>{setReject(e.target.value)}}/>
      </div>
      <div className='flex gap-5 mt-12'>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray" onClick={handleCancel}>Cancel</button>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray text-white bg-[navy]" onClick={handleReject}>Reject</button>
      </div>
      
     </div>
  
  )
}

export default Reject

