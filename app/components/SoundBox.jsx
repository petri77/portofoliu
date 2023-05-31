import { useAppContext } from '../context/state';

export default function SoundBox() {

  const { isSound, toggleMusic } = useAppContext();

  return (
    <div onClick={toggleMusic} className={`min-h-[98.5px] relative flex flex-col items-center justify-center gap-[10px] overflow-hidden border-t-[5px] border-dark-grey md:min-h-[138.5px] cursor-pointer transition-colors duration-300 md:hover:text-green ${isSound ? 'text-green' : ''}`}>
      <div className="music-lines flex items-end w-[24px] h-[24px] mx-auto">
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
        <span className={`inline-flex mx-[1px] w-[7px] h-[5px] bg-white ${isSound ? 'animated' : ''}`}></span>
      </div>
      <p className='text-[13px] font-semibold'>Sound</p>
      {isSound && <audio id="audioPlayer" className='absolute w-[300px] left-[-300px]' src="/music/sound.mp3" autoPlay></audio>}
    </div>
  )
}