// @ts-nocheck

import React, { useState } from 'react';
import Button from "./ui/button"
import emailjs from "@emailjs/browser"; 
import { toast } from "sonner"
import {motion} from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    import.meta.env.VITE_PUBLIC_SERVICE_ID,
    import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_PUBLIC_ME_ID
  ).then(
    (result) => {
      toast("Message Sent");
      setIsSubmitted(true);
    },
    (error) => {
      toast(error.text);
    }
  );
};

  return (
    <div className='h-screen bg-black text-white'>

        <motion.h2 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2,delay:0.2 }}
           className='text-[80px] pb-10 font-bold text-center'>Let's Work Together</motion.h2>
    <div className='ml-[30%] rounded-[40px] mr-[30%] shadow-lg shadow-cyan-500/50 bg-[rgb(18,17,17)] '>

    <motion.form 
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2,delay:0.2 }}
    
    className='flex flex-col pl-25 pr-25 pt-5 pb-7' onSubmit={handleSubmit}>
        <p className='text-[40px] text-center pb-5'>Say Hello 👋 !!!</p>
      <input className='border-gray-600 
      bg-[rgb(30,28,28)] text-[18px] pt-[10px] pb-2 pl-5 rounded-2xl mb-6' name="name" onChange={handleInputChange} placeholder="Your Name ?" required />
      <input className=' mb-6 text-[18px] 
      bg-[rgb(27,26,26)] pt-[10px] pb-3 pl-5 rounded-2xl'  name="email" type="email" onChange={handleInputChange} placeholder="Your Email ?" required />
      <textarea className='pt-3 pb-3 text-[18px] pl-5 min-h-[250px] rounded-2xl bg-[rgb(27,26,26)]'  name="message" onChange={handleInputChange} placeholder="Message" required />
      <Button size="lg" className='bg-white text-[20px] font-bold pt-2 pb-2 mt-8 text-black'>Button</Button>
    </motion.form>
    </div>
    </div>
  );
};

export default ContactForm;
