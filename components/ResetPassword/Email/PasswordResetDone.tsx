import Image from 'next/image'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import backgroundImage from '@/data/bg-img.svg'
import Link from 'next/link'
import Header from '@/components/Signin/Header'


function PasswordResetSet() {
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
                        <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Password reset link sent</div>
                        <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>We've just sent a password reset link to the email address associated. Check your inbox for further instructions.</div>

                        <Link href='/signin' >
                            <div className="bg-[black] flex md:w-[30%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                                <Image src={plus} alt="done" />
                                <div className="text-[14px] font-medium text-[white]">Back</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PasswordResetSet