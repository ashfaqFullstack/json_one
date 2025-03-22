import pic from '@/data/mongodbicon.svg'
import Image from 'next/image'
import MongoDB from '@/data/mongodb.svg'
import { BsPlusLg } from "react-icons/bs";
import edgefunction from '@/data/edge_function.svg'
import golbal from '@/data/global_perf.svg'
import user from '@/data/userId.svg'
import sarvar from '@/data/sarvar.svg'





function Card() {
    return (
        <div className='mt-[120px] md:mt-[130px] lg:mt-[148px]' >
            <div className=' text-[black] md:text-[41.9px] text-[39px] z-50 md:text-start text-center font-semibold md:absolute '>Reliability you can count on.</div>


            <div className=' grid grid-cols-12 items-center text-[black] md:text-start text-center '>
                {/* first row of content  */}
                <div className=' md:col-span-4 col-span-12  lg:border-r border-[#e3dcdc] md:pr-[48px]  md:py-[164px] '>
                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 mt-[58px] md:mt-0 flex items-center justify-center md:justify-start text-[#666666] text-center md:text-start gap-[8px]'>
                        <Image src={MongoDB} alt="" />
                        <div className=' md:text-[19px] font-normal'>MongoDB Database</div>
                    </div>

                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 md:text-[20px]  mt-[16px] text-[18px] font-semibold '>
                        Every project comes with a
                        dedicated MongoDB database,
                        the world's most trusted NoSQL
                        solution.
                        <ul>
                            <li className='flex items-start gap-[4px]' >
                                -
                                100% Portable – Own your data with full flexibility.
                            </li>
                            <li className='flex items-start gap-[4px]' >
                                -
                                Built-in Auth with RLS – Secure access with Row-Level Security.
                            </li>
                            <li className='flex items-start gap-[4px]' >
                                -
                                Easily Extendable – Customize and scale effortlessly.
                            </li>
                        </ul>
                    </div>
                </div>






                <div className=' md:col-span-4 col-span-12   lg:border-r border-[#e3dcdc] px-[25px] lg:px-[48px]  md:py-[149px]'>
                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 mt-[58px] md:mt-0 flex items-center justify-center md:justify-start text-[#666666] text-center md:text-start gap-[8px]'>
                        <Image src={edgefunction} alt="" />
                        <div className=' md:text-[19px] font-normal'>Edge Functions</div>
                    </div>







                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 md:text-[20px]  mt-[16px] text-[18px] font-semibold '>
                        Infrastructure designed to
                        automatically mitigate
                        DDoS attacks and protect
                        your information.
                    </div>
                </div>







                <div className='relative md:col-span-4 col-span-12 md:max-h-[40%] flex items-center border-l md:border-l-0 border-t border-b border-[#e3dcdc] my-[6%] md:my-0 py-[4%] md:py-[10%] md:px-[24px] md:mx-0 '>
                    <BsPlusLg className='absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] text-[#A8A8A8] text-[32px]' />
                    <div className=' ml-[24px] md:ml-0 border-l-2 py-[1%] md:py-[4%] border-[#c9c9c9] bg-[#17171700]'>
                        <div className='flex text-[35px] md:text-[42px] w-full pl-[16px] font-semibold text-[#FAFAFA]'>99.99% Uptime</div>
                    </div>
                    <BsPlusLg className='absolute bottom-0 right-0  translate-x-[50%] translate-y-[50%] text-[#A8A8A8] text-[32px]' />
                </div>









                {/* second row of content */}
                <div className=' md:col-span-4 col-span-12 lg:border-r border-[#e3dcdc] md:pr-[48px] md:pb-[84px] '>
                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 mt-[18px] md:mt-0  flex items-center justify-center md:justify-start text-[#666666] text-center md:text-start gap-[8px]'>
                        <Image src={golbal} alt="" />
                        <div className=' md:text-[19px] font-normal'>Global performance</div>
                    </div>







                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 md:text-[20px]  mt-[16px] text-[18px] font-semibold '>
                        Automatically route traffic
                        to over 100 edge locations
                        around the globe, for a fast
                        site, anywhere in the world.
                    </div>
                </div>






                <div className=' md:col-span-4 col-span-12 lg:border-r border-[#e3dcdc] px-[25px] lg:px-[48px] md:pb-[84px] '>
                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 mt-[18px] md:mt-0  flex items-center justify-center md:justify-start text-[#666666] text-center md:text-start gap-[8px]'>
                        <Image src={user} alt="" />
                        <div className=' md:text-[19px] font-normal'>User-first protection</div>
                    </div>








                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 md:text-[20px]  mt-[16px] text-[18px] font-semibold '>
                        Vercel automatically
                        caches your site to ensure
                        that even if a backend
                        service goes down, your
                        site stays up.
                    </div>
                </div>






                <div className=' md:col-span-4 col-span-12  px-[25px] lg:px-[48px]   md:pb-[84px]   '>
                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 mt-[18px] md:mt-0  flex items-center justify-center md:justify-start text-[#666666] text-center md:text-start gap-[8px]'>
                        <Image src={user} alt="" />
                        <div className=' md:text-[19px] font-normal'>Serverless Storage</div>
                    </div>






                    <div className='max-w-[70%] md:max-w-full mx-auto md:mx-0 md:text-[20px]  mt-[16px] text-[18px] font-semibold '>
                        Accelerate development
                        with databases for the
                        fastest frontends.
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Card