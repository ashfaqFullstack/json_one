import backgroundImage from '@/data/bg-img.svg'
import ResetPassEmail from '../Forms/ResetPassEmail'
import Header from '@/components/Signin/Header'

function ResetPassword() {
    return (
        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />

            <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                <div className='  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                    <ResetPassEmail />
                </div>

            </div>

        </div>
    )
}

export default ResetPassword