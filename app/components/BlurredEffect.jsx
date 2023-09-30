'use client'

import { useAppContext } from '../context/state';

export default function BlurredEffect() {
  const { visitedPagesCounter } = useAppContext();
  
  return (
    <div className={`fixed inset-0 ${visitedPagesCounter > 0 && 'backdrop-blur-[4px]'} z-[25] transition-all duration-500 ease-linear pointer-events-none`}></div>
  )
}
