"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import Banner from "../assets/project/Banner.jpeg";

type Cards = {
  title: string;
  description: string;
  image: StaticImageData;
};

const cards: Cards[] = [
  {
    title: "Retirees",
    description: "Mortis mortis engorgio incendio momentum.",
    image: Banner,
  },
  {
    title: "Entrepreneurs",
    description: "Mortis mortis engorgio incendio momentum.",
    image: Banner,
  },
  {
    title: "Professionals",
    description: "Mortis mortis engorgio incendio momentum.",
    image: Banner,
  },
  {
    title: "Business Owners",
    description: "Mortis mortis engorgio incendio momentum.",
    image: Banner,
  },
];

const MyProject = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const infoWrapper = card.querySelector(
          ".card-info-wrapper"
        ) as HTMLElement;
        const info = card.querySelector(".card-info") as HTMLElement;
        const desc = card.querySelector(".card-desc") as HTMLElement;
        const action = card.querySelector(".card-action") as HTMLElement;

        gsap.set(infoWrapper, {
          yPercent: 80,
          y: 0,
        });

        let Animation = gsap.timeline();
        card.addEventListener("mouseover" || "touchstart", () => {
          Animation.kill();
          Animation = gsap
            .timeline()
            .to(infoWrapper, { duration: 0.3, yPercent: 0 })
            .to(info, { duration: 0.1, top: "50%", yPercent: -50 }, "-=0.3")
            .to(desc, { duration: 0.3, opacity: 1 }, "-=0.15")
            .to(action, { duration: 0.3, opacity: 1 }, "-=0.3");
        });
        card.addEventListener("mouseleave" || "touchend", () => {
          Animation.kill();
          Animation = gsap
            .timeline()
            .to(action, { duration: 0.1, opacity: 0 })
            .to(desc, { duration: 0.1, opacity: 0 }, ">-=0.1")
            .to(infoWrapper, { duration: 0.3, yPercent: 80 })
            .set(info, { top: 0, yPercent: 0 }, ">-=0.3");
        });

        // Touch event listeners for mobile devices
        // card.addEventListener("touchstart", () => {
        //   Animation.kill();
        //   Animation = gsap
        //     .timeline()
        //     .to(infoWrapper, { duration: 0.3, yPercent: 0 })
        //     .to(info, { duration: 0.1, top: "50%", yPercent: -50 }, "-=0.3")
        //     .to(desc, { duration: 0.3, opacity: 1 }, "-=0.15")
        //     .to(action, { duration: 0.3, opacity: 1 }, "-=0.3");
        // });
        // card.addEventListener("touchend", () =>  {
        //   Animation.kill();
        //   Animation = gsap
        //     .timeline()
        //     .to(action, { duration: 0.1, opacity: 0 })
        //     .to(desc, { duration: 0.1, opacity: 0 }, ">-=0.1")
        //     .to(infoWrapper, { duration: 0.3, yPercent: 80 })
        //     .set(info, { top: 0, yPercent: 0 }, ">-=0.3");
        // });

      }
    });
  }, []);

  return (
    <div id="PROJECT" className="py-12">
     <div className="flex items-center justify-center mx-auto">
        <h1 className="text-4xl  font-bold">Work Project</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="my-project-card relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="card-image absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#24342A] mix-blend-color z-10"></div>
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="filter grayscale"
              />
            </div>
            <div className="card-info-wrapper absolute inset-0 transform translate-y-3/4 bg-opacity-92 bg-[#24342A] z-20 p-4 text-white text-center overflow-hidden">
              <div className="card-info absolute flex flex-col justify-end pb-4">
                <h3 className="card-title font-sans font-semibold text-2xl py-4">
                  {card.title}
                </h3>
                <p className="card-desc font-sans text-base leading-snug mt-4 opacity-0">
                  {card.description}
                </p>
                <div className="card-action mt-4 opacity-0">
                  <a
                    href="#"
                    className="inline-block font-sans border border-white rounded-lg px-6 py-4 text-white no-underline hover:bg-white hover:text-[#24342A] transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyProject;
