// @ts-nocheck
import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Heading from './Heading'


gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)


const Myprojects = () => {


  const textRef = useRef();
  const sectionRef = useRef();
  const stack = useRef();
  const pinProject = useRef();
  const container = useRef(null);

  useGSAP(() => {


    if (window.innerWidth < 768) return;
    const panels = gsap.utils.toArray(".panel");


    panels.forEach((panel, i) => {
      // if(i == panels.length) return;

      // Hardware acceleration to prevent CPU rendering lag when panels overlap
      gsap.set(panel, { willChange: "transform, opacity" });

      gsap.fromTo(
        panel as gsap.TweenTarget, {
        scale: 1, opacity: 1
      },
        {
          scale: 0.85,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top-=150 top",
            end: "bottom top",
            scrub: 1.5,
            pin: true,
            pinSpacing: false,
          }
        }
      )
    })

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


  const videos = document.querySelectorAll(".scroll-video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5
  });

  videos.forEach(video => observer.observe(video));




  return (
    <div className='bg-black' ref={stack}>

      <div className="bg-black z-90">
  <section className="relative">
    <div
      ref={sectionRef}
      className="flex items-center justify-center bg-black px-4"
    >
      <h1
        ref={textRef}
        className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] bg-black uppercase font-bold tracking-tight text-transparent text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 50%, #4b5563 50%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        My Selected Works
      </h1>
    </div>
  </section>
</div>


<div className="flex flex-col lg:flex-row panel transform-gpu bg-[rgb(18,18,18)] mt-10 pb-20 gap-10">

  {/* TEXT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col text-white px-6 lg:pl-20 justify-center order-2 lg:order-1">

    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
        1. YOOM - Zoom Like Meeting Platform
      </h1>

      <p className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
        This project is a fully functional Zoom Clone that enables users to
        create, join, and manage video meetings in real time.
        It features secure authentication, instant meeting links,
        and smooth video streaming powered by Stream’s real-time infrastructure.
      </p>
    </div>

    {/* BUTTONS */}
    <div className="flex flex-wrap gap-4 items-center">

      <a
        href="https://github.com/Rohit0265/meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-5 py-3 hover:bg-gray-700 transition"
      >
        <img src="/github.svg" className="w-6 h-6 invert" />
        View GitHub
      </a>

      <a
        href="https://meeting-two-lac.vercel.app/"
        target="_blank"
        className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
      >
        🚀 Live Demo
      </a>

    </div>

  </div>


  {/* VIDEO SIDE */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">

    <img
      className="w-[90%] md:w-[80%] rounded-xl blur-[5px]"
      src="/photo2.jpg"
      alt=""
    />

    <div className="absolute w-[80%] md:w-[70%]">

      <video
        className="w-full border rounded-md"
        src="/p2.webm"
        autoPlay
        playsInline
        muted
        loop
      />

    </div>

  </div>

</div>

      <br />

<div className="flex flex-col lg:flex-row panel transform-gpu bg-[rgb(18,18,18)] py-16 gap-10">

  {/* VIDEO SIDE */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center">

<img
  className="w-[90%] md:w-[80%] rounded-xl blur-[5px]"
  src="/be.jpg"
  alt=""
/>

    <div className="absolute w-[80%] md:w-[70%]">

      <video
        className="w-full border rounded-md scroll-video"
        src="/Ecomm.webm"
        autoPlay
        playsInline
        muted
        loop
      />

    </div>

  </div>


  {/* TEXT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-6 lg:pl-20">

    <div>

      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
        2. Full Stack Ecommerce Web Application
      </h1>

      <p className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
        Developed a full-stack eCommerce web application with features like
        user authentication, product listing, cart management, and order
        processing. The platform provides a seamless shopping experience
        with a responsive interface and secure backend APIs.
      </p>

    </div>


    {/* BUTTON */}
    <div className="flex flex-wrap gap-4 items-center">

      <a
        href="https://github.com/Rohit0265/Full-Stack-E-Commerce-Platform"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-5 py-3 hover:bg-gray-700 transition"
      >
        <img src="/github.svg" className="w-6 h-6 invert" />
        View GitHub
      </a>



    </div>

  </div>

</div>

      <br />

<div className="flex flex-col lg:flex-row panel transform-gpu bg-[rgb(18,18,18)] py-16 gap-10">

  {/* VIDEO SIDE */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[420px] md:min-h-[520px] order-1 lg:order-2">

    <img
      className="w-[90%] md:w-[80%] h-full object-cover rounded-xl blur-[5px]"
      src="2.webp"
      alt=""
    />

    <div className="absolute w-[80%] md:w-[70%]">

      <video
        className="w-full border rounded-md scroll-video"
        src="/Edemy.webm"
        autoPlay
        playsInline
        muted
        loop
      />

    </div>

  </div>


  {/* TEXT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-6 lg:pl-20 order-2 lg:order-1">

    <div>

      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
        3. Edemy - LMS Platform
      </h1>

      <p className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
        Edemy is a Learning Management System (LMS) that allows users to
        explore courses, enroll in them, and track their learning progress.
        It provides an organized platform for managing educational content
        and improving the online learning experience.
      </p>

    </div>


    {/* BUTTON */}
    <div className="flex flex-wrap gap-4 items-center">

      <a
        href="https://github.com/Rohit0265/my-portfolio-new"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-5 py-3 hover:bg-gray-700 transition"
      >
        <img src="/github.svg" className="w-6 h-6 invert" />
        View GitHub
      </a>
        <a
        href="https://edmey-full-stack-lms-platform.vercel.app"
        target="_blank"
        className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
      >
        🚀 Live Demo
      </a>

    </div>

  </div>

</div>

      <br />

<div className="flex flex-col lg:flex-row transform-gpu panel bg-[rgb(18,18,18)] py-16 gap-10">

  {/* VIDEO SIDE */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[420px] md:min-h-[520px]">

    <img
      className="w-[90%] md:w-[80%] h-full object-cover rounded-xl blur-[5px]"
      src="/bee.jpg"
      alt=""
    />

    <div className="absolute w-[80%] md:w-[70%]">

      <video
        className="w-full border rounded-md"
        src="/VulnsWeb.webm"
        autoPlay
        playsInline
        muted
        loop
      />

    </div>

  </div>


  {/* TEXT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-6 lg:pl-20">

    <div>

      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
        4. Vulns Web : Website Vulnerability Scanner
      </h1>

      <p className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
        Vulns Web is a website vulnerability scanner designed to detect
        common security flaws such as XSS, SQL Injection, and Path Traversal.
        It analyzes web applications and highlights potential risks to help
        developers strengthen their security.
      </p>

    </div>


    {/* BUTTON */}
    <div className="flex flex-wrap gap-4 items-center">

      <a
        href="https://github.com/Rohit0265/Website-Vulnerability-Tester-FrontEnd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-5 py-3 hover:bg-gray-700 transition"
      >
        <img src="/github.svg" className="w-6 h-6 invert" />
        View GitHub
      </a>

    </div>

  </div>

</div>





    </div>
  )
}

export default Myprojects