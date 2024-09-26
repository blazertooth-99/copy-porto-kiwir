"use client"

import Image from "next/image";
import imgnews from "../assets/news-1.jpg"
import { NEWS } from "../constants/data"

const News= () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <h1> NEWS </h1>
            </div> 
        </div>

        <div className="container mx-auto px-4 py-8">
      <header className="flex items-center mb-8">
        <div className="w-8 h-8 mr-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Terbaru</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-video md:aspect-auto md:h-[400px] overflow-hidden rounded-lg">
          <Image
            src={imgnews}
            alt="Featured article image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm mb-2">20 Agustus 2024 • 4 menit baca</p>
            <h2 className="text-white text-xl font-bold">Hasil Laut Indonesia Terus Diperkuat Digitalisasi</h2>
          </div>
        </div>
        <div className="space-y-6">
          {NEWS.map((article, index) => (
            <div key={index} className="flex space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={article.image}
                  alt={`Article ${index + 1} image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-gray-500 mb-1">{article.date} • {article.readTime}</p>
                <h3 className="text-lg font-semibold leading-snug">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </main>
    )
}
export default News;