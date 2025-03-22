import Image from "next/image"
import done from '@/data/done.svg'
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import mobigift from '@/data/mobgift.svg'
import mobilogo from '@/data/mobilogo.svg'
import plus from '@/data/plus.svg'
import Link from "next/link"
import FormSideContent from "./FormSideContent"
import VerifyPhone from "./Forms/VerifyPhone"

function VerifyNumber() {
    return (
        <div className=" grid grid-cols-12 bg-[black] p-[20px]">

            <FormSideContent />


            <div className='bg-[white] md:col-span-6 xl:max-w-[90vh] col-span-12 rounded-[12px]'>

                <div className="flex  justify-end items-center py-4 px-4  gap-[5px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>

                <div className='text-[black] mb-[24px] md:my-[230px] md:ml-[15%]  mx-5 '>
                    <div className='md:text-[28px] text-[25px] font-semibold'>Verify your phone</div>
                    <div className='text-[14] font-normal mt-[8px]'>We have sent an SMS with a code to <span className="font-bold">+372 5687413 </span> . Please enter the code below to verify your number..</div>
                    <div className="text-[14px] font-normal text-[#00000059] mt-[8px]">Resend code in 58s</div>

                    <VerifyPhone />

                </div>

            </div>
        </div>
    )
}

export default VerifyNumber