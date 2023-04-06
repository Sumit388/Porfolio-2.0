//Packages import
import { useState } from 'react';

function ContactMeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // TODO: Submit form data to server
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96 p-10 uppercase text-gray-500 tracking-[10px] ml-2">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className='elevatedEffect bg-transparent outline-none px-2'/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='elevatedEffect bg-transparent outline-none px-2' />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required className='elevatedEffect bg-transparent outline-none px-2'></textarea>

      <button type="submit" className='border border-[#f7ac0a44] rounded-r-xl px-4'>Submit</button>
    </form>
  );
}

export default ContactMeForm;