import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import done from '@/data/done.svg'
import mobigift from '@/data/mobgift.svg'
import mobilogo from '@/data/mobilogo.svg'
import plus from '@/data/plus.svg'
import FormSideContent from './FormSideContent'
import Link from 'next/link'
function Alldone() {
    return (
        <div className=" grid grid-cols-12 bg-[black] p-[20px]">

            <FormSideContent />
            {/* <div className="md:col-span-6 col-span-12 bg-[black]">
                <div className=" xl:ml-[16px] lg:ml-[50px] md:ml-[4px]  ml-4">

                    <div className=" flex md:mt-[106px]  mt-[50px] md:ml-0 ml-25 gap-[10px]">
                        <Image src={mobilogo} alt="logo" />
                        <Image src={mobigift} alt='mobilogo' />
                    </div>
                    <div className="md:text-[40px] text-[35px]  md:text-start text-center font-semibold  mt-[72px]">Launch in just Days</div>
                    <div className="md:text-[28px] text-[20px] md:text-start text-center font-normal mt-[24px] text-[#FFFFFF]">With AI Powered Workflows </div>

                    <div className=" flex md:gap-[16px] gap-[8px] items-center md:mx-0 mx-4">

                        <div className="  md:w-[25px] md:h-[26px] w-7 h-6     bg-[red] rounded-full flex justify-center items-center">
                            <Image src={done} alt="done" />
                        </div>

                        <div>
                            <div className="md:text-[16px]  font-semibold ">Rapid Development & Deployment</div>
                            <div className=" text-[14px]">

                                <ul className='flex items-center  gap-2'>
                                    <div className='w-2 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] text-[14px] font-normal'>Eliminate the need for backend setup from scratch</li>
                                </ul>
                                <ul className='flex items-center  gap-2'>
                                    <div className='w-2 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] text-[14px] font-normal'>Eliminate the need for backend setup from scratch</li>
                                </ul>                                    </div>
                        </div>
                    </div>

                    <div className=" flex md:gap-[16px] gap-[8px] items-center md:mx-0 mx-4">

                        <div className="  md:w-[25px] md:h-[26px]  w-11 h-6    bg-[red] rounded-full flex justify-center items-center">
                            <Image src={done} alt="done" />
                        </div>

                        <div>
                            <div className="md:text-[16px]  font-semibold ">Scalability & Performance</div>
                            <div className=" text-[14px]">

                                <ul className='flex items-center  gap-2'>
                                    <div className='md:w-2 w-3 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] text-[14px] font-normal'>Built on Nest.js for efficient, modular, and maintainable architecture.</li>
                                </ul>
                                <ul className='flex items-center  gap-2'>
                                    <div className='md:w-2 w-3 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] text-[14px] font-normal'>MongoDB’s flexible NoSQL structure ensures smooth scaling as data grows.</li>
                                </ul>                                    </div>
                        </div>
                    </div>


                    <div className=" flex md:gap-[16px] gap-[8px] items-center md:mx-0 mx-4">
                        <div className="  md:w-[25px] md:h-[26px]  w-11 h-6    bg-[red] rounded-full flex justify-center items-center">
                            <Image src={done} alt="done" />
                        </div>
                        <div>
                            <div className="md:text-[16px]  font-semibold ">Security & Maintainability </div>
                            <div className=" text-[14px]">

                                <ul className='flex items-center  gap-2'>
                                    <div className='md:w-2  w-3 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] md:text-[14px]  font-normal'>TypeScript enhances code quality, reducing errors and improving maintainability.</li>
                                </ul>
                                <ul className='flex items-center  gap-2'>
                                    <div className='md:w-2 w-3 h-2  bg-[#666666] rounded-full ' ></div>
                                    <li className='text-[#666666] text-[14px] font-normal'>Secure APIs with authentication, authorisation, and data validation baked in.</li>
                                </ul>                                    </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className='bg-[white] md:col-span-6 xl:max-w-[90vh] col-span-12 rounded-[12px]'>

                <div className="flex  justify-end items-center py-4 px-4  gap-[5px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>

                <div className='text-[black] md:my-[230px] ml-[15%] mx-5 '>
                    <div className='md:text-[28px] text-[25px] font-semibold'>You&apos;re all set!</div>
                    <div className='text-[14] font-normal mt-[8px]'>Your account has been successfully set up..</div>


                    <Link href='/home' >
                        <div className="bg-[black] flex gap-[4px] md:w-[45%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">Proceed to Jsonone </div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>)
}

export default Alldone