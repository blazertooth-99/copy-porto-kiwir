import Image from 'next/image';
import tes from "../assets/Banner.jpeg"

const Business = (props: any) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between pt-6">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
           <h1> BUSINESS </h1>
          </div>
      </div>

      {/* START GRID VIEW BUSINESS 1 */}
      <div className="justify-center p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-4 pt-6 justify-center">
        <div className=" bg-teal-700 text-white p-0 relative">
          <div className='flex right-0 p-0'>
          <Image
            src={tes}
            alt="Business 1 background"
            className="object-cover md:w-full w-full h-[30vh] md:h-full"
          />
          </div>
          <div className="relative z-10">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="House Industries Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 p-6">BUSINESS 1</h2>
            <p className="mb-4 px-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
            <div className='p-5'>
            <button className="border border-white py-2 rounded hover:bg-white hover:text-teal-700 transition-colors p-6">
              LEARN MORE
            </button>
            </div>
          </div>
        </div>
        {/* END GRID VIEW BUSINESS 1 */}


        <div className="md:row-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black text-white p-6 relative">
          <div className='left-0 absolute'>
            <Image
              src={tes}
              alt="Business 2 background"
              className="inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            </div>
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 2</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="md:row-span-2 grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="bg-red-300 text-white p-6 relative">
          <div className='bottom-0 left-0 absolute'>
            <Image
              src={tes}
              alt="Business 3 background"
              width={400}
              height={300}
              className="inset-0 min-w-1 w-full h-full object-cover"
            />
            </div>
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 3</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-navy-700 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
          </div>
          <div className="md:col-2 bg-white p-6 relative bg-blue-200">
            <Image
              src="/placeholder.svg?height=200&width=600"
              alt="Business 4 background"
              width={600}
              height={200}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="House Industries Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">BUSINESS 4</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 bg-green-600 text-white p-6 relative">
          <Image
          {...props}
            src="/placeholder.svg?height=200&width=1200"
            alt="Business 5 background"
            width={1200}
            height={200}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10 flex items-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="House Industries Logo"
              width={100}
              height={100}
              className="mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">BUSINESS 5</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-green-600 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};
export default Business;
