// "use client"
// import eye from '@/data/eye.svg'
// import plus from '@/data/plus.svg'
// import Image from 'next/image'
// import { useForm, SubmitHandler } from "react-hook-form"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { phone, country } from "@/data/constatns";
// import Chevron from '@/data/chevron_down.svg'
// import style from '../form.module.css'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// // Form input types
// type FormInputs = {
//     firstName: string;
//     lastName: string;
//     country: string;
//     phoneCode: string;
//     phoneNumber: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

// const Signup = () => {
//     const [selectedCountry, setSelectedCountry] = useState("Country")
//     const [selectedPhoneCode, setSelectedPhoneCode] = useState("+254")
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const router = useRouter()

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm<FormInputs>({
//         defaultValues: {
//             country: selectedCountry,
//             phoneCode: selectedPhoneCode
//         }
//     });

//     const onSubmit: SubmitHandler<FormInputs> = (data) => {
//         router.push("/signup/verifyemail")
//         console.log(data);
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="md:flex w-full gap-4 lg:gap-[4px] md:pr-[16px] lg:pr-0 mt-[24px]">
//                 <div className={`border ${errors.firstName ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] md:w-[50%] py-[12px] px-[16px]`}>
//                     <input
//                         type="text"
//                         className="outline-none w-full"
//                         placeholder="First Name"
//                         {...register("firstName", { required: true })}
//                     />
//                 </div>
//                 <div className={`border ${errors.lastName ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] md:w-[50%] py-[12px] px-[16px] md:mt-0 mt-3`}>
//                     <input
//                         type="text"
//                         className="outline-none w-full"
//                         placeholder="Last Name"
//                         {...register("lastName", { required: true })}
//                     />
//                 </div>
//             </div>

//             {/* Country Dropdown */}
//             <div className={`flex justify-between px-[16px] mt-[16px] py-[12px] text-[black] border ${errors.country ? 'border-red-500' : 'border-[#666666]'}`}>
//                 <div>{selectedCountry}</div>
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <div className="flex items-center gap-2 cursor-pointer text-[black]">
//                             <Image src={Chevron} alt="chevron" className='w-[20px] h-[20px]' />
//                         </div>
//                     </DropdownMenuTrigger>

//                     <DropdownMenuContent className={style.dropdown} align="start">
//                         {country.map((page) => (
//                             <DropdownMenuItem key={page.id} onClick={() => setSelectedCountry(page.title)}>
//                                 <div>{page.title}</div>
//                             </DropdownMenuItem>
//                         ))}
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//                 <input
//                     type="hidden"
//                     value={selectedCountry}
//                     {...register("country")}
//                 />
//             </div>

//             {/* Phone Number */}
//             <div className="flex mt-[16px] gap-6">
//                 <div className="flex justify-center gap-[16px] px-[16px] py-[12px] border border-[#666666] rounded-[4px]">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <div className="flex items-center gap- cursor-pointer">
//                                 <div className="text-[14px] font-normal text-[black]">{selectedPhoneCode}</div>
//                                 <Image src={Chevron} alt="chevron" />
//                             </div>
//                         </DropdownMenuTrigger>

//                         <DropdownMenuContent className={style.dropdown} align="start">
//                             {phone.map((page) => (
//                                 <DropdownMenuItem key={page.id} onClick={() => setSelectedPhoneCode(page.title)}>
//                                     <div>{page.title}</div>
//                                 </DropdownMenuItem>
//                             ))}
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                     <input
//                         type="hidden"
//                         value={selectedPhoneCode}
//                         {...register("phoneCode")}
//                     />
//                 </div>
//                 <div className={`border ${errors.phoneNumber ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] w-full`}>
//                     <input
//                         type="text"
//                         className="outline-none text-[black] w-full"
//                         placeholder="Phone Number"
//                         {...register("phoneNumber", { required: true })}
//                     />
//                 </div>
//             </div>

//             <div className="text-[black] text-[12px] font-normal mt-[8px]">
//                 Make sure you enter the phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.
//             </div>

//             {/* Email */}
//             <div className="mt-[16px]">
//                 <div className={`border ${errors.email ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px]`}>
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         className="w-full outline-none"
//                         {...register("email", {
//                             required: true,
//                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//                         })}
//                     />
//                 </div>
//             </div>
//             <div className="mt-[8px] text-[12px] font-normal text-[black]">This will be your new Jsonone ID</div>

//             {/* Password */}
//             <div className={`flex justify-between border ${errors.password ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px]`}>
//                 <input
//                     type={passwordVisible ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full outline-none"
//                     {...register("password", {
//                         required: true,
//                         minLength: 8,
//                         pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
//                     })}
//                 />
//                 <Image onClick={() => setPasswordVisible(!passwordVisible)} src={eye} alt="show password" />
//             </div>

//             {/* Confirm Password */}
//             <div className={`flex justify-between border ${errors.confirmPassword ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[16px]`}>
//                 <input
//                     type={passwordVisible ? "text" : "password"}
//                     placeholder="Confirm Password"
//                     className="w-full outline-none"
//                     {...register("confirmPassword", {
//                         required: true,
//                         validate: value => value === watch('password') || "Passwords do not match"
//                     })}
//                 />
//                 <Image onClick={() => setPasswordVisible(!passwordVisible)} src={eye} alt="show password" />
//             </div>
//             <div className="text-[black] text-[12px] font-simibold mt-[8px]">
//                 At least 8 characters long, must contain numbers, uppercase and lowercase letters
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
//             >
//                 <Image src={plus} alt="plus icon" />
//                 Sign Up
//             </button>
//         </form>
//     )
// }

// export default Signup
"use client"
import eye from '@/data/eye.svg'
import plus from '@/data/plus.svg'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { phone, country } from "@/data/constatns";
import Chevron from '@/data/chevron_down.svg'
import style from '../form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Form input types
type FormInputs = {
    firstName: string;
    lastName: string;
    country: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {
    const [selectedCountry, setSelectedCountry] = useState("Country")
    const [selectedPhoneCode, setSelectedPhoneCode] = useState("+254")
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<FormInputs>({
        defaultValues: {
            country: selectedCountry,
            phoneCode: selectedPhoneCode
        }
    });

    // Update the form value when dropdown selection changes
    const handleCountryChange = (countryName: string) => {
        setSelectedCountry(countryName);
        setValue("country", countryName, { shouldValidate: true });
    };

    // Update the form value when phone code selection changes
    const handlePhoneCodeChange = (code: string) => {
        setSelectedPhoneCode(code);
        setValue("phoneCode", code, { shouldValidate: true });
    };

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        router.push("/signup/verifyemail")
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex w-full gap-4 lg:gap-[4px] md:pr-[16px] lg:pr-0 mt-[24px]">
                <div className={`border ${errors.firstName ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] md:w-[50%] py-[12px] px-[16px]`}>
                    <input
                        type="text"
                        className="outline-none w-full"
                        placeholder="First Name"
                        {...register("firstName", { required: true })}
                    />
                </div>
                <div className={`border ${errors.lastName ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] md:w-[50%] py-[12px] px-[16px] md:mt-0 mt-3`}>
                    <input
                        type="text"
                        className="outline-none w-full"
                        placeholder="Last Name"
                        {...register("lastName", { required: true })}
                    />
                </div>
            </div>

            {/* Country Dropdown */}
            <div className={`flex justify-between px-[16px] mt-[16px] py-[12px] text-[black] border ${errors.country ? 'border-red-500' : 'border-[#666666]'}`}>
                <div>{selectedCountry}</div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer text-[black]">
                            <Image src={Chevron} alt="chevron" className='w-[20px] h-[20px]' />
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className={style.dropdown} align="start">
                        {country.map((page) => (
                            <DropdownMenuItem key={page.id} onClick={() => handleCountryChange(page.title)}>
                                <div>{page.title}</div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <input
                    type="hidden"
                    {...register("country", {
                        required: true,
                        validate: value => value !== "Country" || "Please select a country"
                    })}
                />
            </div>

            {/* Phone Number */}
            <div className="flex mt-[16px] gap-6">
                <div className="flex justify-center gap-[16px] px-[16px] py-[12px] border border-[#666666] rounded-[4px]">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap- cursor-pointer">
                                <div className="text-[14px] font-normal text-[black]">{selectedPhoneCode}</div>
                                <Image src={Chevron} alt="chevron" />
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className={style.dropdown} align="start">
                            {phone.map((page) => (
                                <DropdownMenuItem key={page.id} onClick={() => handlePhoneCodeChange(page.title)}>
                                    <div>{page.title}</div>
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
                        {...register("phoneNumber", { required: true })}
                    />
                </div>
            </div>

            <div className="text-[black] text-[12px] font-normal mt-[8px]">
                Make sure you enter the phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.
            </div>

            {/* Email */}
            <div className="mt-[16px]">
                <div className={`border ${errors.email ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px]`}>
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
            </div>
            <div className="mt-[8px] text-[12px] font-normal text-[black]">This will be your new Jsonone ID</div>

            {/* Password */}
            <div className={`flex justify-between border ${errors.password ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px]`}>
                <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full outline-none"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
                    })}
                />
                <div onClick={() => setPasswordVisible(!passwordVisible)} className="cursor-pointer">
                    <Image src={eye} alt="show password" />
                </div>
            </div>

            {/* Confirm Password */}
            <div className={`flex justify-between border ${errors.confirmPassword ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] mt-[16px]`}>
                <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full outline-none"
                    {...register("confirmPassword", {
                        required: true,
                        validate: value => value === watch('password') || "Passwords do not match"
                    })}
                />
                <div onClick={() => setPasswordVisible(!passwordVisible)} className="cursor-pointer">
                    <Image src={eye} alt="show password" />
                </div>
            </div>
            <div className="text-[black] text-[12px] font-simibold mt-[8px]">
                At least 8 characters long, must contain numbers, uppercase and lowercase letters
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="!bg-[#000000] !text-[white] flex justify-center !rounded-[4px] !mt-[24px] !px-[24px] !py-[12px]"
            >
                <Image src={plus} alt="plus icon" />
                Sign Up
            </button>
        </form>
    )
}

export default Signup
