"use client"
import Image from "next/image"
import Link from "next/link"
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import eye from '@/data/eye.svg'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

type FormInputs = {
    email: string;
    password: string;
}

const Signin = () => {
    const router = useRouter()
    const [authError, setAuthError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // dummy email test condition for frontend test 
        if (data.email == 'rody@one.com') {
            setAuthError(null)
            router.push("/home")
        } else {
            setAuthError("Wrong email or password");
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className='mx-[40px]'>
            <div className='flex gap-[10px]'>
                <Image src={logojson} alt="done" />
            </div>
            <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Sign in</div>
            <div className='text-[14px] font-normal mt-[9px] '>
                Don&apos;t have an account yet?
                <Link href='/signup'>
                    <span className='font-bold'> Sign up</span>
                </Link>
            </div>

            {/* Error Message */}
            {authError != null ? (
                <div className="mt-4 p-3 text-red-500 rounded">
                    {authError}
                </div>
            ) : <></>}

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div className={`border ${errors.email ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[24px]`}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full outline-none"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                    />
                </div>


                {/* Password Input */}
                <div className={`flex justify-between border ${errors.password ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[16px]`}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="w-[90%] outline-none"
                        {...register("password", { required: true })}
                    />
                    <div onClick={togglePasswordVisibility} className="cursor-pointer">
                        <Image src={eye} alt="toggle password visibility" />
                    </div>
                </div>


                <Link href="/signin/resetpassword/email">
                    <div className='text-[14px] font-medium mt-[16px]'>
                        Forgot password?
                    </div>
                </Link>

                <button
                    type="submit"
                    className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
                >
                    <Image src={plus} alt="plus icon" />
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default Signin
