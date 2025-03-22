import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import done from '@/data/done.svg'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'

import eye from '@/data/eye.svg'
import { emitWarning } from 'process'
import { Value } from '@radix-ui/react-select'
import Link from 'next/link'
import righterrow from '@/data/righterrow.svg'
import backgroundImage from '@/data/bg-img.svg'
function SignIn() {




    return (

        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <div>
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

                <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                    <div className='  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                        <div className='mx-[40px]'>

                            <div className='flex gap-[10px]'>
                                <Image src={logojson} alt="done" />
                            </div>
                            <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Sign in</div>
                            <div className='text-[14px] font-normal mt-[9px] '>
                                Don&apos;t have an account yet?
                                <Link href='/signup'>
                                    <span className='font-bold'> Sign up</span>
                                </Link>
                            </div>
                            {/* Emial Input */}
                            <div className="border border-[#666666] rounded-[4px] py-[12px] px-[16px] mt-[24px]">
                                <input type="text" placeholder="Email " className=" w-full outline-none"
                                    name='email'
                                />
                            </div>
                            {/* pssowrd Input */}
                            <div className=" flex justify-between border border-[#666666] rounded-[4px] py-[12px] px-[16px] mt-[16px]">
                                <input type="text" name="passowrd" id="" placeholder="Password"
                                    className=" w-[90%] outline-none"
                                />

                                <Image src={eye} alt="done" />
                            </div>
                            <Link href="/signin/resetpassword/email">
                                <div className='text-[14px] font-medium mt-[16px]'>
                                    Forgot password?
                                </div>
                            </Link>
                            <Link href='/home'>
                                <div className="bg-[black] w-fit gap-[4px] flex px-[24px] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                                    <Image src={plus} alt="done" />
                                    <div className="text-[14px] font-medium text-[white]">
                                        Sign In
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

export default SignIn