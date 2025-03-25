"use client"
import downerrow from '@/data/downerrow.svg'
import geo from '@/data/geo.svg'
import Image from 'next/image'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


function LanguageSelect() {
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const languages = [
        { code: "EN", name: "English" },
        { code: "ES", name: "Español" },
        { code: "FR", name: "Français" },
        { code: "DE", name: "Deutsch" },
        { code: "ZH", name: "中文" },
        { code: "JA", name: "日本語" },
        { code: "AR", name: "العربية" },
        { code: "RU", name: "Русский" }
    ];

    const handleLanguageChange = (langCode: string) => {
        setSelectedLanguage(langCode);
    };

    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src={geo} alt="language" />
                    <div>{selectedLanguage}</div>
                    <Image src={downerrow} alt="dropdown" />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='!bg-[white] !text-[black]' align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        <div className="flex items-center gap-2">
                            <span>{lang.code}</span>
                            <span className="text-sm text-gray-500">{lang.name}</span>
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default LanguageSelect
