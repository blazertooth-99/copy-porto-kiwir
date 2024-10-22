
import Img1 from '../app/assets/sample.webp'
import Img2 from '../app/assets/slides/content.jpg'
import Img3 from '../app/assets/news1.jpg'
import Img4 from '../app/assets/sample2.webp'
import Image, { StaticImageData } from 'next/image'

export interface ParallaxContent{
    id: number;
    title: string;
    image: StaticImageData;
  }
export const parallaxContent: ParallaxContent[] = [

    {
        id: 1,
        title: 'Image Parallax 1',
        image: Img2,
    },
    {
        id: 2,
        title: 'Image Parallax 2',
        image: Img1,
    },
    {
        id: 3,
        title: 'Image Parallax 3',
        image: Img3,
    },
    {
        id: 4,
        title: 'Image Parallax 4',
        image: Img4,
    },
];