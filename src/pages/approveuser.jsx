import React from 'react'
import declineimage from '../CepromasAssets/Cross sign wrong or incorrect negative no choice icon symbol icon illustration  isolated on red background 3d rendering (1).png'

const Approveuser = () => {
      function handleCancel(){
        
      }
      function handleApprove(){

      }
  return (
  
      <div className='lg:w-[400px] md:w-[400px] w-[300px] h-[400px] absolute rounded-3xl mt-10 justify-self-center border-2 p-10  bg-opacity-50 z-50'>
      <img src={declineimage} alt="" className='my-10 justify-self-center' />
      <div className='text-center'>
      <h3 className='font-bold '>Continue to approve "username".</h3>  
      <h3 >Action cannot be undone</h3> 
        </div>   
      <div className='flex gap-5 mt-12'>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray" onClick={handleCancel}>Cancel</button>
        <button className= "w-[120px] h-[40px] rounded-md border-2 border-gray text-white bg-[navy]" onClick={handleApprove}>Approve</button>
      </div>
      
     </div>
  
  )
}

export default Approveuser

