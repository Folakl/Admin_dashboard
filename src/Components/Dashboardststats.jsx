import React from 'react'
import moneybag from '../CepromasAssets/money bag.png'
import piechart from '../CepromasAssets/pie-chart 1.png'


const  DashboardStats = () => {
  return (
    <div className='grid lg:flex gap-5 md:grid-cols-2     grid-cols-1'>
      <div className='w-[230px] h-[136px] rounded-2xl opacity-90 bg-[#E8FBEA]  p-5 flex gap-5 '>
           
           <div className='my-5' >
              <h3>All properties</h3>
              <h3 className='font-semibold pt-2 text-[#37F14D] text-'>20 currently leased</h3>
            </div>  
            <h3 className='text-[#37F14D] font-semibold mt-5 text-4xl '>80</h3>   
      </div>
      <div className='w-[230px] h-[136px] rounded-2xl opacity-90 bg-[#E8F0FB]  p-5 flex gap-5'>
      <div className='my-5' >
              <h3>Property owners</h3>
              <h3 className='font-semibold pt-2 text-'>5 new members</h3>
            </div>  
            <h3 className=' font-semibold mt-5 text-4xl '>50</h3>    
      </div>
      <div className='w-[230px] h-[136px] rounded-2xl opacity-90 bg-[#F7E8FB]  p-5 flex gap-5'>
      <div className='my-5' >
              <h3>End Users</h3>
              <h3 className='font-semibold pt-2  text-[#DB37F1]'>5 new members</h3>
            </div>  
            <h3 className=' font-semibold mt-5 text-4xl text-[#DB37F1] '>100</h3>     
      </div>
     
      
    </div>
  )
}

export default DashboardStats
