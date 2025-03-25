import { Menu, X } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";
import Logo from '@/data/JsononeLogo.svg'
import Link from "next/link";
import style from './navbar.module.css'


export function Sidebar() {

    return (
        <div className="w-full !text-[black]" >
            <Drawer direction="right"  >
                <DrawerTrigger asChild>
                    <Menu className="h-5 w-5 rotate-0 scale-100" />
                </DrawerTrigger>
                <DrawerContent className="!bg-[white] py-[24px]" >
                    <DrawerTrigger className="mx-[24px]" asChild>
                        {/* <Menu className="h-5 w-5 rotate-0 scale-100" /> */}
                        <div className="flex items-center justify-between cursor-pointer" >
                            <Link href="/home" >
                                <Image src={Logo} alt="jsonone" className="mr-[10px] lg:mr-[35px]" />
                            </Link>
                            <X className="h-5 w-5 !text-[black] rotate-0 scale-100" />
                        </div>
                    </DrawerTrigger>
                    <Accordion type="single" collapsible className="w-full ">
                        <AccordionItem value="item-1" className=" my-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger className="!text-[black]" >Products</AccordionTrigger>
                            <AccordionContent className="!text-[black]"  >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger className="!text-[black]">Developers</AccordionTrigger>
                            <AccordionContent className="!text-[black]">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="mb-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger className="!text-[black]">Company</AccordionTrigger>
                            <AccordionContent className="!text-[black]">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="!mx-[24px] py-[16px]">
                        <Link href="/signin">
                            <button
                                className={`${style.gray_button} !mb-[16px] className="!text-[black]"  flex items-center justify-center !w-full !text-center !h-[40px] !rounded-[6px]`}
                            >
                                Login
                            </button>
                        </Link>
                        <Link href="/signup">
                            <div
                                className={`${style.button_dark} !h-[40px] flex items-center justify-center !w-full  !text-center `}
                            >
                                Sign Up
                            </div>
                        </Link>
                        {/* <ThemeToggle /> */}
                    </div>
                </DrawerContent>
            </Drawer>
        </div>

    )
}
