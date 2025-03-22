import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import plus from '@/data/plus.svg'
import FormSideContent from './FormSideContent'
import Link from 'next/link'
function Alldone() {
    return (
        <div className=" grid grid-cols-12 bg-[black] p-[20px]">

            <FormSideContent />

            <div className='bg-[white] md:col-span-6 xl:max-w-[90vh] col-span-12 rounded-[12px]'>

                <div className="flex  justify-end items-center py-4 px-4  gap-[5px] text-[black]">
                    <Image src={geo} alt="done" />
                    <div>EN</div>
                    <Image src={downerrow} alt="done" />
                </div>

                <div className='text-[black] md:my-[230px] md:ml-[15%] mx-5 '>
                    <div className='md:text-[28px] text-[25px] font-semibold'>You&apos;re all set!</div>
                    <div className='text-[14] font-normal mt-[8px]'>Your account has been successfully set up..</div>


                    <Link href='/home' >
                        <div className="bg-[black] flex gap-[4px] w-fit px-[24px] mb-[24px] justify-center rounded-[4px] mt-[24px] py-[12px]  ">
                            <Image src={plus} alt="done" />
                            <div className="text-[14px] font-medium text-[white]">Proceed to Jsonone </div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>)
}

export default Alldone