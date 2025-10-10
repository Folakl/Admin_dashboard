import React, { useState } from 'react';

const Sendnotifications = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");


    if (title !== "" || description !== "" || recipient !== "") {
      console.log(title, description, recipient);
    } else {
      alert("Kindly fill out the details");
    }


  return (
    <div className='bg-black py-5 h-full'>
      <div className='w-[600px] h-[550px] bg-white p-10 justify-self-center'>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-bold'>Send Notifications</h3>
          <div>
            <ion-icon name="close-outline" className="w-[10px] h-[10px]"></ion-icon>
          </div>
        </div>

        <div className='mt-10'>
          <div>
            <h3>Message Title</h3>
            <input
              type="text"
              placeholder="Title"
              className='w-[521px] h-[50px] pl-2 rounded-2xl text-center border-gray border-2 outline-none'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <h3>Description</h3>
            <input
              type="text"
              placeholder="Description"
              className='w-[521px] h-[120px] pl-2 rounded-2xl text-center border-gray border-2 outline-none'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <h3>Enter Recipients number(s)</h3>
            <input
              type="text"
              placeholder="Recipient(s)"
              className='w-[521px] h-[120px] pl-2 rounded-2xl text-center border-gray border-2 outline-none'
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Sendnotifications;
