import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import property from './property'
import image from '../CepromasAssets/image4.png'
import { useNavigate } from 'react-router-dom'





const Allproperties = () => {
 const navigate = useNavigate();


 const handleproperty=()=>{
  navigate("/properties-details")
 }


  return (
    <div className='flex'>
      <Sidebar/>
     <div className='flex-1 lg:pl-[148px]  md:pl-[10px] pl-[10px]'>
         <div className="w-full px-4 md:px-6">
       <Admin/>
     <div className='mx-10 mt-8'>
        <h3 className='font-bold'>All properties</h3>
        <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-5 bg-[white] rounded-2xl my-1 px-5 py-3'>
      {property.map((property, index) => (
    <div key={index} className=" rounded-lg p-3 shadow-sm bg-[#F9F9F9] pl-4">
      <img src={image} alt="property" className="w-[220px] h-[160px]  rounded-md" />
      <div className='flex justify-between'>
      <h3 className="mt-2 font-bold pl-2 cursor-pointer">{property.name}</h3>
       <div className='pt-3 cursor-pointer ' onClick={handleproperty}>
       <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       </div>
      </div>
      <p className='text-[#FF5A3C] font-bold pl-2'>NGN{property.amount}</p>
      <div className='flex gap-2 pl-2'>
       <div className='pt-2'>
       <ion-icon name="location-outline"></ion-icon>
       </div>
      <p className='text-sm text-gray-600 py-2 '>{property.location}</p>
      </div>
   
    </div>
  ))}
</div>

     </div>
      </div>
     </div>
    </div>
  )
}

export default Allproperties
