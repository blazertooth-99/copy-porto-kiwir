"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";
import { List, ListItem } from "@mui/material";
import logoCS from "../../assets/logoCS.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BurgerMenu from "./burgermenu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DarkMode from "./dark-mode-switcher";

const components = [
  {
    title: "Change Language",
    href: "",
    description: "Indonesia",
  },
  {
    title: "Change Language",
    href: "",
    description: "Inggris",
  },
];

const Navbar = (props: any) => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/30 backdrop-blur-md shadow-sm dark:bg-neutral-800/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                {...props}
                src={logoCS}
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
                  <NavigationMenuTrigger className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white-100/30 backdrop-blur-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-600/80 border border-white/20">
                    <span className="text-md">ID</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-10 bg-white/20"></div>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[100px] md:grid-cols-1 lg:w-[200px]">
                      {components.map((component) => (
                        <ListItem
                          {...props}
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          className=" bg-white/30 backdrop-blur-md dark:bg-neutral-800/30"
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </nav>
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
  );
};
export default Navbar;
