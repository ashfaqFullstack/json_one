"use client"
import Image from "next/image"
import Link from "next/link"
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

type FormInputs = {
    email: string;
}

const ResetPassEmail = () => {
    const router = useRouter()
    const [resetError, setResetError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // Dummy email test condition for frontend test
        if (data.email == 'rody@one.com') {
            // Redirect to confirmation page
            setResetError(null);
            router.push("/signin/resetpassword/email/linksent");
        } else {
            setResetError("The account associated with that email address was not found");
        }
    }

    return (
        <div className='mx-[40px]'>
            <div className='flex gap-[10px]'>
                <Image src={logojson} alt="Jsonone" />
            </div>
            <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Reset password</div>
            <div className='text-[14px] font-normal mt-[9px] text-[#00000099] '>
                Enter your email address below, and we'll send you a link to reset your password.
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Error Message */}
                {errors.email != null ? (
                    <div className="mt-4 text-red-500 rounded">
                        {/* {resetError} */}
                        The account associated with that email address was not found
                    </div>
                ) : <></>}

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

                <Link href="/signin/resetpassword/phone">
                    <div className='text-[14px] font-medium mt-[16px]'>
                        Use phone number instead
                    </div>
                </Link>

                <button
                    type="submit"
                    className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
                >
                    <Image src={plus} alt="plus icon" />
                    Send reset link
                </button>
            </form>
        </div>
    )
}

export default ResetPassEmail
