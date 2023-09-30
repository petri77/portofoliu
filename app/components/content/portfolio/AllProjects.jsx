import Link                     from 'next/link';
import { FaEye }                from 'react-icons/fa';

export default function AllProjects() {

  return (
    <ul className="portfolio-data portfolio-grid-all w-full grid gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
      {/* 1 */}
      <li className='portfolio-project project-1 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[600/500]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Graphic</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 2 */}
      <li className='portfolio-project project-2 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[600/400]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Design</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 3 */}
      <li className='portfolio-project project-3 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[600/400]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Graphic</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 4 */}
      <li className='portfolio-project project-4 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[768/597]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Design</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 5 */}
      <li className='portfolio-project project-5 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[600/700]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Design</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 6 */}
      <li className='portfolio-project project-6 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[600/700]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Brand</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 7 */}
      <li className='portfolio-project project-7 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-[700/855]'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Brand</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 8 */}
      <li className='portfolio-project project-8 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-square'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Brand</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
      {/* 9 */}
      <li className='portfolio-project project-9 flex items-center justify-center bg-[#ccc] overflow-hidden rounded-[10px] aspect-square'>
        <Link href="#" className='relative w-full h-full flex items-center justify-center p-[30px] text-[#666]'>
          <h3 className='text-[22px] font-bold leading-none'>Graphic</h3>
          <div className='overlay absolute top-0 bottom-0 w-full flex items-center justify-center text-white transition-all duration-300'>
            <h4 className='text-[22px] font-bold leading-none'>Project Name</h4>
          </div>
          <div className="flex items-center justify-between absolute bottom-[14px] w-full text-[15px] text-white">
            <span className='slider-left px-[20px] leading-[24px]'>#Website</span>
            <span className='slider-right px-[20px]'><FaEye color='#fff' size={24} /></span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
