import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import mobilogoblack from '@/data/mobilogoblack.svg'
import mobigiftblack from '@/data/mobigiftblack.svg'
import righterrow from '@/data/righterrow.svg'
import Link from 'next/link'

function OTPnumberlogin() {
    return (
        <div>
            <div className="h- h-fit w-full bg-cover bg-center py-1 " style={{
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

                <div className=' '>

                    <div className='text-[black]  md:mx-[450px]  md:my-[200px]  bg-[white] px-[40px] py-[40px]     mx-5 '>
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



                        <div className="bg-[black] flex md:w-[32%] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">
                                <Link href='/login/resetpassord/resetpasswordphone/resetotpnumber/newpassword'>
                                    Confirm
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default OTPnumberlogin