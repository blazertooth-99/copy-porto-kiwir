"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import * as React from "react"
import { List, ListItem } from "@mui/material";
import logo from "../../assets/logo.png"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BurgerMenu from "./burgermenu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LogOut } from "lucide-react";
import DarkMode from "./dark-mode-switcher";

const components = [{
  title: "Change Language",
  href: "",
  description: "Indonesia",
},
{
  title: "Change Language",
  href: "",
  description: "Inggris",
},]

const Navbar = (props: any) => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/30 backdrop-blur-md shadow-sm dark:bg-neutral-800/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                {...props}
                src={logo}
                x="20%"
                y="20%"
                width="100"
                height="50"
                viewBox="0 0 50 100"
              />

            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                href="/landing_page/business"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Business
              </Link>
              <Link
                href="/landing_page/career"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Career
              </Link>
              <Link
                href="/landing_page/news"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                News
              </Link>
              <Link
                href="/landing_page/about"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/landing_page/contact"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>

              <NavigationMenu>
                <NavigationMenuItem className="list-none">
                  <NavigationMenuTrigger>
                    ID
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[100px] md:grid-cols-1 lg:w-[200px] ">
                      {components.map((component) => (
                        <ListItem
                          {...props}
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </nav>
            <div className="flex items-center gap-2">
              <div className="relative w-full max-w-sm">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-gray-100 px-2 py-2 text-orange-950 hover:bg-gray-200">
                Sign in
              </Button>
              <Button size="sm" className="bg-orange-900 px-2 py-2 text-white hover:bg-orange-950">
                Sign up
              </Button>
            </div>
            <div className="visible md:invisible">
              <BurgerMenu />
            </div>
            <div className="flex items-center w-fit h-fit">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;
