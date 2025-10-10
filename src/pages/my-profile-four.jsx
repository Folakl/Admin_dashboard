import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import Seller from './Seller'
import { Link } from 'react-router-dom';
import whitespace from "../CepromasAssets/Rectangle 5727 (1).png"




const Myprofilefour= () => {
   
     
  return (
    <div className='flex min-h-screen'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-5 bg-white  rounded-3xl'>
            <div className='flex lg:gap-10 md:gap-5 gap-2 p-10 font-semibold mb-3'>
                <Link to="" className='text-[#718EBF]' >Edit Profile</Link>
                <Link to="">Security</Link>
                <Link to="">commision</Link>
                <Link to="">Subscription settings</Link>
                <Link to="">Property settings</Link>
            </div>
            <hr />
            <div className='flex justify-between mt-5 mb-10 px-10 font-semibold'>
              <Link to="" className='p-3'>Timeline</Link>
            <div className='flex  gap-10 mr-6 '>
              <Link to="" className='pt-3'>Monthly</Link>
              <Link to="" className='p-3'>Weekly</Link>
               <Link to="" className='bg-[navy] w-[198px] h-[50px] rounded-3xl flex justify-center p-3 text-white text-center'>Today</Link>
            </div>
            </div>
           <div className='font-semibold  grid grid-cols-5  bg-[#FFF6F0] h-[40px]  py-2 px-10'>
            <h3>Photo</h3>
            <h3>Full Name</h3>
            <h3 className='ml-5'>Date</h3>
            <h3>Amount</h3>
            <h3>Status</h3>
           </div>
             {Seller.map((Seller, index) => {
                     const statusColor = Seller.Status === "Completed" ? "text-[green]": Seller.Status === "Pending "? "text-[yellow]" : "text-[red]" 
                       
                       return(
                       <div key={index} className="
                       grid grid-cols-5 items-center bg-white my-1 px-10 text-wrap lg:w-[1150px] md:w-[1200px]  w-[900px]  py-3">
                         <img src={whitespace} alt="" className='w-[50px] h-[50px] rounded-full' />
                         <h3>{Seller.Fullname}</h3>
                         <h3 className='pl-5' >{Seller.Date}</h3>
                         <h3  >{Seller.Amount}</h3>
                         <h3 className={`font-semibold ${statusColor}`} >{Seller.Status}</h3>
                         
                      
                     
                       </div>)
                    })}
             
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Myprofilefour
