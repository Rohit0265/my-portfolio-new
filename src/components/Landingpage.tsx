// import { div } from 'framer-motion/client'
import { useRef } from 'react'
import VariableProximity from './ui/VariableProximity';
// import Button from "../../@/components/ui/button";
import { motion } from 'framer-motion';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Github, Linkedin, Mail } from 'lucide-react';
const Mylandpage = () => {
  const containerRef = useRef(null);
  return (
    <div className='w-screen h-screen bg-[#0F0F0F] '>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='items-center justify-center pt-12'>

        <div
          className=' text-white flex '
          ref={containerRef}
          style={{
            fontFamily: '"Roboto Flex", sans-serif',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "120px",
            fontWeight: "200",
            color: 'white'
          }}
        >

          <VariableProximity
            label="ROHIT MATHUR"
            fromFontVariationSettings="'wght' 500"
            toFontVariationSettings="'wght' 900"
            radius={150}
            containerRef={containerRef}
          />
        </div>
      </motion.div>

      {/* first container  */}

      <div className='flex'>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[43%] pl-10 pt-16">

          <h1 className="uppercase text-gray-600/70 text-right tracking-widest text-sm">
            ( About me )
          </h1>

          <h1 className="text-neutral-400 text-[30px] pl-10 font-inter text-right leading-[1.4] mt-4">
            I’m a passionate developer who enjoys building modern web applications and
            exploring backend systems. I’m especially interested in cybersecurity
            <br /> and problem-solving, and I like creating projects that combine
            clean design with strong technical foundations.
          </h1>

          {/* <div className="flex justify-center mt-25">
    <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg border border-neutral-700 transition">
      My Work
    </button>
  </div> */}


        </motion.div>

        {/* second container  */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-white  h-25px w-[45%] pt-16'>

          <div className="bg-[#121212] text-white max-w-xl mx-auto p-10 rounded-2xl border border-neutral-800 text-center">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4"> Resume & Connect </h2>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"> Interested in my work? Download my resume or connect with me through my socials. I'm always open to collaborations and interesting projects. </p>
            </div>
            <div className="flex justify-center mb-10">
              <a href="/resume.pdf" download className="px-8 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition" > Download Resume </a>
            </div>
            <div className="border-t border-neutral-800 pt-6">
              <div className="flex justify-center gap-8 text-neutral-400 text-sm">
                <a href="https://github.com/Rohit0265" className="hover:text-white transition">
                  
                  <Github/>
                </a>
                <a href="https://www.linkedin.com/in/rohit-mathur-9a80b2296" className="hover:text-white transition">
                <Linkedin/>
                </a>
                <a href="mailto:rohitmathur00981@gmail.com" className="hover:text-white transition">
                  <Mail/>
                </a>
              </div>
            </div>

          </div>


        </motion.div>

      </div>
      {/* <div className='bg-blue-300 w-[45%]'></div> */}
    </div>
  )
}

export default Mylandpage




