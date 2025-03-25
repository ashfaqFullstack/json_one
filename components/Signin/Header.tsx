"use client"
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import logojson from '@/data/logojson.svg'
import { useRouter } from 'next/navigation';
import righterrow from '@/data/righterrow.svg'
import Link from 'next/link'
import LanguageSelect from '../Signup/LanguageSelect'

const Header = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back(); // This will navigate to the previous page in history
    };
    return (
        <div className="relative flex justify-between pt-[12px] md:pt-0 md:p-[24px]">
            <div className='flex gap-[7px] items-center cursor-pointer' onClick={handleBack}>
                <Image src={righterrow} alt="done" />
                <div className='text-[14px] font-medium text-[black]'>Back</div>
            </div>

            <Link href='/home' >
                <Image src={logojson} className='absolute top-[20px] md:top-[48px] lg:top-[28px] xl:top-[18px] left-0 right-0 mx-auto' alt="done" />
            </Link>
            <div className="flex items-center gap-[8px] text-[black]">
                <LanguageSelect />
            </div>
        </div>
    )
}

export default Header