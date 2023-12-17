import Image from 'next/image';
import Link from 'next/link';
import profPict from '/public/arga-fix.jpg';
import react from '/public/React.svg';
import flutter from '/public/icon_flutter.svg';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 m-5">
      <div className='object-center'>
        Hi, this is Arga&apos;s Personal Web
      </div>
      <div className='flex flex-row items-center mt-5'>
        <div className='flex flex-col bg-white items-center justify-between h-80 w-96 m-5 p-5 rounded-xl'>
          <img src={profPict.src} alt="arga" className="w-36 h-36 rounded-full object-cover object-center-up">

          </img>

          <a> Arga Samosir</a>
          <div className='flex flex-row justify-center'>
            <a href='https://www.linkedin.com/in/argasamosir/'>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
            </a>
            <a href='https://github.com/argasam'>
              <img width="25" height="25" src="https://img.icons8.com/material-rounded/48/github.png" alt="github"/>
            </a>
          </div>
        </div>
        <div className='flex flex-col bg-slate-400 h-80 w-96 text-center justify-evenly rounded-xl p-5'>
          <p>
            Final Year System and Information Technology Student. 
          </p>
          <p>
            Now still searching for intern.
          </p>
          <p>
            WML.
          </p>
        </div>
      </div>

      <div className='flex flex-row items-center mb-10'>
        <div className='bg-white h-80 w-96 text-center rounded-xl mx-5 p-5'>
          <a className='font-bold text-2xl'> Projects</a>

          <div className='flex flex-col h-3/5 mt-3 mb-5'>
            <Link href='https://pokelib.vercel.app/'>
              <div className='flex flex-row w-full justify-between bg-slate-300 rounded-xl p-2 px-3 mb-3'>
                <div className='flex flex-col text-start'>
                  <div className='text-lg font-bold'>PokeLib</div>
                  <div className='text-xs'>Pokemon Library with Catch Feature</div>
                </div>
                <Image
                  priority
                  src={react}
                  height={30}
                  alt="react"
                />
              </div>
            </Link>
            
            <Link href='https://weather-app-lemon-one.vercel.app/'>
                <div className='flex flex-row w-full justify-between bg-slate-300 rounded-xl p-2 px-3'>
                    <div className='flex flex-col text-start'>
                      <div className='text-lg font-bold'>Weather App</div>
                      <div className='text-xs'>Fetching Weather Data from OpenAPI</div>
                    </div>
                  <Image
                    priority
                    className='mx-2'
                    src={flutter}
                    height={30}
                    alt = "flutter"
                  />
                  </div>
            </Link>
          </div> 
        </div>
        <div className='bg-slate-400 h-80 w-96 rounded-xl'>
          Experience
        </div>
      </div>
      <div className='mb-10'>
        Built using Next.js
      </div>  
    </main>
  )
}
