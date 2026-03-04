"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Myprojects from "./myProjects";
import MYDETAILS from "./Mystack";
import ContactForm from "./ContactUs";
import Fotter from "./Fotter";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const MyIntro = () => {
  const container = useRef(null);

  useGSAP(() => {

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "top top",
        end: "+=300%",
        scrub: 1.5,
        pin: true,
        markers: false,
      },
    });

    // 1️⃣ Small pause
    tl.to({}, { duration: 0.5 });

    // 2️⃣ Blur background
    tl.to(".test img", {
      filter: "blur(20px)",
      scale: 1.15,
      ease: "none",
    });

    // 3️⃣ Move text up
    tl.to(".head", {
      y: -250,
      opacity: 0,
      ease: "none",
    });

    // 4️⃣ Move image up
    tl.to(".test img", {
      y: -200,
      ease: "none",
    });

  }, { scope: container });

  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">

        <div className="test w-screen h-screen relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://media.macphun.com/img/uploads/customer/blog/1749205785/17492059426842c3b6353633.46592977.jpg?q=85&w=1680"
            alt=""
          />

          <h1 className="head absolute z-50 text-white text-[200px] leading-tight left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 league-gothic">
            ROHIT MATHUR
          </h1>
        </div>

        {/* Extra space to allow scrolling */}
      <Myprojects/>
        <div className="h-[500px]" />
        <MYDETAILS/>
        <div className="h-[200px]" />
        <ContactForm/>
        <Fotter/>

      </div>
    </div>
  );
};

export default MyIntro;