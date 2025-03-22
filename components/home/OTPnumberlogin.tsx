import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import mobilogoblack from '@/data/mobilogoblack.svg'
import mobigiftblack from '@/data/mobigiftblack.svg'
import righterrow from '@/data/righterrow.svg'
import Link from 'next/link'
import backgroundImage from '@/data/bg-img.svg'

function OTPnumberlogin() {
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

            <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                <div className='  rounded-[12px] bg-[white]  px-[40px]  text-[black] py-[40px]'>
                    <div className='flex gap-[10px]'>
                        <Image src={logojson} alt="done" />
                    </div>
                    <div className='md:text-[28px] mt-[64px] text-[25px] font-semibold'>Enter the code </div>
                    <div className='text-[14px] text-[rgba(0,0,0,0.6)] font-normal mt-[8px]'>We have sent an SMS with a code to <span className="font-bold">+372 5687413 </span> . Please enter the code below to verify your number..</div>
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



                    <Link href='/signin/resetpassword/phone/newpassword'>
                        <div className="bg-[black] flex md:w-[32%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">
                                Confirm Code
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default OTPnumberlogin