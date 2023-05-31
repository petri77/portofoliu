'use client'

import { useAppContext } from '../context/state';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function MenuBtn() {

  const { isNavOpen, toggleNav } = useAppContext();

  return (
    <button onClick={toggleNav} className="flex items-center justify-center w-[50px] h-full ml-auto">
      { isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} /> }
    </button>
  )
}