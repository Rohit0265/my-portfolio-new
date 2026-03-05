import { ArrowUpToLine } from "lucide-react"
import Allrightreserved from "./allrightreserved"
import ISTClock from "./Time"

const Fotter = () => {
  return (

    <>

    <div className='w-screen pt-30 h-[400px] bg-black flex '>

      <div className="h-[1px] bg-gray-600 w-full absolute"/>


      <div className='w-1/2 flex flex-col pl-30 pt-5 justify-center items-center'>
      <h1 className='text-white text-2xl'>
      Menu
      </h1>
      <div className='h-[1px] w-[70px] bg-gray-600'/>
      <div className='flex pt-3 text-gray-300 flex-col '>
          <p className='text-gray-300 pb-3 gap-2 flex'>
          ABOUT ME
          </p> 
          <p className='text-gray-300 pb-3 gap-2 flex items-center'>
          MY WORKS
          </p>

      </div>
      </div>

      <div className='w-1/2 pt-5 flex flex-col justify-center '>
      <h1 className='text-white text-2xl'>
      Socials
      </h1>
      <div className='h-[1px] w-[80px] bg-gray-600'/>
      <div className='flex flex-col'>

        <a className='text-gray-300 pt-2 pb-3 gap-2 flex items-center' href="">
          Github
            <img width="25px" className='invert' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
          
        </a>


        <a className='text-gray-300 gap-2 flex items-center' href="">
          Linkedin
            <img width="25px" className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          
          
        </a>

      </div>
      </div>
<div className="fixed bottom-10 right-40 flex items-center justify-center h-[50px] w-[50px] rounded-full border cursor-pointer bg-gray-200/25 hover:bg-white/10 transition">
  <button
    className="text-white flex items-center justify-center w-full h-full"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    <ArrowUpToLine />
  </button>
</div>

    </div>

    <div>
      <h1 className="bg-black  text-center text-gray-300">All Right Reserved &copy; 2026</h1>
      <ISTClock/>
    </div>

</>

  )
}

export default Fotter