import backgroundImage from '@/data/bg-img.svg'
import Signin from './Form/Signin'
import Header from './Header'

function SignIn() {

    return (

        <div className="h-fit  w-full min-h-[100vh] bg-[#f9f6f6] " style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "50%",
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <Header />

                <div className=' max-w-[480px] xl:py-[100] mx-auto lg:py-[80px] md:py-[70px] pt-15'>

                    <div className='  rounded-[12px] bg-[white]    text-[black] py-[40px]'>
                        <Signin />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn