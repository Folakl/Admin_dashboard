import React, {useState} from 'react'
import cepromaslogo from '../CepromasAssets/CEPROMAS (1).png'
import dashboard from '../CepromasAssets/Dashboard (2).png'
import property from '../CepromasAssets/property.png'
import propertyowner from '../CepromasAssets/enduser.png'
import endusers from '../CepromasAssets/enduser.png'
import chat from '../CepromasAssets/chat.png'
import Reports  from '../CepromasAssets/report.png'
import Notificationsicon from '../CepromasAssets/Notifications (2).png'
import SettingsIcon from '../CepromasAssets/Settings (2).png'
import logouticon from '../CepromasAssets/solar_logout-line-duotone.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(true);
  
  const handleCollapse = () => {
    if(window.innerWidth < 1024){
      setIsOpen(!isOpen); 
    }
   
  
  };
  return (
    <div 
      className={`fixed z-10 top-0 left-0 min-h-screen py-10  pl-5 bg-white transition-all duration-300 cursor-pointer ease-in-out 

           ${isOpen ? 'w-[220px]' : 'w-[45px]'}`}
        
       
           
>
      <div className='my-10'>
         
        <img src={cepromaslogo} alt="cepromaslogo" className='w-[178px] h-[46px]' />
      </div>
      <div className="absolute top-5 right-3 cursor-pointer lg:hidden" onClick={handleCollapse}>
       {isOpen ? (
       <span className="text-xl font-bold">←</span>
         ) : (
      <span className="text-xl font-bold">→</span>
      )}
</div>

      <div className='grid gap-5 font-semibold'>
      
        <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={dashboard} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/dashboard" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Dashboard</NavLink>}
        </div>
        <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={property} alt="" className="w-[25px] h-[25px] " />
          {isOpen && <NavLink to="/all-properties" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Properties</NavLink>}
        </div> 
         <div className="flex lg:gap-5 md:gap-3 gap-3 cursor-pointer" >
          <img src={propertyowner} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Sellers" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Property Owners</NavLink>}
        </div>
       
       
         <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={endusers} alt="" className="w-[25px] h-[25px] " />
          {isOpen && <NavLink to="/endusers" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>End Users</NavLink>}
        </div>
      
       
         <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={chat} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/chats" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Chats</NavLink>}
        </div>
       
         <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={Reports} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/reports-analytics" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Reports</NavLink>}
        </div>
      
         <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={Notificationsicon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Notifications" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Notifications</NavLink>}
        </div>
         <div className="flex lg:gap-5 md:gap-3 gap-3  cursor-pointer" >
          <img src={SettingsIcon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/my-profile-one" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Settings</NavLink>}
        </div>
      </div>
       <div className="flex lg:gap-5 md:gap-3 gap-3 mt-[50px]  cursor-pointer" >
          <img src={logouticon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/login" className={({ isActive})=> `w-[125px] ${isActive ? "text-red-500" : "text-black"}`}>Log out</NavLink>}
        </div>
    </div>
  )
}

export default Sidebar
