import Allrightreserved from "./allrightreserved"

const Fotter = () => {
  return (
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

      <div className='w-1/2 pt-5 flex flex-col justify-center items-center'>
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
        <div>
          <Allrightreserved/>
        </div>

    </div>
  )
}

export default Fotter