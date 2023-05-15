import logo from './logo.svg';

export default function Header(){
    return(
          <header className="w-screen bg-gray-900 text-white font-medium text-base">
          <nav className="flex flex-row items-center justify-between py-4">
          <span className="flex flex-row items-center text-base font-extrabold text-[#61DAFB]">
            <img src={logo} alt="React logo" className="h-10 w-14"/>React Facts
            </span>
            <ul className="flex flex-row gap-2 float-right pr-2">
              <li className="text-base font-extrabold">React Course - Project 1</li>
            </ul>
          </nav>
        </header>
    )
  }