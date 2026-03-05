//@ts-nocheck

import React, { useRef } from "react";
import { motion } from "framer-motion";
// import VariableProximity from "./VariableProximity";
const tech = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
    {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },{

      name:"Postgres",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },{
        name:"Javascript",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
    },
    {
        name:"Prisma",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    },
    {
        name:"Docker",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    }
]





const MYDETAILS = () => {
    const containerRef = useRef(null);
  return (
    <div className="flex h-screen">
      
      <div className="w-1/2  bg-black flex flex-col pl-45 pr-10 justify-center">

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2,delay:0.5 }}
        //   viewport={{ once: true }}
          className="text-[70px] text-white text-center uppercase relative font-extrabold"
        >
          what do i do
          <div className="h-[2px] bottom-[19px] right-31 absolute bg-red-50 w-122"/>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5,delay:0.5 }}
          className="text-xl text-gray-300  leading-9  mt-5"
        >
I’m a full-stack developer passionate about building scalable web applications, working across both frontend and backend to create efficient and reliable systems. I focus on clean architecture, performance, and maintainable code while also exploring web security practices to ensure the applications I build are robust and secure.

<br /> <br />

I also explore cybersecurity and web application security, studying common vulnerabilities such as XSS, SQL injection, and path traversal to better understand how systems can be protected.

        </motion.p>
      </div>

      <div className="w-1/2 bg-black flex flex-col  pr-45 pl-10 justify-center">


        <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[45px] relative text-gray-400 text-left font-bold mb-10"
      >
        My Tech Stack
        <div className="h-[2px] bottom-2 left-0 absolute bg-red-50 w-76"/>

      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-10">

        {tech.map((item, index) => (

          <motion.div
            key={index}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            // whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center will-change-transform bg-zinc-900 p-6 rounded-xl cursor-pointer hover:scale-115 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition"
          >

            <img
              src={item.icon}
              className="w-10 mb-3"
            />

            <p className="text-sm text-gray-200">{item.name}</p>

          </motion.div>

        ))}

      </div>
      </div>

    </div>
  );
};

export default MYDETAILS;