import Image from "next/image"
import done from '@/data/done.svg'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import mobigift from '@/data/mobgift.svg'
import mobilogo from '@/data/mobilogo.svg'
import plus from '@/data/plus.svg'
import Link from "next/link"
import FormSideContent from "./FormSideContent"

function OTPNumber() {
    return (
        <div className=" grid grid-cols-12 bg-[black] p-[20px]">

            <FormSideContent />


            <div className='bg-[white] md:col-span-6 xl:max-w-[90vh] col-span-12 rounded-[12px]'>

                <div className="flex  justify-end items-center py-4 px-4  gap-[5px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>

                <div className='text-[black] md:my-[230px]  xl:mx-[150px] lg:mx-[80px] md:mx-[150px]    mx-5 '>
                    <div className='md:text-[28px] text-[25px] font-semibold'>Verify your phone</div>
                    <div className='text-[14] font-normal mt-[8px]'>We have sent an SMS with a code to <span className="font-bold">+372 5687413 </span> . Please enter the code below to verify your number..</div>
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



                    <Link href='/signup/allset'>
                        <div className="bg-[black] flex md:w-[25%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">
                                Confirm
                            </div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default OTPNumber