import Image from 'next/image'
import done from '@/data/done.svg'
import righterrow from '@/data/righterrow.svg'
import jsonone from '@/data/jsonone-white-logo.svg'


const FormSideContent = () => {
    return (
        <div className="md:col-span-6 col-span-12  flex flex-col xl:items-end bg-[black] min-h-[100vh]">
            {/* <div className=" xl:ml-[30%] lg:ml-[80px] md:ml-[40px] ml-4"> */}
            <div className=" ">

                <div className=" flex md:mt-[106px]  mt-[50px] md:ml-0  gap-[10px]">
                    <Image src={righterrow} alt="logo" />
                    <Image src={jsonone} alt='mobilogo' />
                </div>
                <div className="md:text-[40px] text-[35px] text-[white] md:text-start text-center font-semibold  mt-[72px]">Launch in just Days</div>
                <div className="md:text-[28px] text-[20px] md:text-start text-center font-normal mt-[24px] text-[#666666]">With AI Powered Workflows </div>

                <div className=" flex md:gap-[16px] gap-[8px] items-center  mt-[56px]  md:mx-0 mx-4">

                    <div className="  py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                        <Image src={done} alt="done" />
                    </div>

                    <div>
                        <div className="md:text-[16px text-[white] font-semibold ">Rapid Development & Deployment</div>
                        <div className=" text-[14px] ml-[5px]">

                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] text-[14px] font-normal'>Eliminate the need for backend setup from scratch</li>
                            </ul>
                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] text-[14px] font-normal'>Pre-built APIs, authentication, and database integration accelerate time-to-market</li>
                            </ul>                                    </div>
                    </div>
                </div>

                <div className=" flex md:gap-[16px] my-[24px]  gap-[8px] items-center md:mx-0 mx-4">

                    <div className="py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                        <Image src={done} alt="done" />
                    </div>

                    <div>
                        <div className="md:text-[16px] text-[white] font-semibold ">Scalability & Performance</div>
                        <div className=" text-[14px] ml-[5px]">

                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]   bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] text-[14px] font-normal'>Built on Nest.js for efficient, modular, and maintainable architecture.</li>
                            </ul>
                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]   bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] text-[14px] font-normal'>MongoDB&apos;s flexible NoSQL structure ensures smooth scaling as data grows.</li>
                            </ul>                                    </div>
                    </div>
                </div>


                <div className=" flex md:gap-[16px] mb-[54px] md:mb-0 gap-[8px] items-center md:mx-0 mx-4">
                    <div className="py-[1%] px-[0.8%] bg-[#E12525] rounded-full flex justify-center items-center">
                        <Image src={done} alt="done" />
                    </div>
                    <div>
                        <div className="md:text-[16px] text-[white] font-semibold ">Security & Maintainability </div>
                        <div className=" text-[14px] ml-[5px]">

                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] md:text-[14px]  font-normal'>TypeScript enhances code quality, reducing errors and improving maintainability.</li>
                            </ul>
                            <ul className='flex items-center  gap-2'>
                                <div className='w-[6px] h-[6px]  bg-[#666666] rounded-full ' ></div>
                                <li className='text-[#666666] text-[14px] font-normal'>Secure APIs with authentication, authorisation, and data validation baked in.</li>
                            </ul>                                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormSideContent