import Image from 'next/image'
import React from 'react'
import signlogo from '@/data/signlogo.svg'
import mobgift from '@/data/mobgift.svg'
import done from '@/data/done.svg'
import geo from '@/data/geo.svg'
import downerrow from '@/data/downerrow.svg'
import { Input } from "@/components/ui/input"





function WelcomeSign() {
    return (
        <div className=' text-[black] '>
            <div className=' grid grid-cols-12'>
                <div className=' md:col-span-6 col-span-12 m md:pl-[110px] bg-[#000000E5] md:text-start text-center   '>

                    <div className='flex gap-[10px]  mt-[96px]   md:ml-0 ml-20'>
                        <Image src={signlogo} alt='' />
                        <Image src={mobgift} alt='' />
                    </div>

                    <div className=' md:text-[40px] text-[25px] font-bold text-[white] mt-[72px]'>Launch in just Days</div>
                    <div className='md:text-[28px] text-[20px] font-normal text-[#666666] mt-[24px]'>With AI Powered Workflows </div>

                    <div className='md:flex   justify-between  items-center mt-[58px]'>

                        <div className='w-[24px] h-[24px] rounded-full bg-[#E12525] flex justify-center items-center md:ml-0 ml-45'>
                            <Image src={done} alt='' />
                        </div>

                        <div>
                            <div className=' text-[16px] font-bold text-[white]'>Rapid Development & Deployment</div>
                            <div className='text-[14px] text-[#666666] ml-4'>Eliminate the need for backend setup from scratch.</div>
                            <div className='text-[14px] text-[#666666] ml-4'> Pre-built APIs, authentication, and database integration accelerate time-to-market.</div>
                        </div>


                    </div>
                    <div className='md:flex   justify-between  items-center mt-[2px] '>

                        <div className='w-[24px] h-[24px] rounded-full bg-[#E12525] flex justify-center items-center md:ml-0 ml-45'>
                            <Image src={done} alt='' />
                        </div>

                        <div>
                            <div className=' text-[16px] font-bold text-[white]'>Rapid Development & Deployment</div>
                            <div className='text-[14px] text-[#666666] ml-4'>Eliminate the need for backend setup from scratch.</div>
                            <div className='text-[14px] text-[#666666] ml-4'> Pre-built APIs, authentication, and database integration accelerate time-to-market.</div>
                        </div>


                    </div>
                    <div className='md:flex   justify-between  items-center mt-[2px]'>

                        <div className='w-[24px] h-[24px] rounded-full bg-[#E12525] flex justify-center items-center md:ml-0 ml-45'>
                            <Image src={done} alt='' />
                        </div>

                        <div>
                            <div className=' text-[16px] font-bold text-[white]'>Rapid Development & Deployment</div>
                            <div className='text-[14px] text-[#666666] ml-4'>Eliminate the need for backend setup from scratch.</div>
                            <div className='text-[14px] text-[#666666] ml-4'> Pre-built APIs, authentication, and database integration accelerate time-to-market.</div>
                        </div>


                    </div>





                </div>
                <div className=' md:col-span-6 col-span-12'>

                    <div className=' flex justify-end me-[24px] gap-[3px] mt-[24px]'>
                        <Image src={geo} alt='' />
                        <div className=' font-bold'>EN</div>
                        <Image src={downerrow} alt='' />
                    </div>
                    <div className=' mx-[110px] '>

                        <div className=' md:text-[28px]  font-bold'>Sign up</div>

                        {/* Second Decription */}
                        <div className='flex mt-[9px]'>
                            <div className='text-[#00000099] font-normal'>Already have an account?</div>
                            <div className=' font-[500]'>Sign in</div>
                        </div>
                        <div className=' border'>

                            <input type="text" name="" className=' border-8' id="" placeholder='First Name' />
                            <input type="text" name="" className='  border-8 pl-3.5' id="" placeholder='Last Name ' />
                        </div>






                    </div>
                </div>

            </div>
        </div>
    )
}

export default WelcomeSign