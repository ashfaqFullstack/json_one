"use client"
import Image from "next/image"
import logojson from '@/data/logojson.svg'
import plus from '@/data/plus.svg'
import eye from '@/data/eye.svg'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

type FormInputs = {
    password: string;
    confirmPassword: string;
}

const CreateNewPass = () => {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormInputs>();

    const password = watch("password", "");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const validatePassword = (value: string) => {
        // Check if password meets requirements
        const hasMinLength = value.length >= 8;
        const hasNumber = /\d/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);

        if (!hasMinLength || !hasNumber || !hasUppercase || !hasLowercase) {
            setValidationError("Password must be at least 8 characters long, must contain numbers and at least 1 uppercase and lowercase letters");
            return false;
        }

        setValidationError(null);
        return true;
    }

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // Validate password requirements
        if (!validatePassword(data.password)) {
            return;
        }
        if (data.password !== data.confirmPassword) {
            setValidationError("Passwords you entered don't match");
            return;
        }

        // If validation passes, proceed with password update
        router.push("/signin/resetpassword/phone/passwordupdate")
    }

    return (
        <div className='mx-[40px]'>
            <div className='flex gap-[10px]'>
                <Image src={logojson} alt="Jsonone logo" />
            </div>
            <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Create new password</div>
            <div className='text-[14px] font-normal mt-[9px]'>
                Welcome back! Let's secure your account by setting up a new password.
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Validation Error Message */}
                {validationError && (
                    <div className="mt-4 text-red-500 rounded">
                        {validationError}
                    </div>
                )}

                {/* New Password Input */}
                <div className={`flex justify-between border ${validationError ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[16px]`}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="w-full outline-none"
                        {...register("password", { required: true })}
                        onChange={(e) => {
                            // Clear validation error when user types
                            if (validationError) {
                                setValidationError(null);
                            }
                        }}
                    />
                    <div onClick={togglePasswordVisibility} className="cursor-pointer">
                        <Image src={eye} alt="toggle password visibility" />
                    </div>
                </div>

                {/* Confirm Password Input */}
                <div className={`flex justify-between border ${validationError ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[16px]`}>
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full outline-none"
                        {...register("confirmPassword", { required: true })}
                    />
                    <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer">
                        <Image src={eye} alt="toggle password visibility" />
                    </div>
                </div>

                <div className='text-[14px] font-medium mt-[16px] text-[#00000099]'>
                    At least 8 characters long, must contain numbers, uppercase and lowercase letters
                </div>

                <button
                    type="submit"
                    className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
                >
                    <Image src={plus} alt="plus icon" />
                    Create new password
                </button>
            </form>
        </div>
    )
}

export default CreateNewPass
