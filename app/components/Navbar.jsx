'use client'

import { useAppContext } from '../context/state';
import SoundBox from './SoundBox';
import Image from 'next/image';
import { FaHouseDamage, FaUserTie, FaAddressBook, FaBriefcase, FaReceipt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {

  const { isNavOpen, handleTargetPage, activeSection } = useAppContext();

  return (
    <aside className={`flex flex-col fixed top-0 left-[-90px] bottom-0 w-[90px] bg-dark-grey z-50 overflow-y-auto overflow-x-hidden transition-left duration-300 ${isNavOpen ? '!left-0' : ''} md:left-0 md:w-[10%] md:bg-dark-grey/60`}>
      {/* LOGO BOX */}
      <div className='py-[30px] border-b-[5px] border-dark-grey flex items-center justify-center md:py-[45px]'>
        <Image className='logo' src={"/images/logo.svg"} width={44} height={40} alt="Petri" priority />
      </div>
      {/* NAV BUTTONS */}
      <ul className={`flex-1 ${activeSection !== null && activeSection !== 'HOME' ? 'active' : ''}`}>
        <li onClick={() => handleTargetPage('HOME')} data-tooltip="HOME" className='navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300'><FaHouseDamage /></li>
        <li onClick={() => handleTargetPage('ABOUT')} data-tooltip="ABOUT" className={`navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300 ${activeSection === 'ABOUT' ? 'active' : ''}`}><FaUserTie /></li>
        <li onClick={() => handleTargetPage('RESUME')} data-tooltip="RESUME" className={`navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300 ${activeSection === 'RESUME' ? 'active' : ''}`}><FaAddressBook /></li>
        <li onClick={() => handleTargetPage('PROJECTS')} data-tooltip="PROJECTS" className={`navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300 ${activeSection === 'PROJECTS' ? 'active' : ''}`}><FaBriefcase /></li>
        <li onClick={() => handleTargetPage('BLOG')} data-tooltip="BLOG" className={`navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300 ${activeSection === 'BLOG' ? 'active' : ''}`}><FaReceipt /></li>
        <li onClick={() => handleTargetPage('CONTACT')} data-tooltip="CONTACT" data-position="bottom" className={`navlink my-[30px] flex justify-center text-white hover:text-green transition-colors duration-300 ${activeSection === 'CONTACT' ? 'active' : ''}`}><FaEnvelope /></li>
      </ul>
      {/* SOUND BOX */}
      <SoundBox />
    </aside>
  )
}