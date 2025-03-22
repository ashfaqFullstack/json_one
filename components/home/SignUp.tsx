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
                            <div className="md:flex w-full gap-4 lg:gap-[4px]  md:pr-[16px] lg:pr-0  mt-[24px]   ">
                                <div className="border border-[#666666] rounded-[4px] md:w-[50%] py-[12px] px-[16px]">
                                    <input type="text" name="" id="" className=" outline-none " placeholder="First Name " />
                                </div>
                                <div className="border border-[#666666] rounded-[4px] md:w-[50%] py-[12px] px-[16px] md:mt-0 mt-3">
                                    <input type="text" name="" id="" className=" outline-none  " placeholder="Last Name " />
                                </div>

                            </div>
                            {/* Second Input */}
                            <div className="flex justify-between px-[16px] mt-[16px]  py-[12px]   text-[black] border border-[#666666]  ">
                                <div>Country</div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className="flex items-center gap-2 cursor-pointer text-[black]" >
                                            <Image src={Chevron} alt="chevron" className='w-[20px] h-[20px]' />
                                        </div>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent className={style.dropdown} align="start">
                                        {country.map((page) => (
                                            <DropdownMenuItem key={page.id}>
                                                <div>{page.title}</div>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            {/* Third Input */}

                            <div className="flex  mt-[16px] gap-6 ">
                                <div className="flex justify-center gap-[16px] px-[16px] py-[12px]  border border-[#666666] rounded-[4px]  " >
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className="flex items-center gap- cursor-pointer " >
                                                <div className="text-[14px] font-normal text-[black]">+254</div>

                                                <Image src={Chevron} alt="chevron" />

                                            </div>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent className={style.dropdown} align="start">
                                            {phone.map((page) => (
                                                <DropdownMenuItem key={page.id}>
                                                    <div>{page.title}</div>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="border border-[#666666] rounded-[4px] py-[12px] px-[16px] w-full">
                                    <input type="text" name="" className=" outline-none text-[black] w-full" id="" placeholder="Phone Number" />
                                </div>
                            </div>


                            <div className=" text-[black] text-[12px] font-normal mt-[8px]">Make sure you enter the phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</div>
                            <div className="mt-[16px]">
                                <div className="border border-[#666666] rounded-[4px] py-[12px] px-[16px]">
                                    <input type="text" placeholder="Email " className=" w-full outline-none" />
                                </div>

                            </div>
                            <div className="mt-[8px] text-[12px]  font-normal text-[black]">This will be your new Jsonone ID</div>
                            <div className=" flex justify-between border border-[#666666] rounded-[4px] py-[12px] px-[16px]">
                                <input type="text" name="" id="" placeholder="Password" className=" w-full outline-none" />
                                <Image src={eye} alt="done" />
                            </div>
                            <div className=" flex justify-between border border-[#666666] rounded-[4px] py-[12px] px-[16px] mt-[16px]">
                                <input type="text" name="" id="" placeholder="Confirim Password" className=" w-full outline-none" />
                                <Image src={eye} alt="done" />
                            </div>
                            <div className="text-[black] text-[12px] font-simibold mt-[8px]">
                                At least 8 characters long, must contain numbers, uppercase and lowercase letters
                            </div>
                            {/* ======Button====== */}
                            <Link href='/signup/verifyemail'>
                                <div className="bg-[black] flex md:w-[30%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                                    <Image src={plus} alt="done" />
                                    <div className="text-[14px] font-medium text-[white]">
                                        Sign Up
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp