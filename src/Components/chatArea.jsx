import Chatinterface from './chat-interface'

const ChatArea = ({ user }) => {
  if (!user) {
    return (
      <div className='pt-10 w-[700px] bg-[#fcfcfc] rounded-md'>
        <p className='text-gray-400 lg:text-center md:text-start text-start   mt-20'>Select a chat to start messaging</p>
      </div>
    )
  }

  return (
    <div className='pt-10 w-[700px] bg-[#fcfcfc] rounded-md'>
      <div className='flex gap-10'>
        <h3>Search Chats</h3>
        <div className='border-2 p-2 border-blue-200 lg:w-[200px] md:w-[200px] w-[150px] h-[37px] flex justify-between rounded-md py-1'>
          <input type='text' placeholder='Search' className='outline-none lg:w-[160px] md:w-[160px] w-[120px]' />
          <div className='pt-1 cursor-pointer'>
            <ion-icon name='search-outline'></ion-icon>
          </div>
        </div>
      </div>

      <div className='bg-opacity-50 bg-[white] mt-5 p-2 flex justify-between'>
        <div className='flex gap-5'>
          <img src={user.img} className='w-[50px] h-[50px] rounded-md' alt='' />
          <div>
            <h3>{user.Name}</h3>
            <div className='flex gap-2'>
              <hr className='bg-[green] w-[10px] h-[10px] rounded-full mt-2' />
              <h3>online</h3>
            </div>
          </div>
        </div>
        <div className='pt-5 cursor-pointer'>
          <ion-icon name='ellipsis-vertical-outline'></ion-icon>
        </div>
      </div>

      <Chatinterface user={user} />
    </div>
  )
}

export default ChatArea

