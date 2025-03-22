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
import Header from '@/components/Signin/Header'

function PasswordUpdate() {
    return (
        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />
            

            <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                <div className='  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                    <div className='mx-[40px]'>

                        <div className='flex gap-[10px]'>
                            <Image src={logojson} alt="done" />
                        </div>
                        <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Password updated</div>
                        <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>Your password has been updated successfully. You're all set to securely access your account with your new credentials.</div>

                        <Link href='/signin'>
                            <div className="bg-[black] flex md:w-[30%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                                <Image src={plus} alt="done" />
                                <div className="text-[14px] font-medium text-[white]">
                                    Sign in
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>)
}

export default PasswordUpdate