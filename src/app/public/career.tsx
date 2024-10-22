import { CAREER } from "../constants/career";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Career = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1> CAREER </h1>
        </div>
      </div>
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {CAREER.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <Image
                      src={article.img}
                      width={500}
                      height={500}
                      alt={article.review}
                    />
                    <h6 className="my-4 font-semibold">{article.name}</h6>
                    <Button asChild variant="outline">
                      <Link href="/career">More Info</Link>
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
    </main>
  );
};
export default Career;
