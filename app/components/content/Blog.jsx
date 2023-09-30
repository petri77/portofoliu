import { useAppContext }        from '@/app/context/state';
import { FaBriefcase }          from 'react-icons/fa';

export default function Blog() {

  const { apiData } = useAppContext();

  return (
    <section className="page-container text-center w-full mt-[70px] mx-auto mb-[140px]">

      {/* title */}
      <div className='page-title relative'>
        <h2>Blog</h2>
        <span className='infinite absolute w-[35px] h-[17px] left-[calc(50%-17px)] mt-[10px]'></span>
      </div>

      {/* rows */}
      <div className='mt-[100px] flex flex-col gap-[100px] mx-[15px]'>
        <div className='bg-black-box p-[30px] rounded-[10px] hover-animated'>
          <span className='text-[16px]'>Coming soon...</span>
        </div>
      </div>

    </section>
  )
}
