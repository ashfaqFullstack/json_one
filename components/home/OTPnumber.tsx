import Image from "next/image"
import done from '@/data/done.svg'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import mobigift from '@/data/mobgift.svg'
import mobilogo from '@/data/mobilogo.svg'
import plus from '@/data/plus.svg'
import Link from "next/link"

function OTPnumber() {
    return (
        <div className=" grid grid-cols-12">

            <div className="md:col-span-6 col-span-12 bg-[black]">
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
            </div>

            <div className=' md:col-span-6 col-span-12'>

                <div className="flex  justify-end items-center py-4 px-4  gap-[5px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>

                <div className='text-[black] md:my-[230px]  xl:mx-[150px] lg:mx-[80px] md:mx-[150px]    mx-5 '>
                    <div className='md:text-[28px] text-[25px] font-semibold'>Verify your phone</div>
                    <div className='text-[14] font-normal mt-[8px]'>We have sent an SMS with a code to <span className="font-bold">+372 5687413 </span> . Please enter the code below to verify your number..</div>
                    <div className="text-[14px] font-normal text-[#00000059] mt-[8px]">Resend code in 58s</div>

                    <div className="flex  items-center ">
                        <div className="flex  gap-[8px] mt-[24px]">
                            <div className="border border-[#00000033] rounded-[4px]">
                                <input type="text" className="w-12 h-16 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="border border-[#00000033] rounded-[4px]">
                                <input type="text" className="w-12 h-16 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <div className="border border-[#00000033] rounded-[4px]">
                                    <input type="text" className="w-12 h-16 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="border border-[#00000033] rounded-[4px]">
                                <input type="text" className="w-12 h-16 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="border border-[#00000033] rounded-[4px]">
                                <input type="text" className="w-12 h-16 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>

                        </div>
                    </div>



                    <div className="bg-[black] flex md:w-[25%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                        <Image src={plus} alt="done" />
                        <div className="text-[14px] font-medium text-[white]">
                            <Link href='/login/resetpassord/resetpasswordphone/resetotpnumber/newpassword'>
                                Confirm
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OTPnumber