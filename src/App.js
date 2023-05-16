import './App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import SideLogo from './SideLogo';
import PageTitle from './PageTitle';

function App() {
  return (
    <div className="App flex flex-col h-screen w-screen">
      <Header /> 
      <PageTitle />
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-row justify-between">
      <List />
      <SideLogo />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
