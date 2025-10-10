import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import Tenantchatsidebar from '../Components/tenantschatsidebar';
import ChatArea from '../Components/chatArea';

const Tenantschat = () => {

 const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
        <Admin />
        <div className=' mt-5 lg:flex md:flex grid lg:gap:2 md:gap-2  lg:pl-0 md:pl-0 pl-[45px] gap-[200px] min-w-[1200px] h-[900px] lg:overflow-y-auto overflow-h-auto md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-auto overflow-x-auto'>
        <Tenantchatsidebar onSelectUser={setSelectedUser}/>  
        <ChatArea user={selectedUser}/>
       </div>
      </div>
    </div>
  )
}

export default Tenantschat
