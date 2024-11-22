import Image from "next/image"
import FooterBg2 from "../../assets/FooterBg2.png"
import Contact from "../../public/Contact"

export default function Component() {
  return (
    <div className="relative w-full h-5/6 pt-80 bg-cover overflow-hidden items-stretch bg-custom-blue dark:bg-slate-800">
      {/* <Image 
        src={FooterBg2}
        alt="Descriptive text for screen readers"
        fill
        className="object-cover w-full h-full"
        priority
      
      /> */}
      <Contact />
    </div>
  )
}