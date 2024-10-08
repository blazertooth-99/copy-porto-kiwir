"use client"

import { useState } from 'react'
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { newsArticle, NewsArticle } from '../constants/news'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsArticle.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsArticle.length) % newsArticle.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Info Berita dan Kegiatan Terkini</h1>
      <div className="text-green-500 mb-6 flex items-center">
        <span>Selengkapnya di Berita & Kegiatan</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>

      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {newsArticle.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className='"w-full h-64 object-cover'
                    />
                    <h6 className="my-4 font-semibold">{article.title}</h6>
                    <div className="flex space-x-2 mb-2">
                        {article.categories.map((categories, index) => (
                          <span key={index} className="bg-blue-400 text-black text-xs px-2 py-1 rounded">{categories}</span>
                        ))}
                      </div>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>

                    <Button asChild variant="outline">
                      <Link href="/news">More Info</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};