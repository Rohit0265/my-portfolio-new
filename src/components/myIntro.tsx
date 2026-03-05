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
import Mylandpage from "./Landingpage";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const MyIntro = () => {
  const container = useRef(null);

  useGSAP(() => {

    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 3,
    //   effects: true,
    // });

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
    // <div id="smooth-wrapper" ref={container}>
    //   <div id="smooth-content">
<div ref={container}>


        <div className="test w-screen h-screen relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
            alt=""
          />

          <h1 className="head absolute z-50 text-gray-300/90 text-[200px] leading-tight left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 ">
            𝓗𝓔𝓛𝓛𝓞
          </h1>
        </div>

        {/* Extra space to allow scrolling */}
        <Mylandpage/>
      <Myprojects/>
        <div className="h-[500px]" />
        <MYDETAILS/>
        <div className="h-[200px]" />
        <ContactForm/>
        <Fotter/>
</div>
    //   {/* </div>
    // </div> */}
  );
};

export default MyIntro;