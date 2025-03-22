import React from 'react'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import done from '@/data/done.svg'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import mobilogoblack from '@/data/mobilogoblack.svg'
import mobigiftblack from '@/data/mobigiftblack.svg'
import eye from '@/data/eye.svg'
import Link from "next/link";
import righterrow from '@/data/righterrow.svg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { landings, phone } from "@/data/constatns";
import Chevron from '@/data/chevron_down.svg'
import backgroundImage from '@/data/bg-img.svg'
import style from './form.module.css'

function ResetPhoneNumber() {
    return (
        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="relative flex justify-between md:p-[24px]">
                <div className='flex gap-[7px] items-center'>
                    <Image src={righterrow} alt="done" />
                    <div className='text-[14px] font-medium text-[black]'>Back</div>
                </div>

                <Image src={logojson} className='absolute top-[20px] md:top-[48px] lg:top-[28px] xl:top-[18px] left-0 right-0 mx-auto' alt="done" />
                <div className="flex items-center gap-[8px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>
            </div>

            <div className=' xl:py-[100px] lg:py-[80px] md:py-[70px] py-15'>

                <div className=' xl:mx-[400px]  lg:mx-[200px] md:mx-[80px] mx-15  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                    <div className='mx-[40px]'>

                        <div className='flex gap-[10px]'>
                            <Image src={logojson} alt="done" />
                        </div>
                        <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Reset password</div>
                        <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>Enter your phone number, and we'll send you a link to reset your password.</div>
                        {/* Emial Input */}
                        <div className="flex  mt-[16px] gap-6 ">
                            <div className="flex justify-center gap-[16px] px-[16px] py-[12px]  border border-[#666666] rounded-[4px]  " >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className="flex items-center gap-[8px] px-3 cursor-pointer " >
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

                        <div className='text-[14px] font-medium mt-[16px]'>
                            <Link href='/login/resetpassord' >
                                Use email instead
                            </Link>
                        </div>
                        <div className="bg-[black] flex md:w-[30%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">
                                <Link href="/login/resetpassord/resetpasswordphone/resetotpnumber">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ResetPhoneNumber