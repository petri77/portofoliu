import { useAppContext }          from '@/app/context/state';
import { FaCalendarAlt }          from 'react-icons/fa';


export default function Resume() {

  const { apiData } = useAppContext();

  return (
    <section className="page-container text-center w-full mt-[70px] mx-auto mb-[140px]">

      {/* title */}
      <div className='page-title relative'>
        <h2>Resume</h2>
        <span className='infinite absolute w-[35px] h-[17px] left-[calc(50%-17px)] mt-[10px]'></span>
      </div>

      {/* rows */}
      <div className='mt-[100px] flex flex-col gap-[100px] mx-[15px]'>

        {/* experience & education */}
        <div className='flex flex-col gap-y-[100px] lg:flex-row lg:gap-y-0 lg:gap-x-[30px]'>
          {/* experience */}
          <div className='flex-1'>
            <div className='page-subtitle mb-[50px] relative'>
              <h3>Experience</h3>
            </div>
            <div className='bg-black-box py-[50px] px-[30px] rounded-[10px] hover-animated'>
              <ul className='flex flex-col gap-[40px] text-left'>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Web Design</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2012 - 2014 | Transilvania Media</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Front-End Developer</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2014 - 2015 | Transilvania Media</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Web Development</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2015 - 2019 | Transilvania Media</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
              </ul>
            </div>
          </div>
          {/* education */}
          <div className='flex-1'>
            <div className='page-subtitle mb-[50px] relative'>
              <h3>Education</h3>
            </div>
            <div className='bg-black-box py-[50px] px-[30px] rounded-[10px] hover-animated'>
              <ul className='flex flex-col gap-[40px] text-left'>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Phd</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2011 - 2013 | Computer Science</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Post Graduation</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2013 - 2016 | Computer Science</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
                <li className='relative pt-[15px] pl-[40px] fill-circle before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-green after:absolute after:w-[20px] after:h-[1px] after:top-[21px] after:left-[6px] after:bg-green'>
                  <h4 className='relative leading-[15px] mb-[20px] before:absolute before:w-[13px] before:h-[13px] before:left-[-46px] before:bg-dark-grey before:border-2 before:border-green before:rounded-full before:z-1'>Graduation</h4>
                  <div className='mb-[15px] h-[18px] flex items-center gap-[5px] text-green'>
                    <FaCalendarAlt className="min-w-[14px] mb-[4px]" size={14} />
                    <p className='text-[12px] leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>2016 - 2018 | Computer Science</p>
                  </div>
                  <p className='text-[14px] leading-[22px]'>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className='page-subtitle mb-[50px] relative'>
            <h3>Skills</h3>
          </div>
          <div className='bg-black-box py-[50px] px-[30px] rounded-[10px] flex flex-col gap-[40px] hover-animated md:flex-row'>
            <div className='flex-1'>
              <ul className='flex flex-col gap-y-[40px] text-left sm:grid sm:grid-cols-2 sm:gap-x-[30px] md:flex'>
                {/* html */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>HTML5</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[98%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>98%</span>
                    </div>
                  </div>
                </li>
                {/* css */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>CSS3</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[85%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>85%</span>
                    </div>
                  </div>
                </li>
                {/* javascript */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>JavaScript</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[90%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>90%</span>
                    </div>
                  </div>
                </li>
                {/* ui/ux design */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>UI/UX Design</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[77%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>77%</span>
                    </div>
                  </div>
                </li>
                {/* test */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>Testing</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[77%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>77%</span>
                    </div>
                  </div>
                </li>
                {/* test */}
                <li>
                  <h4 className='text-[17px] mb-[10px]'>Testing</h4>
                  <div className='w-full bg-dark-grey h-[8px] rounded-[4px]'>
                    <div className='w-[77%] h-full bg-green rounded-[4px] relative after:absolute after:top-[-5px] after:right-0 after:p-[6px] after:bg-dark-grey after:border-[3px] after:border-green after:rounded-full after:content-""'>
                      <span className='absolute top-[-30px] right-0 text-[14px] leading-[21px] font-semibold'>77%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* skills circles */}
            <div className='flex-1'>
              <ul className='flex flex-col items-center gap-y-[40px] sm:grid sm:grid-cols-3 sm:gap-[30px] md:grid-cols-[130px_130px] md:justify-between md:gap-x-0 lg:justify-around'>
                {/* skill 1 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent eighty" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>80%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>PHP</p>
                  </div>
                </li>
                {/* skill 2 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent seventy" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>70%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>Illustrator</p>
                  </div>
                </li>
                {/* skill 3 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent sixty" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>60%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>Photoshop</p>
                  </div>
                </li>
                {/* skill 4 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent ninety" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>90%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>NextJS</p>
                  </div>
                </li>
                {/* skill 5 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent ninety" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>90%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>NextJS</p>
                  </div>
                </li>
                {/* skill 6 */}
                <li className='relative overflow-hidden rounded-full'>
                  <svg className='skill-circle' width="130" height="130" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#0e0f10" strokeWidth="5" />
                    <circle className="percent ninety" cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="5" pathLength="100" />
                  </svg>
                  <div className='flex flex-col items-center justify-center gap-[4px] absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-[22px] font-bold leading-[24px]'>90%</span>
                    <p className='text-[13px] font-bold leading-[14px]'>NextJS</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* working process */}
        <div>
          <div className='page-subtitle mb-[50px] relative'>
            <h3>My Work Process</h3>
          </div>
          <div className='bg-black-box p-[30px] rounded-[10px] hover-animated lg:flex lg:gap-[30px] lg:items-center xl:gap-[50px]'>
            {/* 1 & 2 */}
            <ul className="flex flex-col sm:flex-row lg:flex-col">
              <li className='text-right p-[30px] pl-0 border-r border-green lg:p-0 lg:border-none'>
                <p className='text-green leading-[50px] text-[25px]'>01</p>
                <h4 className='mb-[15px] font-bold'>Discuss idea</h4>
                <p className='text-[14px] leading-[21px] mb-[15px]'>I could describe these conceptions, also impress upon paper all that is living.</p>
              </li>
              <li className='text-left p-[30px] pr-0 border-l border-green lg:text-right lg:p-0 lg:border-none'>
                <p className='text-green leading-[50px] text-[25px]'>02</p>
                <h4 className='mb-[15px] font-bold'>Creative concept</h4>
                <p className='text-[14px] leading-[21px] mb-[15px]'>I could describe these conceptions, also impress upon paper all that is living.</p>
              </li>
            </ul>
            {/* circle */}
            <div className="working-process-circle hidden relative items-center justify-center w-[300px] h-[300px] aspect-square rounded-full border border-white lg:flex">
              <h4 className='text-[38px] font-bold leading-[60px]'>WORKING<br />PROCESS</h4>
              <span className='absolute top-[20%] left-[6%] w-[12px] h-[12px] rounded-full bg-green'></span>
              <span className='absolute top-[20%] right-[6%] w-[12px] h-[12px] rounded-full bg-green'></span>
              <span className='absolute bottom-[20%] left-[6%] w-[12px] h-[12px] rounded-full bg-green'></span>
              <span className='absolute bottom-[20%] right-[6%] w-[12px] h-[12px] rounded-full bg-green'></span>
            </div>
            {/* 3 & 4 */}
            <ul className="flex flex-col sm:flex-row sm:border-t sm:border-green lg:border-none lg:flex-col">
              <li className='text-right p-[30px] pl-0 border-r border-green lg:text-left lg:p-0 lg:border-none'>
                <p className='text-green leading-[50px] text-[25px]'>03</p>
                <h4 className='mb-[15px] font-bold'>Web concept</h4>
                <p className='text-[14px] leading-[21px] mb-[15px]'>I could describe these conceptions, also impress upon paper all that is living.</p>
              </li>
              <li className='text-left p-[30px] pr-0 border-l border-green lg:p-0 lg:border-none'>
                <p className='text-green leading-[50px] text-[25px]'>04</p>
                <h4 className='mb-[15px] font-bold'>Final concept</h4>
                <p className='text-[14px] leading-[21px] mb-[15px]'>I could describe these conceptions, also impress upon paper all that is living.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  )
}
