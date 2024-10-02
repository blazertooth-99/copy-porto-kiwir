import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.png'
import { Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react'

export default function Component() {
  return (
    <footer className="bg-white text-gray-600 pt-5 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
          <div className="col-span-1">
            <Image src={logo} alt="Agree Logo" width={120} height={40} className="mb-4" />
            <p className="text-sm mb-2">Telkom STO Kebayoran</p>
            <p className="text-sm mb-2">Jl. Sisingamangaraja No.4 RT.2/RW.1, Selong, Kebayoran</p>
            <p className="text-sm mb-4">Baru, Kota Jakarta Selatan, DKI Jakarta 12110.</p>
            <p className="text-sm mb-1">Telepon: +62-811-1953-323</p>
            <p className="text-sm">Email: hello@agreeculture.id</p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Skala Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center">
                  <Image src="/placeholder.svg" alt="Farm Icon" width={24} height={24} className="mr-2" />
                  <span>agree farm management</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center">
                  <Image src="/placeholder.svg" alt="Marketplace Icon" width={24} height={24} className="mr-2" />
                  <span>agree marketplace</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center">
                  <Image src="/placeholder.svg" alt="Traceability Icon" width={24} height={24} className="mr-2" />
                  <span>agree traceability</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Skala Perorangan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center">
                  <Image src="/placeholder.svg" alt="Community Icon" width={24} height={24} className="mr-2" />
                  <span>agree community development</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Agree</h3>
            <ul className="space-y-2">
              <li><Link href="#">Tentang Kami</Link></li>
              <li><Link href="#">Berita dan Kegiatan Agree</Link></li>
              <li><Link href="#">Syarat & Ketentuan</Link></li>
              <li><Link href="#">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 pb-4">
            <Link href="#" className="text-green-600 hover:text-green-800">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-green-600 hover:text-green-800">
              <Mail size={24} />
            </Link>
            <Link href="#" className="text-green-600 hover:text-green-800">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-green-600 hover:text-green-800">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-green-600 hover:text-green-800">
              <Youtube size={24} />
            </Link>
          </div>
          </div>
          </div>
          <div className="flex flex-cols bg-green-800 w-auto md:max-w-full h-auto mx-auto items-center justify-center py-5 px-0 mx-0">
          <p className="text-sm text-white text-center">
            © Agree 2024 - Agree adalah merek milik PT Telekomunikasi Indonesia, Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.
          </p>
          </div>
    </footer>
  )
}