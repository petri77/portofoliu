import Link from 'next/link'

export default function SelectLanguage() {
  return (
    <ul className='flex fixed left-[20px] bottom-[20px] gap-[18px] z-20 text-[11px] tracking-[2px] sm:bottom-[30px] md:left-[calc(10%+20px)]'>
      <li><Link className='text-white border-b border-green hover:text-green transition-colors duration-300' href="#">ENG</Link></li>
      <li><Link className='text-[#a0a0a0] hover:text-green transition-colors duration-300' href="#">ESP</Link></li>
    </ul>
  )
}
