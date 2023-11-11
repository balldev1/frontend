import Image from 'next/image'
import { LockKeyholeIcon } from 'lucide-react'
import { User } from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
import { MapPinned } from 'lucide-react'


export default function Home() {
  return (
    <div className=' min-h-screen flex items-center justify-center'>
      {/* {1} */}
      <div className='w-1/2   min-h-screen hidden lg:block
      bg-gradient-to-r from-pink-400 to-pink-150
      '>
        <div className='flex flex-col min-h-screen items-center justify-center'>
          {/* {logo} */}
          <div>
            <Image
              alt='image'
              src='/2.png'
              width={700}
              height={700}
            />
          </div>
          {/* {image} */}
          <div className='rounded-xl'>
            <Image
              alt='image'
              src='/3.jpg'
              width={500}
              height={500}
              className='rounded-2xl'
            />
          </div>
          {/* {location} */}
          <div className='flex items-center justify-between text-center'>
            <div>
              <h1 className='text-green-950 font-bold text-[22px] mt-5'>
                สำนักงานส่งกำลังบำรุง สำนักงานตำรวจแห่งชาติ <br />
                เลขที่ 52 ถนนเศรษฐศิริ แขวงถนนนครไชยศรี <br />
                เขตดุสิต กรุงเทพมหานคร 10300
              </h1>
            </div>

          </div>
          <hr className='border-black mt-3 shadow-xl w-[250px] flex items-center justify-center' />
        </div>
      </div>

      {/* {2} */}
      <div className=' flex items-center justify-center lg:w-1/2 w-full
       bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen'>
        <div >
          <div className='flex flex-col items-center justify-center bg-gray-50
         border-2 lg:w-[380px] w-[300px]  lg:p-5 lg:px-10 px-20 py-5 rounded-xl shadow-xl
          shadow-blue-500 border-blue-500 '>
            <div >
              {/* Image */}
              <div className='flex items-center justify-center'>
                <Image
                  alt='image'
                  src='/1.png'
                  width={150}
                  height={150}
                />
              </div>
              {/* Login */}
              <div className='flex items-center justify-center font-medium	mt-5 '>
                <div>
                  <h1 className='text-blue-600 font-bold lg:text-2xl text-xl'>สำนักงานส่งกำลังบำรุง</h1>
                  <span className='text-blue-600 font-semibold text-[12px] flex items-center justify-center'>Office of Logistics</span>
                </div>
              </div>
              {/* input */}
              <div className='flex flex-col text-blue-600 	mt-5 mb-5 space-y-1 '>
                <span className='text-blue-600 font-semibold text-[12px] mx-2'>Username</span>
                <div className='relative '>
                  <div >
                    <User className='absolute w-5 bottom-3 left-2' />
                    <input
                      type='password'
                      className='border-2 p-2 rounded-full bg-gray-100  px-8'
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col text-blue-600 	mt-5 mb-5 space-y-1'>
                <span className='text-blue-600 font-semibold text-[12px]'>Password</span>
                <div className='relative'>
                  <div>
                    <LockKeyholeIcon className='absolute w-5 bottom-3 left-2' />
                    <input
                      type='password'
                      className='border-2 p-2 rounded-full bg-gray-100  px-8 '
                    />
                  </div>
                </div>
              </div>
              {/* forget */}
              <div className='flex justify-between w-full  mt-5 text-blue-600 font-semibold text-[12px]'>
                <div className=' flex items-center'>
                  <div className='flex items-center'>
                    <ShieldCheck size={20} />
                    <span>
                      Remember
                    </span>
                  </div>
                </div>
                <div>
                  <span>
                    Forget Password ?
                  </span>
                </div>
              </div>
              {/* button */}
              <div className='flex items-center justify-center mt-5'>
                <button className='border-2 p-2 w-full rounded-2xl text-white font-bold
              bg-gradient-to-r from-cyan-500 to-blue-500
              hover:from-cyan-600 hover:to-blue-600
              '>
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
