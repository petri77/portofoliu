import { useAppContext }        from '@/app/context/state';
import PortfolioNav             from '../PortfolioNav';
import AllProjects              from './portfolio/AllProjects';
import Brand                    from './portfolio/Brand';
import Design                   from './portfolio/Design';
import Graphic                  from './portfolio/Graphic';
import { FaBriefcase }          from 'react-icons/fa';

export default function Projects() {

  const { portfolioData, apiData } = useAppContext();

  // Render the portfolio data based on 'portfolioData' value
  const renderPortfolio = () => {
    switch (portfolioData) {
      case 'All':
        return <AllProjects />;
      case 'Brand':
        return <Brand />;
      case 'Design':
        return <Design />;
      case 'Graphic':
        return <Graphic />;
      // No default case
    }
  };

  return (
    <section className="page-container text-center w-full mt-[70px] mx-auto mb-[140px]">

      {/* title */}
      <div className='page-title relative'>
        <h2>Portfolio</h2>
        <span className='infinite absolute w-[35px] h-[17px] left-[calc(50%-17px)] mt-[10px]'></span>
      </div>

      {/* rows */}
      <div className='mt-[100px] flex flex-col gap-[100px] mx-[15px]'>
        <PortfolioNav />
        {/* we display the portfolio data based on nav above */}
        {renderPortfolio()}
      </div>

    </section>
  )
}
