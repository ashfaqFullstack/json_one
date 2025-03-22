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
import style from '../../Signup/form.module.css'
import ResetPassPhone from '../Forms/ResetPassPhone'
import Header from '@/components/Signin/Header'

function ResetPhoneNumber() {
    return (
        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />
            {/* <div className="relative flex justify-between md:p-[24px]">
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
            </div> */}

            <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                <div className='  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                    <ResetPassPhone />
                </div>

            </div>

        </div>
    )
}

export default ResetPhoneNumber