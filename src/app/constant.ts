import Image, { StaticImageData } from 'next/image'
import Img1 from './assets/slides/content.jpg'

export interface ParallaxContent {
    id: number;
    title: string;
    image: StaticImageData;
  }
export const parallaxContent: ParallaxContent[] = [

    {
        id: 1,
        title: 'Image Parallax',
        image: Img1,
    },
    {
        id: 2,
        title: 'Image Parallax',
        image: Img1,
    },
    {
        id: 3,
        title: 'Image Parallax',
        image: Img1,
    },
    {
        id: 4,
        title: 'Image Parallax',
        image: Img1,
    },
    {
        id: 5,
        title: 'Image Parallax',
        image: Img1,
    },
];