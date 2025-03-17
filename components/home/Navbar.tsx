import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
// import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
// import ShadcnKit from "@/components/icons/shadcn-kit";
import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/data/JsononeLogo.svg'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <div className=" rounded-none !h-[64px] bg-[#FAFAFA] px-[20px] border-0 flex flex-row items-center justify-between gap-6 ">
      {/* <ShadcnKit className="text-primary cursor-pointer" /> */}
      {/* <Image src={Logo} alt="jsonone" className="!block md:!hidden" /> */}
      <div className="flex justify-center items-center" >
        <Image src={Logo} alt="jsonone" className="mr-[47px]" />
        <ul className="hidden md:flex items-center gap-10 py-[17px] ">
          <li className="text-primary font-medium">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="cursor-pointer">Pages</span>
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
        </ul>
      </div>

      <div className="flex items-center py-[16px]">
        <div className={`${style.contact} hidden md:block`}>Contact</div>
        <Button variant="default"
          className={` ${style.gray_button} hidden md:block !h-[32px] !px-[12px]  !rounded-[6px] !mx-[10px]`}
        >
          Login
        </Button>
        <div
          className={`${style.button_dark} !h-[32px] hidden md:block`}
        >
          Sign Up
        </div>

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

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="#home">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#features">Features</a>
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
                <Button variant="default"
                  className={` ${style.gray_button}  !h-[32px] !px-[12px]  !rounded-[6px]`}
                >
                  Login
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div
                  className={`${style.button_dark} !h-[32px] `}
                >
                  Sign Up
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

const landings = [
  {
    id: nanoid(),
    title: "Landing 01",
    route: "/project-management",
  },
  {
    id: nanoid(),
    title: "Landing 02",
    route: "/crm-landing",
  },
  {
    id: nanoid(),
    title: "Landing 03",
    route: "/ai-content-landing",
  },
  {
    id: nanoid(),
    title: "Landing 04",
    route: "/new-intro-landing",
  },
  {
    id: nanoid(),
    title: "Landing 05",
    route: "/about-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 06",
    route: "/contact-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 07",
    route: "/faqs-landing",
  },
  {
    id: nanoid(),
    title: "Landing 08",
    route: "/pricing-landing",
  },
  {
    id: nanoid(),
    title: "Landing 09",
    route: "/career-landing",
  },
];

export default Navbar;