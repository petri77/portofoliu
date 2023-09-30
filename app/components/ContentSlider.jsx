'use client'

import { useAppContext }              from '../context/state';
import { useState, useEffect }        from 'react';
import About                          from './content/About';
import Resume                         from './content/Resume';
import Projects                       from './content/Projects';
import Blog                           from './content/Blog';
import Contact                        from './content/Contact';

export default function ContentSlider() {

  const { targetPage, showContentSlider, visitedPagesCounter } = useAppContext();
  const [ delayedContent, setDelayedContent ] = useState(null);

  // Render the appropriate content based on the targetPage value
  const renderContent = () => {
    switch (targetPage) {
      case 'ABOUT':
        return <About />;
      case 'RESUME':
        return <Resume />;
      case 'PROJECTS':
        return <Projects />;
      case 'BLOG':
        return <Blog />;
      case 'CONTACT':
        return <Contact />;
      // default case
      default:
        return (
          <div className='hidden md:block'>Closing...</div>
        );
    }
  };

  useEffect(() => {
    let delayDuration = visitedPagesCounter === 1 ? 0 : 301;
  
    const delayRender = setTimeout(() => {
      setDelayedContent(renderContent());
      // console.log('now!')
    }, delayDuration);
  
    return () => clearTimeout(delayRender);
  }, [targetPage, visitedPagesCounter]);

  return (
    <div className={`fixed top-[50px] bottom-0 left-[120%] w-full overflow-x-hidden overflow-y-auto text-2xl bg-dark-grey z-[40] transition-left ${visitedPagesCounter === 1 && 'delay-300'} duration-600 ${showContentSlider && '!left-0 md:!left-[10%]'} md:top-0 md:w-[90%] hide-scrollbar`}>
      {delayedContent}
    </div>
  );
}


