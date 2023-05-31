import MenuBtn from "./MenuBtn"

export default function Header() {

  return (
    <header className="fixed h-[50px] bg-black w-full z-50 text-center text-white shadow-[0_0_50px_0_rgba(0,0,0)] md:hidden">
      <h1 className="text-[24px] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PETRI</h1>
      <MenuBtn />
    </header>
  )
}
