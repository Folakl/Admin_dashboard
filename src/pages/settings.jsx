import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import twofactor from '../CepromasAssets/redbackground.png'
import ellipse from '../CepromasAssets/Ellipse 32 (1).png'
import { Link } from 'react-router-dom';




const Settings = () => {
    const [position, setPosition] = useState("top-0 left-0");
    const[sellers , setSellers] = useState("")
     const [propertyagents, setPropertyagents] = useState("");
     const [deduct, setDeduct] = useState("");

    function handleTwofactor(){
   setPosition(position ==="top-0 left-0" ? " top-0 left-5" : "top-0 left-0")
    }
    function handleSave(){
       if(sellers === "" || propertyagents === "" || deduct === ""){
        alert("fil in all necessary details")
       }
    
       else{
        alert("Sucessfully saved")
       }
       
     }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[205px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-5 bg-white  min-h-screen p-10 rounded-3xl'>
            <div className='flex flex-wrap  lg:gap-10 md:gap-10 gap-3 lg:pr-0 md:pr-0 pr-[10px] font-semibold'>
                   <Link to="/my-profile-one" >Edit Profile</Link>
                    <Link to="/my-profile-three" >Security</Link>
                     <Link to="/settings" className='border-b-2 border-[navy]'>commision</Link>
                     <Link to="/my-profile-two">Subscription settings</Link>
                     <Link to="/list-property">Property settings</Link>
            </div>
            <hr />
            <div className='flex justify-between mt-5 font-semibold'>
                <h3 className='text-[#333B69]'>Set Commisions</h3>
                <h3 className='text-[#2540A8]'>All Commisions</h3>
            </div>
          <div className='mt-5'>
            <div className='mt-5'>
                <h3>Two-factor Authentication</h3>
                <div className='flex gap-5 '>
                   <div className='relative  '>
                    <img src={twofactor} alt="" />
                <img src={ellipse} alt="" className={`absolute  cursor-pointer ${position} `} onClick={handleTwofactor} />
                   </div>
                    <h3>Enable or disable two factor authentication</h3>
                </div>
            </div>
          <div className=' flex gap-10  '>
            <div>
                <h3 className='text-[#333B69] font-semibold'> Change Password</h3>
               <div className='py-2'>
               <h3> On all sellers</h3>
               <input type="text" value={sellers} onChange={(e)=>setSellers(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[250px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='15% on all sales' />
               </div>
               <div className='py-2'>
               <h3>On all property agents</h3>
               <input type='text' value={propertyagents} onChange={(e)=>setPropertyagents(e.target.value)}  className='lg:w-[418px] md:w-[400px] w-[250px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='0.5%' />
               </div>
               <div className='py-2'>
               <h3>To be deducted from</h3>
               <input type="text" value={deduct} onChange={(e)=>setDeduct(e.target.value)}  className='lg:w-[418px] md:w-[400px] w-[250px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='input' />
               </div>
            
            </div>
           
            
           </div>
           <div className='mt-10 mr-[20px] flex lg:justify-end md:justify-center justify-start'>
            <button className='bg-[navy] text-white rounded-2xl w-[190px] h-[50px]' onClick={handleSave}>Save</button>
          </div>
          
          </div>
      
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Settings
