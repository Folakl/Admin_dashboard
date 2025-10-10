import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import userone from '../CepromasAssets/Kunle.png';
import property from './property'
import { Link } from 'react-router-dom';

const Propertylisting = () => {
  
  return (

  <div className='flex'>
      <Sidebar />
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
        <Admin />
        <div className='px-10 pt-5'>
          <div className='lg:flex md:flex grid  lg:gap-20 md:gap-20 gap-3 lg:mr-0 md:mr-0 mr-[750px]  h-fit font-bold my-3'>
            <Link to="#" className='border-b-2 border-[#192252]'>Recommended</Link>
            <Link to="#">Recent</Link>
            <Link to="#">Featured</Link>
            <Link to="#">Popular</Link>
            <Link to="#">Nearest</Link>
          </div>
         <h3 className='font-semibold'>All Properties</h3>

         <div className='w-full md:overflow-x-auto lg:overflow-x-hidden overflow-x-auto mt-4'>
            <div className='md:min-w-[1300px] w-[1050px] lg:min-w-[1100px]'>
              <div className='grid grid-cols-7 text-sm  h-[50px] p-3 bg-[#FFF6F0] font-semibold'>
                 <h3>Unselect</h3>
                  <h3>Picture</h3>
                  <h3>Property Owner</h3>
                  <h3>Property Name</h3>
                  <h3 >Location</h3>
                  <h3>Date added</h3>
                  <h3>Price</h3>
                       
              </div>
              {property.map((property, index) => (
               <div
                 key={index}
                 className="grid grid-cols-7 items-center bg-white my-1 px-5 py-3"
               >
                 <div><input type="checkbox" name="" id=""  /></div>
                  <img src={userone} alt="User" className="w-[70px] h-[70px]"/>                       
                   <h3>{property.Propertyowner}</h3>              
                 <h3 >{property.propertyname}</h3>
                 <h3 >{property.Location}</h3>
                 <h3>{property.DateAdded}</h3>
                 <h3 className='text-[#0E1D70] font-semibold'>NGN{property.price}</h3>
               </div>
             ))}
              
              
            </div>
          </div>
        </div>
      </div>
     
   
    </div>
  )
}


export default Propertylisting
