import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import noticon from '../CepromasAssets/Vector.png';
import { Link } from 'react-router-dom';



const Propertylistingtwo = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
       <h1 className='font-semibold ml-10 mt-5'>Property Listing</h1>
       <div className='px-10 pt-4 bg-[white] rounded-2xl m-8 min-h-[550px] '>
        
         <div className='flex flex-wrap  lg:gap-20 md:gap-20 gap-5 font-bold my-3'>
           <Link to="#" className='border-b-2 border-[#192252]'>Recommended</Link>
           <Link to="#">Recent</Link>
           <Link to="#">Featured</Link>
           <Link to="#">Popular</Link>
           <Link to="#">Nearest</Link>
         </div>
         <div className='flex items-center lg:justify-center md:justify-center justify-start w-full h-[300px]'>
         <img src={noticon} alt="" />
         </div>
         <div className=' lg:text-center md:text-center pb-2 text-start text-wrap'>
         <h3>No recommended property yet, once you add properties it will show here. </h3> 
         <div className=' text-center  flex gap-1 justify-center items-center'> <Link to="#" className='text-[blue]'>Click here </Link>
         <h3> to add property</h3></div>
         </div>
        
        


        
       </div>
      </div>
    </div>
  )
}

export default Propertylistingtwo
