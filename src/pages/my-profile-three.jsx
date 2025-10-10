import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import twofactor from '../CepromasAssets/Rectangle 205 (1).png'
import ellipse from '../CepromasAssets/Ellipse 32 (1).png'
import { Link, useNavigate } from 'react-router-dom';


const Myprofilethree = () => {
    const [position, setPosition] = useState("top-0 left-0");
    const[currentpassword , setCurrentpassword] = useState("")
     const [newpassword, setNewpassword] = useState("");
     const [confirmpassword, setConfirmpassword] = useState("");
     const navigate = useNavigate();

    function handleTwofactor(){
   setPosition(position ==="top-0 left-0" ? " top-0 left-5" : "top-0 left-0")
     navigate("/my-profile-five")
    }
    function handleSave(){
       if(currentpassword === "" || newpassword === "" || confirmpassword === ""){
        alert("fil in all necessary details")
       }
       else if( newpassword !== confirmpassword ){
        alert("your new password and confirm password didn't match") 
       }
       else{
        alert("password updated sucessfully")
       }
       
     }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[205px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-5 bg-white p-10 rounded-3xl min-h-screen'>
            <div className='flex flex-wrap   lg:gap-10 md:gap-10 gap-3 lf:pr-0 md:pr-0 pr-[150px] font-semibold'>
                 <Link to="/my-profile-one" >Edit Profile</Link>
                  <Link to="/my-profile-three" className='border-b-2 border-[navy]'>Security</Link>
                   <Link to="/settings">Commision</Link>
                   <Link to="/my-profile-two">Subscription settings</Link>
                   <Link to="/list-property">Property settings</Link>
            </div>
            <hr />
          <div className='mt-5'>
            <div className='mt-5'>
                <h3>Two-factor Authentication</h3>
                <div className='flex gap-5 '>
                   <div className='relative  '>
                    <img src={twofactor} alt="" className='' />
                <img src={ellipse} alt="" className={`absolute  cursor-pointer ${position} `} onClick={handleTwofactor} />
                   </div>
                    <h3>Enable or disable two factor authentication</h3>
                </div>
            </div>
          <div className=' flex gap-10  '>
            <div>
                <h3 className='text-[#333B69] font-semibold'> Change Password</h3>
               <div className='py-2'>
               <h3> Current Password</h3>
               <input type="password" value={currentpassword} onChange={(e)=>setCurrentpassword(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[250px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='Current Password' />
               </div>
               <div className='py-2'>
               <h3>New Password</h3>
               </div>
               <div className='py-2'> 
               <h3>Confirm Password</h3>
               <input type="passowrd" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}  className='lg:w-[418px] md:w-[400px] w-[250px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='Confirm password' />
               </div>
            
            </div>
           
            
           </div>
           <div className='mt-10 mr-[200px] flex justify-end'>
            <button className='bg-[navy] text-white rounded-2xl w-[190px] h-[50px]' onClick={handleSave}>Save</button>
          </div>
          
          </div>
      
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Myprofilethree
