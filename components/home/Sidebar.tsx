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


export function Sidebar() {

    return (
        <div className="w-full" >
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
                            <X className="h-5 w-5 rotate-0 scale-100" />
                        </div>
                    </DrawerTrigger>
                    <Accordion type="single" collapsible className="w-full ">
                        <AccordionItem value="item-1" className="my-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger>Products</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger>Developers</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="mb-[24px] px-[24px] !border-b-2 border-[#e3dcdc]">
                            <AccordionTrigger>Company</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </DrawerContent>
            </Drawer>
        </div>

    )
}
