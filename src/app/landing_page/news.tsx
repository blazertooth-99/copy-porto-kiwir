"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsArticle, NewsArticle } from "../constants/news";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function NewsCarousel() {
  return (
    <div className="w-full max-w-max mx-auto px-24 py-8">
      <h1 className="text-4xl font-bold mb-4">
        Info Berita dan Kegiatan Terkini
      </h1>
      <div className="text-orange-950 mb-6 flex items-center">
        <span>Selengkapnya di Berita & Kegiatan</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>

      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {newsArticle.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col justify-center w-full h-[450px] p-2">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="w-full h-80 md:h-3/4 object-cover rounded-md"
                    />
                    <h6 className="mx-2 font-semibold text-left text-base lg:text-sm">
                      {article.title}
                    </h6>
                    <span className="mt-1 mb-2 mx-2 text-xs">
                      {article.date}
                      <span className="mx-2 text-sm">•</span>
                      <span className="text-xs">
                        {article.readTime}</span>
                    </span>
                    <div className="flex space-x-1 mb-4 mx-2">
                      {article.categories.map((categories, index) => (
                        <span
                          key={index}
                          className="bg-orange-950 px-2 py-1 text-white text-xs rounded"
                        >
                          {categories}
                        </span>
                      ))}
                    </div>
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
}
