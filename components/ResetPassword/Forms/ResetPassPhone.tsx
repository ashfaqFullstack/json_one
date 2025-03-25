"use client"
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { phone } from '@/data/constatns';
import Link from 'next/link';
import plus from '@/data/plus.svg'
import logojson from '@/data/logojson.svg'
import Chevron from '@/data/chevron_down.svg'
import style from '../../Signup/form.module.css'
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';

type FormInputs = {
    phoneCode: string;
    phoneNumber: string;
}

const ResetPassPhone = () => {
    const router = useRouter();
    const [selectedPhoneCode, setSelectedPhoneCode] = useState("+254");
    const [resetError, setResetError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>({
        defaultValues: {
            phoneCode: selectedPhoneCode
        }
    });

    const handlePhoneCodeChange = (code: string) => {
        setSelectedPhoneCode(code);
    };

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // Dummy routing test condition for frontend 
        if (data.phoneNumber) {
            setResetError(null);
            router.push('/signin/resetpassword/phone/OTP');
        }
        setResetError("The account associated with that phone number was not found");


    }

    return (
        <div className='mx-[40px]'>
            <div className='flex gap-[10px]'>
                <Image src={logojson} alt="Jsonone" />
            </div>
            <div className='text-[28px] font-semibold text-[black] mt-[64px]'>Reset password</div>
            <div className='text-[14px] font-normal mt-[9px] text-[#00000099]'>
                Enter your phone number, and we'll send you a code to reset your password.
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Error Message */}
                {errors.phoneNumber && (
                    <div className="mt-4  text-red-500 rounded">
                        {/* {resetError} */}
                        The account associated with that phone number was not found
                    </div>
                )}

                {/* Phone Number Input */}
                <div className="flex mt-[16px] gap-6">
                    <div className="flex justify-center gap-[16px] px-[16px] py-[12px] border border-[#666666] rounded-[4px]">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center gap-[8px] px-3 cursor-pointer">
                                    <div className="text-[14px] font-normal text-[black]">{selectedPhoneCode}</div>
                                    <Image src={Chevron} alt="chevron" />
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className={style.dropdown} align="start">
                                {phone.map((page) => (
                                    <DropdownMenuItem
                                        key={page.code}
                                        onClick={() => handlePhoneCodeChange(page.dial_code)}
                                    >
                                        <div>{page.name}</div>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <input
                            type="hidden"
                            {...register("phoneCode")}
                        />
                    </div>
                    <div className={`border ${errors.phoneNumber ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] w-full`}>
                        <input
                            type="text"
                            className="outline-none text-[black] w-full"
                            placeholder="Phone Number"
                            {...register("phoneNumber", {
                                required: true,
                            })}
                        />
                    </div>
                </div>


                <Link href='/signin/resetpassword/email'>
                    <div className='text-[14px] font-medium mt-[16px]'>
                        Use email instead
                    </div>
                </Link>

                <button
                    type="submit"
                    className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
                >
                    <Image src={plus} alt="plus icon" />
                    Send OTP
                </button>
            </form>
        </div>
    )
}

export default ResetPassPhone
