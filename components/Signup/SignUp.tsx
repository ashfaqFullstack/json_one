import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'

import Link from "next/link";
import FormSideContent from './FormSideContent'
import Signup from './Forms/Signup'
import LanguageSelect from './LanguageSelect';


function SignUp() {
    return (
        <div>
            <div>
                <div className=" grid grid-cols-12 bg-[black] p-[20px] ">
                    <FormSideContent />

                    <div className="md:col-span-6 relative col-span-12 flex flex-col xl:max-w-[90vh] rounded-[12px] bg-[#FFFFFF] text-[black]">
                        <div className='absolute right-0 p-[24px]' >
                            <LanguageSelect />
                        </div>
                        {/* first Input */}
                        <div className=" xl:mx-[150x] lg:mx-[112px] md:mx-[70px] mx-4 md:mt-[50px] py-6 " >
                            <div className="text-[28px] font-semibold text-[black]">Sign up</div>
                            <div className="text-[14px] font-normal text-[#666666]">
                                Already have an account?
                                <Link href="/signin">
                                    <span className="text-[black] font-medium pl-2">
                                        Sign in
                                    </span>
                                </Link>
                            </div>

                            <Signup />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp