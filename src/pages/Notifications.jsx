  import React, {useState} from 'react'
  import Sidebar from '../Components/Sidebar'
  import Admin from '../Components/Admin'
  import Notification from './Notification';
  import { Link } from 'react-router-dom';
  import Message from './message';
  import Sms from './sms'



  const Notifications = () => {
   const [showoverlay,setShowoverlay] = useState(false);
   const [shownotificationsOverlay, setShownotificationsOverlay] = useState(false);

   const handleNotifications=()=>{
    setShowoverlay(true)
   }
   const handleNewnotifications=()=>{
    setShownotificationsOverlay(true)
   }
   const closeOverlay=()=>{
    setShowoverlay(false);
    
   }
   const closeOverlaytwo=()=>{
    setShownotificationsOverlay(false);
    
   }
    
    return (
          <div className='flex'>
        <Sidebar />
        <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
          <Admin />
          <div className='px-10 pt-5'>
            <div className='lg:flex md:flex grid gap-3 justify-between  md:min-w-[1300px] w-[1050px] lg:min-w-[1000px]'>
            <h3 className='text-2xl font-bold'>Notifications</h3>
            <div className='text-white bg-[#192252] w-[200px] h-[35px] rounded-2xl cursor-pointer flex  px-5 py-2 gap-2 '>
            <ion-icon name="add-outline"  ></ion-icon>
            <h3 className='cursor-pointer ' onClick={handleNewnotifications}>New notification</h3>
            </div>
        </div>
        <div className='flex gap-5 my-5'>
       <Link to="#" className='font-semibold'> All </Link>
       <Link to="#"> Incoming </Link>
       <Link to="#"> Outgoing </Link>
       </div>

    <div className='w-full md:overflow-x-auto lg:overflow-x-hidden overflow-x-auto mt-4'>
              <div className='md:min-w-[1300px] w-[1050px] lg:min-w-[1100px]'>
                <div className='grid grid-cols-5 text-sm  h-[50px] p-3 bg-[#FFF6F0] font-semibold'>
                  <div className='flex gap-5'>
                     <h3>S/N</h3>
                     <h3>Message Title</h3>
                    </div>
                     <h3 className='pl-4'>Sender</h3>
                     <h3>Recipients</h3>
                     <h3>Message body</h3>
                     <h3>Actions</h3>
                        
                </div>
                 {Notification.map((Notification, index) => (
                <div key={index}
                 className='grid grid-cols-5 items-center bg-white my-1 px-3 py-3   text-sm '>
               <div className='flex gap-10'>
                 <h3>{Notification.SN}</h3>
               <h3>{Notification.Message}</h3>
               </div>
                 <h3 className='pl-5' >{Notification.Sender}</h3>
                 <h3  >{Notification.Recipients}</h3>
                 <h3 className='w-[170px] '>{Notification.Messagebody}</h3>
                 <h3 className='text-[#0E1D70] font-semibold cursor-pointer' onClick={handleNotifications}>View notification</h3>
            
            
               </div>
             ))}
                
                
              </div>
            </div>
          </div>
        </div>
         <div  onClick={closeOverlay} >
     {showoverlay && <Message/>}
     </div>
      <div  onClick={closeOverlaytwo} >
     {shownotificationsOverlay && <Sms/>}
     </div>
      </div>
    )
  }

  export default Notifications


