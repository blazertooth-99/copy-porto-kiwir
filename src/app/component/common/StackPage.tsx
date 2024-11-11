'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Card, CardContent } from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import Banner from '../../assets/Banner.jpeg'

type CardData = {
  id: number
  image: StaticImageData
  alt: string
  description: string
}

const cardData: CardData[] = [
  {
    id: 1,
    image: Banner,
    alt: 'A scenic landscape',
    description: 'A beautiful landscape with mountains and a lake. The serene view captures the essence of nature\'s beauty.'
  },
  {
    id: 2,
    image: Banner,
    alt: 'A colorful abstract pattern',
    description: 'An vibrant abstract pattern with swirling colors. The dynamic composition creates a sense of movement and energy.'
  },
]

const StackPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray<HTMLDivElement>('.card-container')
    
    cards.forEach((card, index) => {
      gsap.set(card, {
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      })

      const handleClick = () => {
        setFlippedCards((prevFlippedCards) => {
          const newFlippedCards = new Set(prevFlippedCards)
          if (newFlippedCards.has(index)) {
            newFlippedCards.delete(index)
          } else {
            newFlippedCards.add(index)
          }
          gsap.to(card, {
            rotationY: newFlippedCards.has(index) ? 180 : 0,
            duration: 0.6,
            ease: 'power2.inOut'
          })
          return newFlippedCards
        })
      }

      card.addEventListener('click', handleClick)
      return () => card.removeEventListener('click', handleClick)
    })
  }, [flippedCards])

  return (
    <div className="relative min-h-screen mt-auto bg-neutral-700 p-8" ref={containerRef}>
      <div className="flex flex-wrap gap-4 justify-center">
        {cardData.map((card, index) => (
          <Card 
            key={card.id} 
            className="card-container w-64 h-[400px] relative cursor-pointer"
            tabIndex={0}
            role="button"
            aria-pressed={flippedCards.has(index)}
            aria-label={`Card ${card.id}: ${card.alt}. Click to flip.`}
          >
            <div className="card-inner w-full h-full transition-transform duration-600 transform-style-3d">
              <CardContent className="card-front absolute w-full h-full backface-hidden overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="card-back w-full h-full backface-hidden p-4 flex items-center justify-center transform rotate-y-180">
                <p className="text-center text-gray-800">{card.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default StackPage;
