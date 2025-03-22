"use client"
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import logojson from '@/data/logojson.svg'
import { useRouter } from 'next/navigation';
import righterrow from '@/data/righterrow.svg'

const Header = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back(); // This will navigate to the previous page in history
    };
    return (
        <div className="relative flex justify-between md:p-[24px]">
            <div className='flex gap-[7px] items-center cursor-pointer' onClick={handleBack}>
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
    )
}

export default Header