import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import Logo from '@/data/JsononeLogo.svg'
import Chevron from '@/data/chevron_down.svg'
import style from './navbar.module.css'
import { landings } from "@/data/constatns";

const Navbar = () => {
  return (
    <div className=" rounded-none !h-[64px] bg-[#FAFAFA] text-[black] px-[20px] md:px-[15px] lg:px-[20px] border-0 flex flex-row items-center justify-between ">

      <div className="flex justify-center items-center" >
        <Image src={Logo} alt="jsonone" className="mr-[10px] lg:mr-[35px]" />
        <ul className="hidden md:flex items-center gap-[15px] lg:gap-[24px] py-[17px] ">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" >
                  <span className="">Products</span>
                  <Image src={Chevron} alt="chevron" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                {landings.map((page) => (
                  <DropdownMenuItem key={page.id}>
                    <Link href={page.route}>{page.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" >
                  <span className="">Solution</span>
                  <Image src={Chevron} alt="chevron" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                {landings.map((page) => (
                  <DropdownMenuItem key={page.id}>
                    <Link href={page.route}>{page.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer" >
                <span className="">Resources</span>
                <Image src={Chevron} alt="chevron" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <li>
            <a href="#docs">Docs</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

        </ul>
      </div>

      <div className="flex items-center py-[16px]">
        <div className={`${style.contact} hidden md:block`}>Contact</div>
        <Link href="/signin">
          <Button variant="default"
            className={`${style.gray_button} hidden md:block !h-[32px] !px-[12px]  !rounded-[6px] !mx-[10px]`}
          >
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <div
            className={`${style.button_dark} !h-[32px] hidden md:block`}
          >
            Sign Up
          </div>
        </Link>

        <div className="flex md:hidden mr-2 items-center gap-2">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="py-2 px-2 bg-gray-100 rounded-md">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={`${style.dropdown} gap-2`} align="end">
              <DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer" >
                      <span className="">Products</span>
                      <Image src={Chevron} alt="chevron" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className={style.dropdown} align="start">
                    {landings.map((page) => (
                      <DropdownMenuItem key={page.id}>
                        <Link href={page.route}>{page.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer" >
                      <span className="">Solution</span>
                      <Image src={Chevron} alt="chevron" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className={style.dropdown} align="start">
                    {landings.map((page) => (
                      <DropdownMenuItem key={page.id}>
                        <Link href={page.route}>{page.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer" >
                      <span className="">Resources</span>
                      <Image src={Chevron} alt="chevron" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className={style.dropdown} align="start">
                    {landings.map((page) => (
                      <DropdownMenuItem key={page.id}>
                        <Link href={page.route}>{page.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#pricing">Pricing</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#faqs">FAQs</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className={`${style.contact} `}>Contact</div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signin">
                  <Button variant="default"
                    className={` ${style.gray_button}  !h-[32px] !px-[12px]  !rounded-[6px]`}
                  >
                    Login
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/signup' >
                  <div
                    className={`${style.button_dark} !h-[32px] `}
                  >
                    Sign Up
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};



export default Navbar;