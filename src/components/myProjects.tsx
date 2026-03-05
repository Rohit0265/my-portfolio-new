// @ts-nocheck
import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Heading from './Heading'


gsap.registerPlugin(useGSAP,ScrollSmoother,ScrollTrigger)


const Myprojects = () => {


const textRef = useRef();
const sectionRef = useRef();
const stack = useRef();
const pinProject = useRef();
const container = useRef(null);

    useGSAP(()=>{
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });

    const panels = gsap.utils.toArray(".panel");


    panels.forEach((panel,i)=>{
        // if(i == panels.length) return;

        gsap.fromTo(
            panel as gsap.TweenTarget,{
                scale:1,opacity:1
            },
            {
                scale:0.85,
                opacity:0,
                ease:"none",
                scrollTrigger:{
                    trigger:panel,
                    start:"top-=150 top",
                    end:"bottom top",
                    scrub:1.5,
                    pin:true,
                    pinSpacing:false,  
                }
            }
        )
    })

    ScrollTrigger.create({
        trigger: stack.current,
        start:"top top",
        end:"bottom bottom",
        pin:pinProject.current,
        pinSpacing:false,
        scrub:true,

    });

const text = textRef.current;
const stackContainer = stack.current;

if (!text || !stackContainer) return;

// single timeline controlling both pin + fill
gsap.timeline({
  scrollTrigger: {
    trigger: stackContainer,
    start: "top top",
    end: () => "+=" + stackContainer.offsetHeight,
    scrub: true,
    pin: text,              // 👈 pin only the text
    pinSpacing: false,
    anticipatePin: 1,
  }
})
.to(text, {
  backgroundPosition: "0% 0%",
  ease: "none",
});





    })







  return (
    <div ref={stack}>

<div className='bg-black z-90'>
<section className="relative">
  <div
    ref={sectionRef}
    className="flex items-center justify-center bg-black"
  >
    <h1
      ref={textRef}
      className="text-[90px] uppercase font-bold tracking-tight text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 50%, #4b5563 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "100% 0%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      My selected works    </h1>
  </div>
</section>

</div>
          <div className="flex panel bg-[rgb(18,18,18)] pt-15 pb-25">
            <div className="w-1/2 items-center justify-center flex flex-col text-white pl-50">
            <div>

              <h1 className="text-5xl font-bold pb-15">1. YOOM - Zoom Like Meeting Platform</h1>
              <p className="text-2xl text-gray-400 pb-15">This project is a fully functional Zoom Clone that enables users to create, join, and manage video meetings in real time.
It features secure authentication, instant meeting links, and smooth video streaming powered by Stream’s real-time infrastructure.</p>
            </div>
            <div className="flex gap-30 justify-evenly items-center">
              <div className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl justify-center items-center hover:bg-gray-700 w-50 h-15 gap-2">
<a
  href="https://github.com/Rohit0265/meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl 
  justify-center items-center hover:bg-gray-700 w-[200px] h-[60px] gap-3"
>
  <img src="/github.svg" className="w-8 h-8 invert" alt="GitHub" />
  <p>View on GitHub</p>
</a>
              </div>
              <div className="w-50 h-15 bg-blue-600 rounded-xl flex justify-center items-center hover:bg-blue-600 
          transition-all duration-300 text-white font-semibold 
          shadow-lg hover:shadow-blue-500/40">
                  <a href="https://meeting-two-lac.vercel.app/" target="_blank"
    className="">
    🚀 &nbsp; Live Demo
                </a>
              </div>
            </div>
            </div>
            <div className="relative w-1/2">
               <img className="w-200 rounded-xl blur-[5px]  my-auto mx-auto h-130 object-cover" src="/photo2.jpg" alt="" />

               <div className="absolute w-150 h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <video
                className="w-150 h-fill border overflow-hidden rounded-md"
                src="/p2.mp4"
                autoPlay
                muted
                loop
              />
               </div>
            </div>
            </div>

            <br />

          <div  className="flex panel bg-[rgb(18,18,18)] pt-15 pb-25">
            <div className="relative w-1/2">
               <img className="w-200 rounded-xl blur-[5px]  my-auto mx-auto h-130 object-cover" src="https://images.pexels.com/photos/13242404/pexels-photo-13242404.jpeg" alt="" />

               <div className="absolute w-150 h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <video
                className="w-150 h-fill border overflow-hidden rounded-md"
                src="/Ecomm.mp4"
                autoPlay
                muted
                loop
              />
               </div>
            </div>
                        <div className="w-1/2 items-center justify-center flex flex-col text-white pl-50">
            <div>

              <h1 className="text-5xl font-bold pb-15">2. Full Stack Ecommerce Web Application</h1>
              <p className="text-2xl text-gray-400 pb-15">Developed a full-stack eCommerce web application with features like user authentication, product listing, cart management, and order processing. The platform provides a seamless shopping experience with a responsive interface and secure backend APIs for handling transactions and data.</p>
            </div>
            <div className="flex gap-30 justify-evenly items-center">
                            <div className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl justify-center items-center hover:bg-gray-700 w-50 h-15 gap-2">
<a
  href="https://github.com/Rohit0265/Full-Stack-E-Commerce-Platform"
  target="_blank"
  rel="noopener noreferrer"
  className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl 
  justify-center items-center hover:bg-gray-700 w-[200px] h-[60px] gap-3"
>
  <img src="/github.svg" className="w-8 h-8 invert" alt="GitHub" />
  <p>View on GitHub</p>
</a>
              </div>



              {/* </div> */}
              {/* <div className="w-50 h-15 bg-blue-600 rounded-xl flex justify-center items-center hover:bg-blue-600 
          transition-all duration-300 text-white font-semibold 
          shadow-lg hover:shadow-blue-500/40">
                  <a href="YOUR_LIVE_LINK" target="_blank"
    className="">
    🚀 &nbsp; Live Demo
                </a>
              </div> */}
            </div>
            </div>
            </div>

            <br />

          <div className="flex panel bg-[rgb(18,18,18)] pt-15 pb-25">
            <div className="w-1/2 items-center justify-center flex flex-col text-white pl-50">
            <div>

              <h1 className="text-5xl font-bold pb-15">1. Edemy - LMS Platform</h1>
              <p className="text-2xl text-gray-400 pb-15">Edemy is a Learning Management System (LMS) that allows users to explore courses, enroll in them, and track their learning progress. It provides an organized platform for managing educational content and improving the online learning experience.</p>
            </div>
            <div className="flex gap-30 justify-evenly items-center">
<div className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl justify-center items-center hover:bg-gray-700 w-50 h-15 gap-2">
<a
  href="https://github.com/Rohit0265/Full-Stack-LMS-Platform"
  target="_blank"
  rel="noopener noreferrer"
  className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl 
  justify-center items-center hover:bg-gray-700 w-[200px] h-[60px] gap-3"
>
  <img src="/github.svg" className="w-8 h-8 invert" alt="GitHub" />
  <p>View on GitHub</p>
</a>
              </div>
              {/* <div className="w-50 h-15 bg-blue-600 rounded-xl flex justify-center items-center hover:bg-blue-600 
          transition-all duration-300 text-white font-semibold 
          shadow-lg hover:shadow-blue-500/40">
                  <a href="YOUR_LIVE_LINK" target="_blank"
    className="">
    🚀 &nbsp; Live Demo
                </a>
              </div> */}
            </div>
            </div>
            <div className="relative w-1/2">
               <img className="w-200 rounded-xl blur-[5px]  my-auto mx-auto h-130 object-cover" src="https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg" alt="" />

               <div className="absolute w-150 h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <video
                className="w-150 h-fill border overflow-hidden rounded-md"
                src="/Edemy.mp4"
                autoPlay
                muted
                loop
              />
               </div>
            </div>
            </div>

            <br />

            <div className="flex panel bg-[rgb(18,18,18)] pt-15 pb-25">

            <div className="relative w-1/2">
               <img className="w-200 rounded-xl blur-[5px]  my-auto mx-auto h-130 object-cover" src="https://images.pexels.com/photos/16752645/pexels-photo-16752645.jpeg" alt="" />

               <div className="absolute w-150 h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <video
                className="w-150 h-fill border overflow-hidden rounded-md"
                src="/VulnsWeb.mp4"
                autoPlay
                muted
                loop
              />
               </div>
            </div>
                        <div className="w-1/2 items-center justify-center flex flex-col text-white pl-50">
            <div>

              <h1 className="text-5xl font-bold pb-15">4. Vulns Web : Website Vulnerability Scanner</h1>
              <p className="text-2xl text-gray-400 pb-15">Vulns Web is a website vulnerability scanner designed to detect common security flaws such as XSS, SQL Injection, and Path Traversal. It analyzes web applications and highlights potential risks to help developers strengthen their security.</p>
            </div>
            <div className="flex gap-30 justify-evenly items-center">
<div className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl justify-center items-center hover:bg-gray-700 w-50 h-15 gap-2">
<a
  href="https://github.com/Rohit0265/Website-Vulnerability-Tester-FrontEnd"
  target="_blank"
  rel="noopener noreferrer"
  className="flex cursor-pointer bg-gray-900 border-2 border-white rounded-xl 
  justify-center items-center hover:bg-gray-700 w-[200px] h-[60px] gap-3"
>
  <img src="/github.svg" className="w-8 h-8 invert" alt="GitHub" />
  <p>View on GitHub</p>
</a>
              </div>
              {/* <div className="w-50 h-15 bg-blue-600 rounded-xl flex justify-center items-center hover:bg-blue-600 
          transition-all duration-300 text-white font-semibold 
          shadow-lg hover:shadow-blue-500/40">
                  <a href="YOUR_LIVE_LINK" target="_blank"
    className="">
    🚀 &nbsp; Live Demo
                </a>
              </div> */}
            </div>
            </div>
            </div>




        
        </div>
  )
}

export default Myprojects