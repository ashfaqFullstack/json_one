import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import Logo from '@/data/JsononeLogo.svg'
import Chevron from '@/data/chevron_down.svg'
import style from './navbar.module.css'
import { landings } from "@/data/constatns";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  return (
    <div className=" rounded-none !h-[64px] !bg-[#FAFAFA] !!text-[black] px-[20px] md:px-[15px] lg:px-[20px] border-0 flex flex-row items-center justify-between ">

      <div className="flex justify-center items-center" >
        <Link href="/home" >
          <Image src={Logo} alt="jsonone" className="mr-[10px] lg:mr-[35px]" />
        </Link>
        <ul className="hidden md:flex !text-[black] items-center gap-[15px] lg:gap-[24px] py-[17px] ">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex !text-[black] items-center gap-2 cursor-pointer" >
                  <span className="!text-[black]">Products</span>
                  <Image src={Chevron} alt="chevron" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                {landings.map((page) => (
                  <DropdownMenuItem className={`${style.dropdown} !text-[black]`} key={page.id}>
                    <Link href={page.route}>{page.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex !text-[black] items-center gap-2 cursor-pointer" >
                  <span className="!text-[black]">Developers</span>
                  <Image src={Chevron} alt="chevron" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                {landings.map((page) => (
                  <DropdownMenuItem className={`${style.dropdown} !text-[black]`} key={page.id}>
                    <Link href={page.route}>{page.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex !text-[black] items-center gap-2 cursor-pointer" >
                <span className="!text-[black]">Company</span>
                <Image src={Chevron} alt="chevron" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem className={`${style.dropdown} !text-[black]`} key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <li className="!text-[black]" >
            <a href="#docs">Docs</a>
          </li>

          <li className="!text-[black]" >
            <a href="#pricing">Pricing</a>
          </li>

        </ul>
      </div>

      <div className="hidden md:flex items-center py-[16px]">
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



        {/* <ThemeToggle /> */}
      </div>

      <div className="block md:hidden" >
        <Sidebar />
      </div>
    </div>
  );
};



export default Navbar;