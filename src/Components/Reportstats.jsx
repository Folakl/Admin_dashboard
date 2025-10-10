import React from 'react'
import moneybag from '../CepromasAssets/money bag.png'
import piechart from '../CepromasAssets/pie-chart 1.png'


const Reportstats = () => {
  return (
    <div className='md:grid-cols-2 grid grid-col-1 lg:flex gap-5'>
      <div className='lg:w-[350px] md:w-[280px] w-[250px] h-[120px] rounded-2xl opacity-90 bg-white  p-5 flex gap-5'>
          <div className='rounded-full bg-[#DCFAF8] w-[70px] h-[70px] flex items-center justify-center' >
            <img src={moneybag} alt="" />
            </div>  
           <div>
              <h3 className='text-[#718EBF]'>Total Revenue</h3>
              <h3 className='font-semibold pt-2 text-2xl'>NG1,500,000</h3>
            </div>     
      </div>
      <div className='lg:w-[350px] md:w-[280px] w-[250px]  h-[120px] rounded-2xl opacity-90 bg-white  p-5 flex gap-5'>
          <div className='rounded-full bg-[#FFE0EB] w-[70px] h-[70px] flex items-center justify-center' >
            <img src={piechart} alt="" />
            </div>  
           <div>
              <h3 className='text-[#718EBF]'>Total Revenue</h3>
              <h3 className='font-semibold pt-2 text-2xl'>NG1,500,000</h3>
            </div>     
      </div>
      <div className='lg:w-[350px] md:w-[280px] w-[250px]  h-[120px] rounded-2xl opacity-90 bg-white  p-5 flex gap-5'>
          <div className='rounded-full bg-[#DCFAF8] w-[70px] h-[70px] flex items-center justify-center' >
            <img src={moneybag} alt="" />
            </div>  
           <div>
              <h3 className='text-[#718EBF]'>Rate of Revenue</h3>
              <h3 className='font-semibold pt-2 text-2xl'>+5.80%</h3>
            </div>     
      </div>
      
    </div>
  )
}

export default Reportstats
