"use client"
import Image from 'next/image'
import plus from '@/data/plus.svg'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const VerifyPhone = () => {
    // test variable for otp
    const testCode = "34567";

    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleOtpChange = (value: string) => {
        setOtp(value);
        // Clear error when user starts typing again
        if (otpError) {
            setOtpError(false);
            setErrorMessage("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if OTP is complete
        if (otp.length < 5) {
            setOtpError(true);
            setErrorMessage("The code must not be less than 5 characters");
            return;
        }

        // Validate OTP against testCode
        if (otp !== testCode) {
            setOtpError(true);
            setErrorMessage("The code you entered is wrong");
            return;
        }

        // If OTP is valid, navigate to new password page
        router.push('/signup/allset');
    };

    return (
        <div className='mt-[24px]' >
            {/* Error Message */}
            {errorMessage && (
                <div className="mb-4 text-red-500 rounded">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <InputOTP
                    maxLength={5}
                    value={otp}
                    onChange={handleOtpChange}
                >
                    <InputOTPGroup className='!gap-[4px]'>
                        <InputOTPSlot
                            className={`!border ${otpError ? '!border-red-500' : '!border-[rgba(0,0,0,0.2)]'} !rounded-[4px] md:!w-[48px] md:!h-[64px]`}
                            index={0}
                        />
                        <InputOTPSlot
                            className={`!border ${otpError ? '!border-red-500' : '!border-[rgba(0,0,0,0.2)]'} !rounded-[4px] md:!w-[48px] md:!h-[64px]`}
                            index={1}
                        />
                        <InputOTPSlot
                            className={`!border ${otpError ? '!border-red-500' : '!border-[rgba(0,0,0,0.2)]'} !rounded-[4px] md:!w-[48px] md:!h-[64px]`}
                            index={2}
                        />
                        <InputOTPSlot
                            className={`!border ${otpError ? '!border-red-500' : '!border-[rgba(0,0,0,0.2)]'} !rounded-[4px] md:!w-[48px] md:!h-[64px]`}
                            index={3}
                        />
                        <InputOTPSlot
                            className={`!border ${otpError ? '!border-red-500' : '!border-[rgba(0,0,0,0.2)]'} !rounded-[4px] md:!w-[48px] md:!h-[64px]`}
                            index={4}
                        />
                    </InputOTPGroup>
                </InputOTP>

                <button
                    type="submit"
                    className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
                >
                    <Image src={plus} alt="plus icon" />
                    Confirm code
                </button>
            </form>
        </div>
    )
}

export default VerifyPhone
