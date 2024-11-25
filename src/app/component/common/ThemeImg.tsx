"use client";
import Image from "next/image"
import LightBg from "../../assets/background/light-theme-footer.webp"
import DarkBg from "../../assets/background/dark-theme-footer.webp"

const MyImage = () => {
    return (
      <picture>
        <source srcSet={DarkBg.src} media="(prefers-color-scheme: dark)" />
        <Image
            src={LightBg}
            alt="My image"
            width={300}
            height={300}
        />
      </picture>
  );
};

export default MyImage;