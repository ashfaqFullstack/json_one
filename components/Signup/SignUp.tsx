import React from 'react'
import jsonone from '@/data/jsonone-white-logo.svg'
import mobilogo from '@/data/mobilogo.svg'
import eye from '@/data/eye.svg'
import plus from '@/data/plus.svg'
import done from '@/data/done.svg'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { phone, country } from "@/data/constatns";
import Chevron from '@/data/chevron_down.svg'
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { nanoid } from "nanoid";
import Link from "next/link";
import Logo from '@/data/JsononeLogo.svg'
import style from './form.module.css'
import righterrow from '@/data/righterrow.svg'
import FormSideContent from './FormSideContent'
import Signup from './Forms/Signup'


function SignUp() {
    return (
        <div>
            <div>
                <div className=" grid grid-cols-12 bg-[black] p-[20px] ">
                    <FormSideContent />
                    {/* <div className="md:col-span-6 col-span-12 bg-[black]">
                        <div className=" xl:ml-[110px] lg:ml-[80px] md:ml-[40px] ml-4">

                            <div className=" flex md:mt-[106px]  mt-[50px] md:ml-0  gap-[10px]">
                                <Image src={righterrow} alt="logo" />
                                <Image src={jsonone} alt='mobilogo' />
                            </div>
                            <div className="md:text-[40px] text-[35px] text-[white] md:text-start text-center font-semibold  mt-[72px]">Launch in just Days</div>
                            <div className="md:text-[28px] text-[20px] md:text-start text-center font-normal mt-[24px] text-[#666666]">With AI Powered Workflows </div>

                            <div className=" flex md:gap-[16px] gap-[8px] items-center  mt-[56px]  md:mx-0 mx-4">

                                <div className="  py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                                    <Image src={done} alt="done" />
                                </div>

                                <div>
                                    <div className="md:text-[16px text-[white] font-semibold ">Rapid Development & Deployment</div>
                                    <div className=" text-[14px] ml-[5px]">

                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] text-[14px] font-normal'>Eliminate the need for backend setup from scratch</li>
                                        </ul>
                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] text-[14px] font-normal'>Pre-built APIs, authentication, and database integration accelerate time-to-market</li>
                                        </ul>                                    </div>
                                </div>
                            </div>

                            <div className=" flex md:gap-[16px] my-[24px]  gap-[8px] items-center md:mx-0 mx-4">

                                <div className="py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                                    <Image src={done} alt="done" />
                                </div>

                                <div >
                                    <div className="md:text-[16px] text-[white] font-semibold ">Scalability & Performance</div>
                                    <div className=" text-[14px] ml-[5px]">

                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]   bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] text-[14px] font-normal'>Built on Nest.js for efficient, modular, and maintainable architecture.</li>
                                        </ul>
                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]   bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] text-[14px] font-normal'>MongoDB&apos;s flexible NoSQL structure ensures smooth scaling as data grows.</li>
                                        </ul>                                    </div>
                                </div>
                            </div>


                            <div className=" flex md:gap-[16px] mb-[54px] md:mb-0 gap-[8px] items-center md:mx-0 mx-4">
                                <div className="py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                                    <Image src={done} alt="done" />
                                </div>
                                <div>
                                    <div className="md:text-[16px] text-[white] font-semibold ">Security & Maintainability </div>
                                    <div className=" text-[14px] ml-[5px]">

                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] md:text-[14px]  font-normal'>TypeScript enhances code quality, reducing errors and improving maintainability.</li>
                                        </ul>
                                        <ul className='flex items-center  gap-2'>
                                            <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                            <li className='text-[#666666] text-[14px] font-normal'>Secure APIs with authentication, authorisation, and data validation baked in.</li>
                                        </ul>                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    <div className="md:col-span-6 col-span-12 xl:max-w-[90vh] rounded-[12px] bg-[#FFFFFF] text-[black]">
                        <div className="flex  justify-end items-center py-4 px-4  gap-[5px]">
                            <Image src={geo} alt="done" />
                            <div>EN</div>
                            <Image src={downerrow} alt="done" />
                        </div>
                        {/* first Input */}
                        <div className=" xl:mx-[150x] lg:mx-[112px] md:mx-[70px] mx-4 md:mt-[50px] py-6 " >
                            <div className="text-[28px] font-semibold text-[black]">Sign up</div>
                            <div className="text-[14px] font-normal text-[#666666]">
                                Already have an account?
                                <Link href="/signin">
                                    <span className="text-[black] font-medium pl-2">
                                        Sign in
                                    </span>
                                </Link>
                            </div>

                            <Signup />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp