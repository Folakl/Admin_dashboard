import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import { Link } from 'react-router-dom';




const Myprofilefive = () => {
  
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-5 bg-white p-10 rounded-3xl'>
            <div className='flex lg:gap-10 md:gap-5 gap-2 font-semibold mb-3'>
                  <Link to="/my-profile-one" >Edit Profile</Link>
                  <Link to="/my-profile-three" >Security</Link>
                   <Link to="/settings">commision</Link>
                   <Link to="/my-profile-two">Subscription settings</Link>
                   <Link to="/list-property">Property settings</Link>            </div>
            <hr />
           
          <div className='mt-5'>
            <div className='mt-5'>
                <h3 className='text-[#718EBF] my-5' >Two-factor Authentication</h3>
               
                <h3 className='text-[#718EBF]' >Choose means of verification</h3>
               
            </div>
            <div className='w-[410px] h-[187px] border-2 border-gray rounded-3xl mt-5 '>
            <div className='border-b-2 h-[62px] border-gray flex justify-between'>
            <h3 className='pt-3 pl-2'>Email address</h3>
             <input type="checkbox" name="" id="" className='mr-5 cursor-pointer' />
            </div>
            <div className='border-b-2 h-[62px] border-gray flex justify-between'>
            <h3 className='pt-3 px-4'>Phone number</h3>
            <input type="checkbox" name="" id="" className='mr-5 cursor-pointer' />
            </div>
        <div className='h-[62px]  flex justify-between'>
            <h3 className='pt-3 px-4'>Authenticator app</h3>
            <input type="checkbox" name="" id="" className='mr-5 cursor-pointer' />
            </div>

            </div>
        
            
           </div>
         
          
          
      
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Myprofilefive
