import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function notFound() {
  return (
    <div className="min-h-screen bg-custom-blue dark:bg-slate-800 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-gray-300 dark:text-gray-200">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-300 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-300">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        <div className="mt-8">
          <svg
            className="mx-auto h-32 w-32 text-gray-200 dark:text-gray-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="mt-8">
          <Link href="/">
            <Button
              variant="outline"
              className="relative px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-slate-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
            >
              <Home className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
