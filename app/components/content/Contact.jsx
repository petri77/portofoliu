import { useAppContext } from '@/app/context/state';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {

  const { apiData } = useAppContext();

  return (
    <section className="page-container text-center w-full mt-[70px] mx-auto mb-[140px]">

      {/* title */}
      <div className='page-title relative'>
        <h2>Contact</h2>
        <span className='infinite absolute w-[35px] h-[17px] left-[calc(50%-17px)] mt-[10px]'></span>
      </div>

      {/* rows */}
      <div className='mt-[100px] flex flex-col gap-[100px] mx-[15px]'>
        <div className='bg-black-box p-[30px] rounded-[10px] hover-animated'>
          <div className="contact-form flex flex-col">
            <div className="flex flex-col lg:flex-row lg:gap-[30px]">
              <input type="text" placeholder='Name *' className='w-full bg-transparent p-[10px]' />
              <input type="email" placeholder='Email *' className='w-full bg-transparent p-[10px]' />
            </div>
            <textarea name="contact-message" placeholder='Your message...' className='w-full h-[100px] bg-transparent p-[10px] mt-[50px] leading-normal'></textarea>
          </div>
          <div className="pt-[50px]">
            <a href="#" className="btn-special mb-[20px]">Send Message</a>
          </div>
        </div>
        <div className='bg-black-box p-[30px] rounded-[10px] hover-animated'>
          <div className="flex flex-col gap-[40px] lg:flex-row">
            <div className="flex flex-col items-center p-[15px] flex-1">
              <FaPaperPlane color='#fff' size={30} />
              <p className='text-[15px] leading-[25px] mt-[30px] mb-[15px]'>petri.dev77@gmail.com</p>
              <span className='text-[#737a81] text-[14px] leading-[20px]'>Email</span>
            </div>
            <div className="flex flex-col items-center p-[15px] flex-1">
              <FaMapMarkerAlt color='#fff' size={30} />
              <p className='text-[15px] leading-[25px] mt-[30px] mb-[15px]'>Targu-Mures, Romania</p>
              <span className='text-[#737a81] text-[14px] leading-[20px]'>Address</span>
            </div>
            <div className="flex flex-col items-center p-[15px] flex-1">
              <FaPhone color='#fff' size={30} />
              <p className='text-[15px] leading-[25px] mt-[30px] mb-[15px]'>+40747836280</p>
              <span className='text-[#737a81] text-[14px] leading-[20px]'>Phone</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
