import Image from "next/image"
// import FooterBg2 from "../../assets/FooterBg2.png"
import Contact from "../../public/Contact"
import ThemeImg from "../common/ThemeImg"
import LightBg from "../../assets/background/light-theme-footer2.webp"
import DarkBg from "../../assets/background/dark-theme-footer.webp"

export default function Component() {
  return (
    <div className="relative w-full h-5/6 pt-80 bg-cover overflow-hidden items-stretch bg-custom-blue dark:bg-slate-800">
      <Image 
        src={DarkBg}
        alt="Background Footer Dark Theme"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw"
        loading="lazy"
        className="object-cover w-full h-full hidden dark:block"
      />
      <Image 
        src={LightBg}
        alt="Background Footer Light Theme"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw"
        className="object-cover w-full h-full block dark:hidden"
        placeholder="blur"
        priority
      />
      <Contact />
    </div>
  )
}