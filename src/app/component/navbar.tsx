"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"; 
import * as React from "react"
import { List, ListItem } from "@mui/material";
import logo from "../assets/logo.png"
import { Input } from "@/components/ui/input"
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
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
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
          <div className="flex items-center gap-4">
          <Input 
            type="Search" 
            placeholder="Search" 
            className="max-h-11 max-w-30 rounded-3xl" 
          />
          </div>
          <div className="flex items-center justify-end">
          <svg 
            data-testid="geist-icon" 
            height="16" strokeLinejoin="round" 
            viewBox="0 0 16 16" width="16" 
            className="border-none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z" fill="currentColor">
            </path>
          </svg>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </nav>
    </header>
  )
}
export default Navbar;
