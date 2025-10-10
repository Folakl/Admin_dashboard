import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import userone from '../CepromasAssets/Kunle.png';
import property from './property'
import { Link } from 'react-router-dom';



const Properties = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
       <h1 className='font-semibold mt-5 ml-5'>Property Listing</h1>
       <div className='px-10 pt-5 bg-[white] rounded-2xl m-5'>
        
         <div className='flex gap-20 font-bold my-3'>
           <Link to="#" className='border-b-2 border-[#192252]'>Recommended</Link>
           <Link to="#">Recent</Link>
           <Link to="#">Featured</Link>
           <Link to="#">Popular</Link>
           <Link to="#">Nearest</Link>
         </div>
          <div className='flex gap-5 my-3'>
              <h3 className='font-semibold'>Recent Properties</h3>
              <div className='flex gap-3'>
              <div className='pt-1'>
              <ion-icon name="add-circle-outline"></ion-icon>
              </div>
                   <h3>Add new</h3>
              </div>
          </div>


        <div className='lg:overflow-hidden md:overflow-x-auto overflow-x-auto lg:w-[1150px] md:w-[1200px] w-[900px]  whitespace-nowrap'>
            <div className='grid grid-cols-7 h-[50px] p-3 bg-[#FFF6F0]'>
               <h3>Unselect</h3>
               <h3>Picture</h3>
               <h3>Property Owner</h3>
               <h3>Property Name</h3>
               <h3 >Location</h3>
               <h3>Date added</h3>
               <h3>Price</h3>
            </div>
           
            {property.map((property, index) => (
            <div key={index} className="
            grid grid-cols-7 items-center bg-white my-1 lg:w-[1150px] md:w-[1150px]  w-[900px] text-wrap px-5 py-3">
               <div><input type="checkbox" name="" id=""  /></div>
               <img src={userone} alt="User" className="w-[70px] h-[70px]" />
             
            
                <h3>{property.Propertyowner}</h3>
              
              <h3  >{property.propertyname}</h3>
              <h3 >{property.Location}</h3>
              <h3>{property.DateAdded}</h3>
            <h3 className='text-[#0E1D70] font-semibold'>NGN{property.price}</h3>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Properties
