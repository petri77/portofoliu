'use client'

import React, { useState, useEffect } from 'react';

export default function Heading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 2400);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center gap-[15px] cursor-default">
      <h1 className="font-semibold leading-none text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] drop-shadow-lg">
        Petri<span className="text-green">77</span>
      </h1>
      {/* flipping words */}
      <div className="flex gap-[6px] text-[17px] font-normal sm:text-[20px] sm:gap-[8px] md:text-[25px] md:gap-[10px] lg:text-[30px] drop-shadow-lg">
        <span className='whitespace-nowrap'>I am a{' '}</span>
        <span className="words-flip-container w-[147px] sm:w-[171px] md:w-[210px] lg:w-[250px]">
          <b className={`${isVisible ? 'is-visible' : 'is-hidden'}`}>react developer</b>
          <b className={`${isVisible ? 'is-hidden' : 'is-visible'}`}>web designer</b>
        </span>
      </div>
    </div>
  );
}


