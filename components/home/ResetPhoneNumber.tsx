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
import { landings } from "@/data/navbar";
import Chevron from '@/data/chevron_down.svg'
function ResetPhoneNumber() {
    return (
        <div className="h- h-fit w-full bg-cover bg-center " style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221440%22%20height%3D%22900%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22skyblue%22%20%2F%3E%3Ccircle%20cx%3D%22720%22%20cy%3D%22450%22%20r%3D%22300%22%20fill%3D%22orange%22%20%2F%3E%3C%2Fsvg%3E')"
        }}>
            <div className="  flex justify-between md:mx-[24px]">


                <div className='flex gap-[7px] items-center'>
                    <Image src={righterrow} alt="done" />
                    <div className='text-[14px] font-medium text-[black]'>Back</div>
                </div>

                <Image src={logojson} alt="done" />
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
                            <Image src={mobilogoblack} alt="done" />
                            <Image src={mobigiftblack} alt="done" />
                        </div>
                        <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Reset password</div>
                        <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>Enter your email address below, and we'll send you a link to reset your password.</div>
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

                                    <DropdownMenuContent align="start">
                                        {landings.map((page) => (
                                            <DropdownMenuItem key={page.id}>
                                                <Link href={page.route}>{page.title}</Link>
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

                            Use phone number instead
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