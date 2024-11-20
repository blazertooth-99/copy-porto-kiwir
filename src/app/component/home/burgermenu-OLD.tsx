import { Button } from "@/components/ui/button"
import React, { useState, useRef, useEffect } from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Link from "next/link"
import { gsap } from 'gsap'



const BurgerMenu = () => {

  return (
    <div className="fixed grid z-50 place-items-end right-0 top-0 text-center">
      <div className="mx-auto w-full max-w-sm space-y-4">
        
        <div className="flex border border-gray-200 rounded-full shadow-sm dark:border-blue-800">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full items-center justify-center">
                <MenuIcon className="scale-125 w-6 h-6 block" /> 
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  prefetch={false}
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  prefetch={false}
                >
                  Item 2
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  prefetch={false}
                >
                  Item 3
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin slice" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


// function XIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
export default BurgerMenu;