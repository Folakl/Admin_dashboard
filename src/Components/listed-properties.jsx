import React from 'react'
import image from '../CepromasAssets/glass house.png'
import { useNavigate } from 'react-router-dom';
const Listedproperties = () => {
     const navigate = useNavigate();
    
    
     const handleproperty=()=>{
      navigate("/properties-details")
     }
    
  return (
     
      <div className='lg:flex md:grid-cols-2 grid-cols-1 grid  flex-wrap gap-5'>
             <div className=" rounded-lg p-3 shadow-sm bg-[#F9F9F9]  pl-4">
         <img src={image} alt="property" className="w-[200px] h-[200px]  rounded-md" />
         <div className='flex justify-between'>
         <h3 className="mt-2 font-bold pl-2 cursor-pointer">Two-phase Bungalow</h3>
          <div className='pt-3 cursor-pointer ' onClick={handleproperty}>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </div>
         </div>
         <p className='text-[#FF5A3C] font-bold pl-2'>NGN 200, 000</p>
         <div className='flex gap-2 pl-2'>
          <div className='pt-2'>
          <ion-icon name="location-outline"></ion-icon>
          </div>
         <p className='text-sm text-gray-600 py-2 '>Lekki phase 1,Lagos</p>
         </div>
      
       </div>
       <div className=" rounded-lg p-3 shadow-sm bg-[#F9F9F9] pl-4">
         <img src={image} alt="property" className="w-[200px] h-[200px]  rounded-md" />
         <div className='flex justify-between'>
         <h3 className="mt-2 font-bold pl-2 cursor-pointer">Two-phase Bungalow</h3>
          <div className='pt-3 cursor-pointer ' onClick={handleproperty}>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </div>
         </div>
         <p className='text-[#FF5A3C] font-bold pl-2'>NGN 200, 000</p>
         <div className='flex gap-2 pl-2'>
          <div className='pt-2'>
          <ion-icon name="location-outline"></ion-icon>
          </div>
         <p className='text-sm text-gray-600 py-2 '>Lekki phase 1,Lagos</p>
         </div>
      
       </div>
       <div className=" rounded-lg p-3 shadow-sm bg-[#F9F9F9] pl-4">
         <img src={image} alt="property" className="w-[200px] h-[200px]  rounded-md" />
         <div className='flex justify-between'>
         <h3 className="mt-2 font-bold pl-2 cursor-pointer">Two-phase Bungalow</h3>
          <div className='pt-3 cursor-pointer ' onClick={handleproperty}>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </div>
         </div>
         <p className='text-[#FF5A3C] font-bold pl-2'>NGN 200, 000</p>
         <div className='flex gap-2 pl-2'>
          <div className='pt-2'>
          <ion-icon name="location-outline"></ion-icon>
          </div>
         <p className='text-sm text-gray-600 py-2 '>Lekki phase 1,Lagos</p>
         </div>
      
       </div>
      </div>
    
  )
}

export default Listedproperties
