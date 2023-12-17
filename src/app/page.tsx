import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 m-5">
      <div className='object-center'>
        Hi, this is Arga's Personal Web
      </div>
      <div className='flex flex-row items-center mt-5'>
        <div className='flex flex-col bg-white items-center justify-between h-56 w-56 m-5 p-5 rounded-xl'>
          <img src="https://images.unsplash.com/photo-1624669240815-815a23372f37?" alt="arga" className="w-24 h-24 rounded-full object-cover">

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
        <div className='flex flex-col bg-slate-400 h-56 w-56 text-center justify-between rounded-xl p-5'>
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
        <div className='bg-white h-56 w-56 text-center rounded-xl mx-5'>
          Projects
        </div>
        <div className='bg-slate-400 h-56 w-56 rounded-xl'>
          Experience
        </div>
      </div>
      <div>
        Build using Next.js
      </div>  
    </main>
  )
}
