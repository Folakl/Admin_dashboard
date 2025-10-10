import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import { Link, useNavigate } from 'react-router-dom';
import Chatsidebar from '../Components/chatsidebar'
import ChatArea from '../Components/chatArea';

const Chats = () => {
   const [selectedUser, setSelectedUser] = useState(null);

  
  return (
    <div className='flex '>
      <Sidebar />
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px] w-full min-h-screen'>
        <Admin />
       <div className=' mt-5 lg:flex md:flex grid lg:gap-5 md:gap-5 gap-[200px] min-w-[1200px] h-[900px] lg:overflow-y-auto overflow-h-auto md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-auto overflow-x-auto'>
        <Chatsidebar onSelectUser={setSelectedUser}/>
        <div className='lg:ml-0 md:ml-0 ml-10'>
          <ChatArea user={selectedUser}/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Chats

