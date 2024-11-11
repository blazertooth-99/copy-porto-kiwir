'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const carouselItems = [
  {
    id: 'our-work-1',
    step: 1,
    title: 'About Singkat',
    text: ['Register on the bSuite app.', 'Get trained in our billboard academy.']
  },
  {
    id: 'our-work-2',
    step: 2,
    title: 'Education',
    text: ['It could be anyone who needs their business to become famous.']
  },
  {
    id: 'our-work-3',
    step: 3,
    title: 'Passion',
    text: ['It may be a key location close to their business, or a location that will expose them to new audiences. The possibilities are endless.']
  },
//   {
//     id: 'our-work-4',
//     step: 4,
//     title: 'Confirm the sale',
//     text: ['Sign the contract and send the payment.']
//   },
//   {
//     id: 'our-work-5',
//     step: 5,
//     title: 'Send the artwork to the platform',
//     text: []
//   },
//   {
//     id: 'our-work-6',
//     step: 6,
//     title: 'Receive your commissions and enjoy life!',
//     text: []
//   }
]

export default function Carousel() {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const slider = sliderRef.current
    const navItems = gsap.utils.toArray('.carousel__nav__item', navRef.current)
    const slides = gsap.utils.toArray('.carousel__item', slider)

    const tl = gsap.timeline()

    const myST = ScrollTrigger.create({
      animation: tl,
      trigger: section,
      start: 'top top',
      end: '+=500%',
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / (slides.length - 1)
      }
    })

    gsap.set(slides, { yPercent: 125, scale: 0.5, opacity: 0 })

    navItems.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.preventDefault()
        const percent = tl.labels[e.target.getAttribute('data-target')] / tl.totalDuration()
        const scrollPos = myST.start + (myST.end - myST.start) * percent
        gsap.to(window, { duration: 2, scrollTo: scrollPos })
      })

      const previousItem = navItems[i - 1]
      if (previousItem) {
        tl.to(item, { background: '#ed3c3c', boxShadow: '0 0 16px #ed3c3c' }, 0.5 * (i - 1))
          .to(
            slides[i],
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
            },
            '<'
          )
          .to(previousItem, { backgroundColor: '#424b58', boxShadow: '0 0 16px transparent' }, '<')
          .to(
            slides[i - 1],
            {
              opacity: 0,
              yPercent: -100,
              scale: 1,
            },
            '<'
          )
          .add(`our-work-${i + 1}`)
      } else {
        gsap.set(item, { background: '#ed3c3c', boxShadow: '0 0 16px #ed3c3c' })
        tl.to(slides[i], {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0,
        }, 0)
        tl.add(`our-work-${i + 1}`, '+=0.5')
      }
    })

    return () => {
      myST.kill()
    }
  }, [])

  return (
    <>
      <div ref={sectionRef} className="relative h-[400vh] mb-10 scroll-pb-3.5 bottom-0 overflow-hidden w-screen bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#bc2789] to-[#f85956] bg-clip-text text-transparent inline-flex">How does it</h1>
            </div>
            <div className="w-full md:w-2/3 slider relative">
              <div ref={sliderRef} className="carousel__slider relative w-full min-h-[440px]">
                {carouselItems.map((item) => (
                  <div key={item.id} id={item.id} className="carousel__item absolute top-0 w-full min-h-[440px] p-12 text-white bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl">
                    <div className="blurred-box__step">{item.step}</div>
                    <h2 className="blurred-box__title text-2xl font-bold mb-4">{item.title}</h2>
                    <div className="blurred-box__footer">
                      <span className="blurred-box__footer-line block w-16 h-0.5 bg-white mb-4"></span>
                      {item.text.map((text, index) => (
                        <p key={index} className="blurred-box__text mb-2">{text}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <ul ref={navRef} className="carousel__nav flex flex-col gap-4 absolute right-0 top-1/2 transform -translate-y-1/2">
                {carouselItems.map((item) => (
                  <li key={item.id} className="carousel__nav__item w-2.5 h-2.5 bg-[#424b58] border border-white border-opacity-20 rounded-full cursor-pointer" data-target={item.id}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}