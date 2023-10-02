export default function VideoContainer() {

  return (
    <div className="fixed min-h-screen min-w-[100vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video z-10 before:absolute before:inset-0 before:bg-[#12171b]/50">
      <video className="w-full h-full" src="/video/video.mp4" autoPlay loop muted></video>
    </div>
  )
}