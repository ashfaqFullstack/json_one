import React from 'react'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import done from '@/data/done.svg'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import mobilogoblack from '@/data/mobilogoblack.svg'
import mobigiftblack from '@/data/mobigiftblack.svg'
import righterrow from '@/data/righterrow.svg'
import backgroundImage from '@/data/bg-img.svg'
import Link from 'next/link'

function PasswordUpdate() {
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
                        <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Password updated</div>
                        <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>Your password has been updated successfully. You're all set to securely access your account with your new credentials.</div>

                        <div className="bg-[black] flex md:w-[30%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">
                                <Link href='/login'>
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>)
}

export default PasswordUpdate