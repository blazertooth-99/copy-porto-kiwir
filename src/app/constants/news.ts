import Newsimg from "../assets/news1.jpg"
import Image, { StaticImageData } from 'next/image'

export interface NewsArticle {
    id: number;
    date: string;
    readTime: string;
    title: string;
    categories: string[];
    image: StaticImageData;
  }
export const newsArticle: NewsArticle[] = [

    {
        id: 1,
        date: '20 Agustus 2024',
        readTime: '4 menit baca',
        title: 'Hasil Laut Indonesia Terus Diperkuat Digitalisasi',
        categories: ["Teknologi", "Begal", "Polisi sampah"],
        image: Newsimg,
    },
    {
        id: 2,
        date: '14 Agustus 2024',
        readTime: '3 menit baca',
        title: 'Agree Perluas Pasar Kopi Indonesia sampai ke Belanda',
        categories: ["Teknologi Apa", "kiwir", "Polisi sampah"],
        image: Newsimg,
    },
    {
        id: 3,
        date: '05 Agustus 2024',
        readTime: '3 menit baca',
        title: 'Kerja Sama Strategis Telkom dan Scaia Jepang Dorong Inovasi Pertanian Demi Keberlanjutan',
        categories: ["Teknologi", "Begal", "Polisi Baik"],
        image: Newsimg,
    },
    {
        id: 4,
        date: '15 Juli 2024',
        readTime: '4 menit baca',
        title: 'Budi Daya Petani Serai Wangi Lebih Efisien Berkat Teknologi IoT dari Agree',
        categories: ["Ini tag", "Begal", "Polisi sampah"],
        image: Newsimg,
    },
];