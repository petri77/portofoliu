import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className='social-media flex flex-col fixed w-[40px] bottom-[10px] right-[10px] z-20 sm:bottom-auto sm:right-[20px] sm:top-[70px] md:top-[20px]'>
      <Link className='aspect-square flex items-center justify-center' href="#"><FaFacebook /></Link>
      <Link className='aspect-square flex items-center justify-center' href="https://www.instagram.com/moldovanpetri"><FaInstagram /></Link>
      <Link className='aspect-square flex items-center justify-center' href="#"><FaTwitter /></Link>
      <Link className='hidden aspect-square items-center justify-center sm:flex' href="#"><FaYoutube /></Link>
    </div>
  )
}
