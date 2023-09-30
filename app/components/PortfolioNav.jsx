'use client'

import { useAppContext } from '../context/state';

export default function PortfolioNav() {

  const { portfolioData, handlePortfolio } = useAppContext();

  return (
    <div>
      <nav className='portfolio-nav relative max-w-fit mx-auto'>
        <ul className="flex text-[14px] overflow-x-auto my-0 mx-auto px-[20px] font-semibold bg-black-box rounded-[50px] shadow-[0_0_10px_0_rgba(255,255,255,0.1)]">
          <li onClick={() => handlePortfolio('All')} className={`${portfolioData === 'All' && 'bg-green text-dark-grey hover:!text-dark-grey'} px-[25px] py-[10px] rounded-[50px] transition-colors duration-300 cursor-pointer leading-normal hover:text-green select-none`}>All</li>
          <li onClick={() => handlePortfolio('Brand')} className={`${portfolioData === 'Brand' && 'bg-green text-dark-grey hover:!text-dark-grey'} px-[25px] py-[10px] rounded-[50px] transition-colors duration-300 cursor-pointer leading-normal hover:text-green select-none`}>Brand</li>
          <li onClick={() => handlePortfolio('Design')} className={`${portfolioData === 'Design' && 'bg-green text-dark-grey hover:!text-dark-grey'} px-[25px] py-[10px] rounded-[50px] transition-colors duration-300 cursor-pointer leading-normal hover:text-green select-none`}>Design</li>
          <li onClick={() => handlePortfolio('Graphic')} className={`${portfolioData === 'Graphic' && 'bg-green text-dark-grey hover:!text-dark-grey'} px-[25px] py-[10px] rounded-[50px] transition-colors duration-300 cursor-pointer leading-normal hover:text-green select-none`}>Graphic</li>
        </ul>
      </nav>
    </div>
  )
}
