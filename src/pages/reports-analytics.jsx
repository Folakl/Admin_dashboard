import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import transaction from './transactions';
import Reportstats from '../Components/Reportstats';
import Admin from '../Components/Admin';
import harvard from '../CepromasAssets/harvard.png'
import LineChart from '../Components/LineChart';
import RevenueChart from '../Components/RevenueChart';
import Notification from './Notification';
import { Link } from 'react-router-dom';
import Message from './message';
import Sms from './sms'

const ReportAnalytics = () => {
  
  return (

  <div className='flex'>
      <Sidebar />
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
        <Admin />
        <div className='px-10 pt-5'>
         <div>
          <Reportstats/>
         </div>  
         <div className="lg:flex md:grid grid gap-5 my-5">
                
               <div>
             <div className='my-5 '>
        <h3 className='font-bold text-[#333B69]'>Estimated sales on CEPROMAS</h3>
       </div>
          <div className='bg-white h-[300px] w-[500px] bg-opacity-100 rounded-2xl p-5'>
           <LineChart/>
           </div>
          </div>
           <div>
           <div className='my-5 '>
        <h3 className='font-bold text-[#333B69]'>Monthly Revenue</h3>
       </div>
            <div className='bg-white bg-opacity-100 h-[300px] w-[500px] rounded-2xl p-5'>
          <RevenueChart/>
           </div>
           </div>    
     </div>

  <div className='w-full md:overflow-x-auto lg:overflow-x-hidden overflow-x-auto mt-4'>
            <div className='md:min-w-[1300px] w-[1050px] lg:min-w-[1100px]'>
              <div className='grid grid-cols-6 text-sm  h-[50px] p-3 bg-[#FFF6F0] font-semibold'>
                <div className="flex gap-4">
                  <h3>S/N</h3>
                  <h3>Image</h3>
                </div>
                <h3>Source</h3>
                <h3 >Type</h3>
                <h3>Mode</h3>
                <h3>Descriptions</h3>
                <h3>Amount</h3>
                       
              </div>
              {transaction.map((transaction, index) => (
               <div
                 key={index}
                 className="grid grid-cols-6 items-center bg-white my-1 px-5 py-3"
               >
                 <div className="flex gap-4">
                   <h3>{transaction.SN}</h3>
                   <img
                     src={harvard}
                     alt=""
                     className="w-[40px] h-[40px] rounded-full"
                   />
                 </div>
                 <h3>{transaction.source}</h3>
                 <h3 >{transaction.Type}</h3>
                 <h3>{transaction.Mode}</h3>
                 <h3>{transaction.Description}</h3>
                 <h3 className="text-[#0E1D70] font-semibold cursor-pointer">
                   NGN {transaction.Amount}
                 </h3>
               </div>
             ))}
              
              
            </div>
          </div>
        </div>
      </div>
     
   
    </div>
  )
}

export default ReportAnalytics