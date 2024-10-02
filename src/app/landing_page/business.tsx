import Image from "next/image";
import tes from "../assets/Banner.jpeg";
import logoTes from "../assets/logo-tes.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Business = (props: any) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between pt-6">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1> BUSINESS </h1>
        </div>
      </div>
      <div className="p-0">
        <div className="grid grid-cols-1 grid-rows-[auto] md:grid-rows-[fit_1fr_auto] md:grid-cols-[25%_50%_25%] md:col-span-3 justify-center items-center gap-2 px-0 md:px-20">

          {/*START GRID VIEW BUSINESS 1 */}
          <div className="relative w-full h-full row-span-1 md:row-span-2 my-0 py-0">
            <div className="h-full bg-teal-700 text-white p-0 relative">
              <div className="p-0 mt-auto">
                <Image
                  src={tes}
                  alt="Business 1 background"
                  className="relative bottom-0 md:w-full w-full h-auto md:h-1/2"
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <Avatar className="mb-1 size-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-center">
                BUSINESS 1
              </h2>
              <p className="mb-4 px-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <div className="p-5 flex items-center justify-center">
                <button className="border border-white  rounded hover:bg-white hover:text-teal-700 transition-colors py-2 px-4">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* START GRID VIEW BUSINESS 2 */}
          <div className="h-full my-0 py-0 bg-sky-600 text-white">
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
              <div className="h-full right-0 object-right p-0 relative">
                <Image
                  src={tes}
                  alt="Business 2 background"
                  className="relative object-cover bottom-0 md:w-[80%] w-full h-auto md:h-full"
                />
              </div>
              <div className="col-span-1">
              <div className="flex items-center justify-center mt-4">
                <Avatar className="mb-1 size-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                BUSINESS 2
              </h2>
              <p className="mb-4 py-1 text-center">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className="p-5 flex items-center justify-center">
                <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          </div>
          {/* END GRID VIEW BUSINESS 2 */}

          {/* START GRID VIEW BUSINESS 3 */}
          <div className="relative w-full h-full row-span-1 md:row-span-2">
            <div className="object-right h-full bg-red-300 text-white p-0 relative">
              <div className="p-0 mt-auto">
                <Image
                  src={tes}
                  alt="Business 3 background"
                  className="relative bottom-0 md:w-full w-full h-auto md:h-1/2"
                />
              </div>

              <div className="flex items-center justify-center mt-4">
                <Avatar className="mb-1 size-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                BUSINESS 3
              </h2>
              <p className="mb-4 px-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <div className="p-5 flex items-center justify-center gap-4">
                <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-navy-700 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          {/* END GRID VIEW BUSINESS 3 */}

          {/* START GRID VIEW BUSINESS 4 */}
          <div className="h-full my-0 py-0 bg-green-300 text-white">
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
              <div className="h-full right-0 object-right p-0 relative">
                <Image
                  src={tes}
                  alt="Business 4 background"
                  className="relative object-cover left-0 bottom-0 md:w-[80%] w-full h-auto md:h-full"
                />
              </div>
              <div className="col-span-1 p-2">
              <div className="flex items-center justify-center mt-4">
                <Avatar className="mb-1 size-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                BUSINESS 4
              </h2>
              <p className="mb-4 py-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="p-5 flex items-center justify-center">
                <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors">
                  LEARN MORE
                </button>
                </div>
              </div>
            </div>
          </div>
          {/* END GRID VIEW BUSINESS 4 */}

          {/* START GRID VIEW BUSINESS 5 */}
          <div className="col-span-1 md:col-span-3 bg-green-600 text-white">
            <div className="w-full grid grid-cols-1 md:grid-cols-2" >
            <div className="h-full left-0 object-left-top p-0 relative">
              <Image
                src={tes}
                alt="Business 5 background"
                className="relative bottom-0 md:w-[80%] w-full h-full md:h-full"
              />
              </div>
              <div className="col-span-1" >
              <div className="relative z-10 items-center justify-center py-10">
                <Avatar className="mb-1 mr-2 size-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold mb-2">BUSINESS 5</h2>
                  <p className="mb-2 px-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="py-5 flex gap-4">
                  <button className="border border-white px-4 py-0 rounded hover:bg-white hover:text-green-600 transition-colors">
                    LEARN MORE
                  </button>
                  </div>
                </div>
                </div>
              </div>
              {/* END GRID VIEW BUSINESS 5 */}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Business;
