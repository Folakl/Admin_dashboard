import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import userone from '../CepromasAssets/Kunle.png';
import Users from './Users';
import { Link } from 'react-router-dom';


const Endusers = () => {
 
  
  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
        <Admin />
        <div className='px-10 pt-5'>
          <h1 className='font-semibold'>All End Users</h1>

          <div className='w-full md:overflow-x-auto lg:overflow-x-hidden overflow-x-auto mt-4'>
            <div className='md:min-w-[1300px] min-w-[1200px] lg:min-w-[1100px]'>
              <div className='grid grid-cols-6 text-sm  h-[50px] p-3 bg-[#FFF6F0] font-semibold lg:w-[1150px] md:w-[1200px] w-[900px]'>
               <div className='flex gap-10'>
               <h3>S/N</h3>
                <h3>S/N</h3>
               </div>
                 
                <h3>Full Name</h3>
                <h3 >Email Address</h3>
                <h3>Phone Number</h3>
                <h3>Address</h3>
                <h3>Actions</h3>
              </div>

              {/* Table Rows */}
              {Users.map((Users, index) => (
                <div
                  key={index}
                  className='grid grid-cols-6 items-center bg-white my-1 px-3 py-3 text-sm lg:w-[1150px] md:w-[1200px] min-w-[900px]'
                >
                  
                    <div className='flex  gap-10'>
                    <h3>{Users.SN}</h3>
                    <img src={userone} alt='User' className='w-[40px] h-[40px] rounded-full' />
                    </div>
                    
                    <h3>{Users.Name}</h3>
               
                  <h3 >{Users.EmailAddress}</h3>
                  <h3>{Users.PhoneNumber}</h3>
                  <h3>{Users.Address}</h3>
                  <Link
                    to='/RentersDetails'
                    className='text-[#0E1D70] font-semibold'
                  >
                    Manage User
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Endusers
