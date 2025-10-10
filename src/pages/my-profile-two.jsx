import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import paymenticon from '../CepromasAssets/payment icon.png'
import energyicon from '../CepromasAssets/energy icon.png'
import { Link, useNavigate } from 'react-router-dom';
import Pricingplanthree from './pricing-planthree'
import Pricingplan from './pricing-plan';

const Myprofiletwo = () => {
    const [showplan, setShowplan] = useState(false);
    const [showeditplan, setShoweditplan] = useState(false);
   const navigate = useNavigate();

   const handleMember=()=>{
     navigate("/pricing-plan")
   }
   const handleOnetime=()=>{
    navigate('/pricing-plantwo')
   }


  const handleNewplan=()=>{
     setShowplan(true)
  }
  const handleEditplan =()=>{
    setShoweditplan(true)
  }
  const closeOverlay=()=>{
    setShowplan(false)
    setShoweditplan(false)
  }

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>My Profile</h3>
        <div className='mt-5 mx-5 bg-white p-10 rounded-3xl min-h-screen'>
            <div className='flex  flex-wrap lg:gap-10 md:gap-5 gap-5 lg:pr-0 md:pr-0 pr-[60px] font-semibold mb-3'>
               <Link to="/my-profile-one" >Edit Profile</Link>
                 <Link to="/my-profile-three" >Security</Link>
                  <Link to="/settings" >commision</Link>
                  <Link to="/my-profile-two" className='border-b-2 border-[navy]'>Subscription settings</Link>
                  <Link to="/list-property">Property settings</Link>
            </div>
            <hr />
         <div>
            <div className='lg:flex md:flex  grid gap-5 md:gap-20 lg:gap-20 mt-10'>
                <h3 className='text-[#192252] mt-5 font-semibold'>All plans</h3>
                <h3  className='bg-[#192252] w-[190px] h-[50px] rounded-3xl text-center text-white p-3 cursor-pointer' onClick={handleNewplan}>Create new plan</h3>
            </div>
            <div className='lg:flex md:grid  grid lg:gap-10 md:gap-5 gap-2 mt-10'>
                <div className='lg:w-[288px] md:w-[288px] w-[255px] h-[145px] bg-[#3658C90A] p-5 r' >
                    <img src={paymenticon} alt="" />
                    <h3 className='font-semibold pt-3 cursor-pointer' onClick={handleOnetime}>One-Time payment</h3>
                    <h3>Charge users a one-time payment fee to access the content</h3>

                </div>
                <div className='lg:w-[288px] md:w-[288px] w-[255px] lg:h-[145px] md:h-[145px] h-fit bg-[white] border-2 border-gray-50 p-5 ' >
               <div className='w-[40px] h-[40px] bg-[#F5F8FD] flex justify-center items-center'>
               <img src={energyicon} alt="" />
               </div>
                <h3 className='font-semibold pt-3 cursor-pointer' onClick={handleMember}>Membership</h3>
                <h3>Split the full bundle price over several monthly payments</h3>
                </div>
            </div>
           
         </div>
         <div className=' lg:mt-20 md:mt-20 mt-10  w-[190px] text-center p-3 h-[50px] rounded-2xl border-2 border-[#192252] cursor-pointer'>
         <h3 className=' cursor-pointer' onClick={handleEditplan} >Edit plans</h3>
         </div>
            
        </div>
      </div>
      </div>
      <div className='' onClick={closeOverlay}>
      {showplan && <Pricingplanthree/>}
      </div>
      <div className='' onClick={closeOverlay}>
      {showeditplan && <Pricingplan/>}
      </div>
    </div>
  )
}

export default Myprofiletwo
