import React from 'react'
import { Link } from 'react-router-dom'
import { pinneduser,normaluser } from './chatsuser'

const Chatsidebar = ({onSelectUser}) => {
 
  return (
    <div className='lg:w-[350px] md:w-[350px] w-[300px] min-h-screen lg:ml-10 md:ml-5 ml-5 bg-white p-5'>
      <div>
        <h3 className='font-bold'>Chats</h3>
      </div>
      <div className='flex justify-between mt-5'>
        <Link to='#'>All</Link>
        <Link to='/chats' className='border-b-2 border-[blue] font-semibold'>Owners</Link>
        <Link to='/tenant-chats'>Tenants</Link>
        
      </div>

      <div className='flex justify-between mt-10 '>
            <h3 className='font-bold'>Pinned</h3>
            <div className='flex  gap-2'>
                <div className='bg-[navy] w-[30px] h-[30px] cursor-pointer text-white justify-center flex pt-2 rounded-full'>
                <ion-icon name="add-outline"></ion-icon>
                </div>
                <h3 className='pt-1'>New chat</h3>
            </div>
      </div>
       {pinneduser.map((user,index)=>{
          return(
              <div key={index} onClick={()=>onSelectUser(user)} className='flex gap-5 mt-5 cursor-pointer bg-opacity-50 bg-[#fafafa] p-2 rounded-md hover:bg-[#d5d5db] justify-between'>
            <img src={user.img} alt="" className='rounded-full w-[50px] h-[50px]' />
              <div>
                  <h3 className='font-bold'>{user.Name}</h3>
                  <h3 className='text-blue-300'>{user.Name} is typing</h3>
              </div>
              <div>
              <div className='ml-5'>
              <ion-icon name="pin-outline"></ion-icon>
              </div>
              <h3>{user.time}</h3>
              <hr className='w-[10px] h-[10px] rounded-full  bg-[navy] ml-5 mt-2' />
              </div>
              </div>)

       })

       }
   <h3 className='font-bold '>All Messages</h3>
    {normaluser.map((user,index)=>{
      return(
        <div key={index} onClick={()=>onSelectUser(user)}
        className='flex gap-5 mt-5 cursor-pointer bg-opacity-50 bg-[#fafafa] p-2 rounded-md hover:bg-[#d5d5db] justify-between'>
           <img src={user.img} alt="" className='rounded-full w-[50px] h-[50px]' />
            <div>
                <h3 className='font-bold'>{user.Name}</h3>
                <h3>{user.text}</h3>
            </div>
            <div>
             <div className='ml-5'>
             <ion-icon name="pin-outline"></ion-icon>
             </div>
            <h3>{user.time}</h3>
            <hr className='w-[10px] h-[10px] rounded-full  bg-[navy] ml-5 mt-2' />
            </div>
            
      </div>
      )
    })}  


    </div>
  )
}

export default Chatsidebar
