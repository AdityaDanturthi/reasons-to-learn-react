import logo from './logo.svg';
import './App.css';

function Header(){
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
function Footer(){
  return(
        <footer className="w-screen flex bottom-0 justify-center items-center">
        <small className="p-2">© 2023 Aditya Danturthi. All rights reserved.</small>
      </footer>
  )
}

function List(){
  return(
    <div className="flex flex-col items-center">
      <h1 className='font-extrabold text-5xl p-2'>Reasons I'm excited to learn React</h1>
     <ol className="list-decimal list-outside text-2xl font-medium px-6 py-2 ms-8">
      <li>High demand in the job market</li>
      <li>Reusable and modular components</li>
      <li>Performance</li>
      <li>Community support</li>
      <li>Compatible with other technologies (GraphQL & Redux)</li>
    </ol>
    </div>
  )
}

function App() {
  return (
    <div className="App flex flex-col h-screen w-screen">
      <Header /> 
    <div className="flex flex-col h-full justify-between">
      <List />
      <Footer />
    </div>
    </div>
  );
}

export default App;
