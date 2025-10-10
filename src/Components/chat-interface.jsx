import React, { useState } from 'react'

const Chatinterface = ({ user }) => {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState([])

  const handleSend = () => {
    if (text.trim() === "") return
    setMessages([...messages, { sender: "You", text }])
    setText("")
  }

  return (
    <div className='lg:w-[600px] md:w-[360px] h-full pt-5'>
      <div>
      
        <div className='flex gap-5 text-[grey] mb-8'>
          <img src={user.img} alt="" className='w-[30px] h-[30px]' />
          <div>
            <h3>{user.Name}</h3>
            <h3 className='lg:w-[350px] md:w-[250px] w-[200px] h-fit rounded-md bg-[#DBE8FD] p-5'>
              Hello! How can I help you today?
            </h3>
            <h3>12:20</h3>
          </div>
          <hr className='w-[20px] h-[20px] rounded-full bg-[#DBE8FD] mt-14' />
        </div>
      </div>

      {messages.map((msg, index) => (
        <div key={index} className='justify-self-end flex mb-4'>
          <h3 className='justify-self-end bg-[navy] text-white lg:w-[350px] md:w-[250px] w-[200px] min-h-[50px] p-5 h-fit rounded-md'>
            {msg.text}
          </h3>
          <hr className='w-[20px] h-[20px] rounded-full bg-[#DBE8FD] mt-5 ml-3' />
        </div>
      ))}

      {/* Input area */}
      <div className='flex mt-10 relative bottom-2'>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          className='lg:w-[500px] md:w-[300px] w-[290px] h-[50px] border-2 rounded-md px-4'
        />
        <div className="absolute lg:right-3 md:right-3 lg:left-0 md:left-[250px] left-[250px]    top-3  text-[30px] text-[navy] cursor-pointer" onClick={handleSend}>
          <ion-icon name="send-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default Chatinterface
