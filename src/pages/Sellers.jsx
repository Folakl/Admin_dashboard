import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import { Link } from 'react-router-dom';
import Seller from './Seller';
import Victoria from '../CepromasAssets/victoria.png'

const Sellers = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
  
      <div className='flex-1  ml-[220px] lg:ml-[180px] md:ml-[70px] transition-all'>
        <Admin />
        <div className='px-4 md:px-8 l pt-5'>
          <h1 className='font-semibold'>All Owners</h1>

          <div className='overflow-x-auto lg:overflow-visible w-full'>
            
            <div className='md:min-w-[1200px] min-w-[1010px] lg:w-[900px] whitespace-nowrap'>
              <div className='grid grid-cols-7 text-sm  h-[50px] py-3 px-2 bg-[#FFF6F0] font-semibold'>
                <div className='flex gap-6'>
                  <h3>S/N</h3>
                  <h3>S/N</h3>
                </div>
                <h3>Full Name</h3>
                <h3>Email Address</h3>
                <h3>No of Properties</h3>
                <h3>Phone Number</h3>
                <h3>Address</h3>
                <h3>Actions</h3>
              </div>

              {Seller.map((Seller, index) => (
                <div key={index} className="grid grid-cols-7 text-sm   items-center bg-white my-1 px-3 py-3">
                  <div className = "flex gap-10">
                  <h3>{Seller.SN}</h3>
                  <img src={Victoria} alt="User" className="w-[40px] h-[40px] rounded-full" />

                  </div>
               
                    
                    <h3>{Seller.Name}</h3>
                 
                  <h3>{Seller.EmailAddress}</h3>
                  <h3>{Seller.Noofproperty}</h3>
                  <h3>{Seller.PhoneNumber}</h3>
                  <h3>{Seller.Address}</h3>
                  <Link to="/ownersDetails" className='text-[#0E1D70] font-semibold'>Manage User</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellers
