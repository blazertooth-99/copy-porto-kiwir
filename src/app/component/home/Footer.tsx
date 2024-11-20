import Image from "next/image"
import FooterBg2 from "../../assets/FooterBg2.png"
import Contact from "../../public/Contact"

export default function Component() {
  return (
    <footer className="relative w-full h-screen bg-cover overflow-hidden items-stretch">
      <Image 
        src={FooterBg2}
        alt="Descriptive text for screen readers"
        fill
        className="object-cover w-full"
        priority
      
      />
      <Contact />
    </footer>
  )
}