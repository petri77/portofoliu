import { useAppContext }        from '@/app/context/state';
import Image                    from 'next/image';
import { FaMapMarkedAlt, FaAward, FaCertificate, FaUserAstronaut, FaMusic, FaRoute, FaImage, FaFilm, FaSpaceShuttle, FaBook, FaChessKnight, FaTree, FaDesktop, FaCogs, FaMobileAlt, FaMedkit, FaRegStar, FaRegStarHalf, FaUser, FaBriefcase, FaGlobe } from 'react-icons/fa';


export default function About() {

  const { apiData } = useAppContext();

  return (
    <section className="page-container text-center w-full mt-[70px] mx-auto mb-[140px]">

      {/* title */}
      <div className='page-title relative'>
        <h2>About Me</h2>
        <span className='infinite absolute w-[35px] h-[17px] left-[calc(50%-17px)] mt-[10px]'></span>
      </div>

      {/* rows */}
      <div className='mt-[100px] flex flex-col gap-[100px]'>

        {/* profile */}
        <div className='bg-black-box p-[30px] rounded-[10px] mx-[15px] hover-animated'>
          <div className='md:flex md:gap-[30px]'>
            <div className="w-1/2 mx-auto rounded-full overflow-hidden mb-[30px] md:m-0 md:min-w-[185px] lg:min-w-[calc(25%-20px)]">
              <Image src={"/images/pages/petri.png"} alt='Petri' width={400} height={400} />
            </div>
            <div className="flex flex-col gap-[15px] text-left">
              <h4>Moldovan Petri</h4>
              <div className='flex items-center gap-[8px] text-green'>
                <FaMapMarkedAlt size={14} />
                <h5 className='text-[12px] leading-normal'>Târgu Mureș, Romania</h5>
              </div>
              <p className='text-[14px] leading-[24px]'>Hello! I’m Moldovan Petri, a self-taught & award winning Digital Designer & Developer with over five years work experience. I started in my children’s room, got pro at renowned digital agencies akij co and nork blue lebel. Now I’m based in USA, America, working for Apple fredmansky and enjoying the life in the countryside.</p>
              <p className='text-[14px] leading-[24px]'>I have couple of hobbies but I like to travel. I have already travelled almost all the districts of our country with my father. I am fond of fruit.</p>
            </div>
          </div>
          <ul className='flex flex-col gap-[45px] mt-[45px] md:flex-row md:flex-wrap lg:mt-[50px]'>
            <li className='flex flex-1'>
              <div className='w-[45px] h-[45px] flex items-center justify-center rounded-full bg-dark-grey mr-[15px] border border-green'>
                <FaAward size={22} />
              </div>
              <div className='flex flex-col justify-center'>
                <h6 className='text-[15px] font-normal leading-[15px] whitespace-nowrap'>4 Years Job</h6>
                <p className='text-[12px] leading-[21px] text-green text-left'>Experience</p>
              </div>
            </li>
            <li className='flex flex-1'>
              <div className='w-[45px] h-[45px] flex items-center justify-center rounded-full bg-dark-grey mr-[15px] border border-green'>
                <FaCertificate size={22} />
              </div>
              <div className='flex flex-col justify-center'>
                <h6 className='text-[15px] font-normal leading-[15px] whitespace-nowrap'>500+ Projects</h6>
                <p className='text-[12px] leading-[21px] text-green text-left'>Completed</p>
              </div>
            </li>
            <li className='flex flex-1'>
              <div className='w-[45px] h-[45px] flex items-center justify-center rounded-full bg-dark-grey mr-[15px] border border-green'>
                <FaUserAstronaut size={22} />
              </div>
              <div className='flex flex-col justify-center'>
                <h6 className='text-[15px] font-normal leading-[15px] whitespace-nowrap'>Freelance</h6>
                <p className='text-[12px] leading-[21px] text-green text-left'>Available</p>
              </div>
            </li>
            <li className="flex flex-1 mt-[10px] mb-[20px] ml-[20px] lg:ml-0 lg:mt-0">
              <a className="btn-special" href="/linkedin/petri77">Download CV</a>
            </li>
          </ul>
        </div>

        {/* interests */}
        <div className='mx-[15px]'>
          <div className='page-subtitle mb-[50px] relative'>
            <h3>My Interests</h3>
          </div>
          <div className='bg-black-box py-[50px] px-[30px] rounded-[10px] hover-animated'>
            <ul className='grid gap-[40px] sm:grid-cols-2 lg:grid-cols-4'>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaMusic size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Music</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaRoute size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Running</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaImage size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Photos</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaFilm size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Movies</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaSpaceShuttle size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Space</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaBook size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Books</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaChessKnight size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Chess</h6>
              </li>
              <li className='flex items-center bg-dark-grey rounded-[10px] transition-colors duration-300 hover:bg-transparent'>
                <div className='p-[15px] border-r-2 border-black-box text-green'><FaTree size={20} /></div>
                <h6 className='p-[15px] text-[15px] font-thin'>Nature</h6>
              </li>
            </ul>
          </div>
        </div>

        {/* services */}
        <div className='mx-[15px]'>
          <div className='page-subtitle mb-[50px] relative'>
            <h3>Services</h3>
          </div>
          <div className='grid gap-y-[40px] sm:grid-cols-2 sm:gap-x-[30px]'>
            <div className='service-box bg-black-box rounded-[10px] p-[30px] flex flex-col items-center justify-center gap-[20px] hover-animated'>
              <div className='service-icon w-[70px] h-[70px] flex items-center justify-center relative rounded-full bg-dark-grey'><FaDesktop size={28} /></div>
              <h4>Web Design</h4>
              <p className='text-[14px] leading-[24px]'>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
            </div>
            <div className='service-box bg-black-box rounded-[10px] p-[30px] flex flex-col items-center justify-center gap-[20px] hover-animated'>
              <div className='service-icon w-[70px] h-[70px] flex items-center justify-center relative rounded-full bg-dark-grey'><FaCogs size={28} /></div>
              <h4>Web Development</h4>
              <p className='text-[14px] leading-[24px]'>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
            </div>
            <div className='service-box bg-black-box rounded-[10px] p-[30px] flex flex-col items-center justify-center gap-[20px] hover-animated'>
              <div className='service-icon w-[70px] h-[70px] flex items-center justify-center relative rounded-full bg-dark-grey'><FaMobileAlt size={28} /></div>
              <h4>Responsive Design</h4>
              <p className='text-[14px] leading-[24px]'>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
            </div>
            <div className='service-box bg-black-box rounded-[10px] p-[30px] flex flex-col items-center justify-center gap-[20px] hover-animated'>
              <div className='service-icon w-[70px] h-[70px] flex items-center justify-center relative rounded-full bg-dark-grey'><FaMedkit size={28} /></div>
              <h4>Quick Support</h4>
              <p className='text-[14px] leading-[24px]'>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div>
          <div className='page-subtitle mb-[50px] relative'>
            <h3>Testimonials</h3>
          </div>
          {/* testimonials slider */}
          <div className='flex w-full gap-[15px] px-[15px] h-full overflow-y-hidden overflow-x-scroll snap-mandatory snap-x hide-scrollbar lg:gap-[30px]'>
            {/* 1 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Jane Hilton' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Jane Hilton</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>UI/UX Designer</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
            {/* 2 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Coman Tatiana' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Coman Alex</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>Web Development</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStarHalf size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
            {/* 3 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Jane Hilton' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Moldovan Petri</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>UI/UX Designer</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
            {/* 4 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Jane Hilton' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Claudia Pop</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>UI/UX Designer</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
            {/* 5 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Jane Hilton' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Elon Musk</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>UI/UX Designer</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
            {/* 6 */}
            <div className="bg-black-box min-w-full p-[30px] rounded-[10px] snap-center lg:min-w-[calc(50%-15px)] lg:snap-align-none">
              <div className="flex flex-col gap-[30px] sm:flex-row">
                <div className='flex items-center text-left gap-[20px] flex-1'>
                  <div className="flex rounded-full overflow-hidden">
                    <Image src={"/images/pages/customer.webp"} alt='Jane Hilton' width={70} height={70} />
                  </div>
                  <div className="flex flex-col">
                    <h4>Mike Tyson</h4>
                    <p className='text-[13px] text-[#777] leading-[16px] pt-[10px]'>UI/UX Designer</p>
                  </div>
                </div>
                <ul className='flex gap-[5px] text-green sm:self-center'>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                  <li><FaRegStar size={16} /></li>
                </ul>
              </div>
              <p className='mt-[30px] text-[14px] leading-[24px] text-left'>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
            </div>
          </div>
        </div>

        {/* prices */}
        <div className='mx-[15px]'>
          <div className='page-subtitle mb-[90px] relative'>
            <h3>Prices</h3>
          </div>
          <div className="grid gap-y-[80px] lg:grid-cols-3 lg:gap-x-[30px]">
            {/* basic */}
            <div className='price-box bg-black-box p-[30px] rounded-[10px] hover-animated relative'>
              <div className="price-icon flex items-center justify-center bg-dark-grey absolute top-[-40px] left-1/2 -translate-x-1/2 rounded-full w-[70px] h-[70px]">
                <FaUser size={32} />
              </div>
              <h4 className='text-[20px] py-[25px]'>Basic</h4>
              <div className="flex justify-center items-baseline py-[25px] gap-[6px] mt-[10px]">
                <span className='relative bottom-[10px] text-[15px]'>$</span>
                <span className='text-[22px] font-medium'>49</span>
                <span className='text-[14px]'>month</span>
              </div>
              <ul className="flex flex-col text-[14px] mb-[10px] leading-[31px]">
                <li>Web Design</li>
                <li>Web Development</li>
                <li className='text-[#777] line-through'>Responsive Design</li>
                <li className='text-[#777] line-through'>Game Development</li>
              </ul>
              <div className="pt-[15px]">
                <a href="/buy" className="btn-special buy-now mb-[20px]">Buy Now</a>
              </div>
            </div>
            {/* standard */}
            <div className='price-box bg-black-box p-[30px] rounded-[10px] hover-animated relative'>
              <div className="price-icon flex items-center justify-center bg-dark-grey absolute top-[-40px] left-1/2 -translate-x-1/2 rounded-full w-[70px] h-[70px]">
                <FaBriefcase size={32} />
              </div>
              <h4 className='text-[20px] py-[25px]'>Standard</h4>
              <div className="flex justify-center items-baseline py-[25px] gap-[6px] mt-[10px]">
                <span className='relative bottom-[10px] text-[15px]'>$</span>
                <span className='text-[22px] font-medium'>99</span>
                <span className='text-[14px]'>month</span>
              </div>
              <ul className="flex flex-col text-[14px] mb-[10px] leading-[31px]">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li className='text-[#777] line-through'>Game Development</li>
              </ul>
              <div className="pt-[15px]">
                <a href="/buy" className="btn-special buy-now mb-[20px]">Buy Now</a>
              </div>
            </div>
            {/* premium */}
            <div className='price-box bg-black-box p-[30px] rounded-[10px] hover-animated relative'>
              <div className="price-icon flex items-center justify-center bg-dark-grey absolute top-[-40px] left-1/2 -translate-x-1/2 rounded-full w-[70px] h-[70px]">
                <FaGlobe size={32} />
              </div>
              <h4 className='text-[20px] py-[25px]'>Premium</h4>
              <div className="flex justify-center items-baseline py-[25px] gap-[6px] mt-[10px]">
                <span className='relative bottom-[10px] text-[15px]'>$</span>
                <span className='text-[22px] font-medium'>149</span>
                <span className='text-[14px]'>month</span>
              </div>
              <ul className="flex flex-col text-[14px] mb-[10px] leading-[31px]">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li>Game Development</li>
              </ul>
              <div className="pt-[15px]">
                <a href="/buy" className="btn-special buy-now mb-[20px]">Buy Now</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
