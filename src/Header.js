import logo from './logo.svg';

export default function Header(){
    return(
          <header className="w-screen bg-gray-900 text-white font-medium text-base">
          <nav className="flex flex-row items-center justify-between p-2">
  <img src={logo} alt="React logo" className="h-10 w-14"/>
            <ul className="flex flex-row gap-2">
              <li><a href="https://react.dev" target="blank">React Docs</a></li>
            </ul>
          </nav>
        </header>
    )
  }