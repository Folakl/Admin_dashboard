import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import block from '../CepromasAssets/block.png'
import one from '../CepromasAssets/1.png'
import { Link } from 'react-router-dom';
import Qr from '../CepromasAssets/Qr code.jpeg'



const Myprofile = () => {

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-2'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-3 bg-white p-10 rounded-3xl min-h-screen'>
            <div className='flex lg:gap-10 md:gap-4 gap-5 font-semibold mb-3'>
                <Link to="" >Edit Profile</Link>
                <Link to="">Security</Link>
                <Link to="">Commision</Link>
                <Link to="">Subscription settings</Link>
                <Link to="">Property settings</Link>
            </div>
            <hr />
          <div className='mt-5'>
          
                <h3 className='mt-5'>Two-factor Authentication</h3>
                <h3 className='mt-5 '>Scan the QR code below to get the code from your Authenticator app using your mobile phone. </h3>
                <h3 className='mt-10 mb-5'>Enter code</h3>
                <div className='flex gap-10 my-5'>
                  <img src={one} alt="" />
                  <img src={block} alt="" className='h-[9px] w-[21px] mt-5' />
                  <img src={block} alt="" className='h-[9px] w-[21px] mt-5' />
                  <img src={block} alt="" className='h-[9px] w-[21px] mt-5' />
                  <img src={block} alt="" className='h-[9px] w-[21px] mt-5' />
                  <img src={block} alt="" className='h-[9px] w-[21px] mt-5' />
                </div>
                <div>
                   <img src={Qr} alt="" className='w-[140px] h-[140px]' />
                </div>
            
            </div>
            <div className='mt-14'>
                <button className='w-[190px] h-[50px] rounded-2xl text-white bg-[navy]'> Submit</button>
            </div>
      
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Myprofile
