import errow from "@/data/errow.svg"
import circle from "@/data/circle.svg"
import range from "@/data/range.svg"
import Conformance from "@/data/conformance.svg"
import firstman from "@/data/firstman.svg"
import firstwoman from "@/data/firstwoman.svg"
import firstgb from "@/data/firstbg.svg"
import secondman1 from "@/data/secondman1.svg"
import secondman2 from "@/data/secondman2.svg"
import secondman3 from "@/data/secondman3.svg"
import secondman4 from "@/data/secondman4.svg"
import secondman5 from "@/data/secondman5.svg"
import thirdwoman1 from "@/data/thirdwoman1.svg"
import thirdwoman2 from "@/data/thirdwoman2.svg"
import thirdwoman3 from "@/data/thirdwoman3.svg"
import Image from "next/image"
import { BsPlusLg } from "react-icons/bs"

function LastSection() {
    return (
        <div className="grid grid-cols-12 mt-[60px] md:mt-0 relative border-b border-[#e3dcdc]" >
            <BsPlusLg className='absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] text-[#A8A8A8] text-[32px]' />

            <div className="col-span-12 md:col-span-6 relative md:border-r border-[#e3dcdc] p-[24px] md:p-[48px]" >
                <div className="flex items-center gap-[8px]" >
                    <Image src={circle} alt="Loading..." />
                    Instant Rollbacks
                </div>

                <div className="text-[18px] text-center md:text-start md:text-[20px] lg:text-[24px] mt-[16px]" >
                    <span className="font-semibold" >Go ahead, deploy on Friday.</span>Instantly rollback to a working deployment.
                </div>

                <div className="flex w-fit gap-[26px] mt-[32px] items-center rounded-[12px] shadow-md  font-normal p-[13px] border border-[#e3dcdc]" >
                    {/* box first row  */}
                    <div>
                        <div className="flex justify-between items-center text-[10px] md:text-[13px] ">
                            <div>
                                <span className="text-gray-300" >vercel-site/</span>jvjb4ynna
                            </div>
                            <div className="text-gray-300" >
                                1d ago
                            </div>
                        </div>
                        {/* box second row */}
                        <div className="flex items-center text-[8px] md:text-[13px] justify-between gap-[8px]" >
                            <Image src={range} alt="Range" />
                            <span> ba5f55f </span>
                            <span> Update bento box design </span>
                        </div>
                    </div>

                    <div className="text-[12px] md:text-[13px]"  >90</div>
                </div>

                {/* Arrow */}

                <div className="relative h-[20vh]" >
                    <Image src={circle} alt="Errow" className="absolute border border-[#e3dcdc] rounded-full p-[5px] w-[26px]  top-[44%] left-[50%] translate-x-[-50%] translate-y-[-50%] " />
                    <Image src={errow} alt="Errow" className="absolute top-[46%] left-[50%] translate-x-[-50%] translate-y-[-50%] " />
                </div>

                {/* box */}

                <div className="flex !mt-[-16px] ml-auto w-fit gap-[26px] items-center rounded-[12px] shadow-md font-normal p-[13px] border-2 border-dashed border-[#e3dcdc]" >
                    {/* box first row  */}
                    <div>
                        <div className="flex justify-between  items-center text-[10px] md:text-[13px]  ">
                            <div>
                                <span className="text-gray-300" >vercel-site/</span>jvjb4ynna
                            </div>
                            <div className="text-gray-300" >
                                1d ago
                            </div>
                        </div>
                        {/* box second row */}
                        <div className="flex  items-center text-[8px] md:text-[13px] justify-between gap-[8px]" >
                            <Image src={range} alt="Range" />
                            <span> ba5f55f </span>
                            <span> Update bento box design </span>
                        </div>
                    </div>

                    <div className="text-[12px] md:text-[13px]" >90</div>
                </div>
            </div>

            {/* Conformance */}

            <div className=" col-span-12 md:col-span-6 px-[24px] md:px-[48px]" >
                <div className="flex items-center gap-[8px]" >
                    <Image src={circle} alt="Loading..." />
                    Instant Rollbacks
                </div>

                <div className="text-[18px] text-center md:text-start md:text-[20px] lg:text-[24px] mt-[16px]" >
                    <span className="font-semibold" >Move fast, don&apos;t break things.</span>Keep quality high while maintaining velocity with Enterprise Monorepos.
                </div>

                <div className="grid grid-cols-12 mt-[32px] rounded-[12px]  border border-[#e3dcdc]" >
                    <div className="col-span-12 md:col-span-6 p-[16px] md:border-r border-[#e3dcdc]" >
                        <div className="text-[14px] font-medium" >Conformance</div>

                        <div className="bg-[#FAFAFA] py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >Excellent</div>
                            <div className="font-semibold" >9.5</div>
                        </div>
                        <div className="bg-[#FAFAFA] py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >Total Issues</div>
                            <div className="font-semibold" >34</div>
                        </div>
                        <div className="bg-[#FAFAFA] py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >Major Issues</div>
                            <div className="font-semibold" >12</div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 p-[16px] border-r border-[#e3dcdc]" >
                        <div className="text-[14px] font-medium" >Code Owners</div>

                        <div className="bg-[#FAFAFA] flex-wrap py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >@vercel/design</div>
                            <div className="flex" >
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" />
                            </div>
                        </div>
                        <div className="bg-[#FAFAFA] flex-wrap py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >@vercel/eng</div>
                            <div className="flex" >
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" />
                            </div>
                        </div>
                        <div className="bg-[#FAFAFA] flex-wrap py-[20px] mt-[16px] text-[11px] rounded-[6px] px-[12px] flex items-center justify-between" >
                            <div className="text-[#666666]" >@vercel/marketing</div>
                            <div className="flex" >
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" className="mr-[-10px]" />
                                <Image src={firstwoman} alt="Range" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSection