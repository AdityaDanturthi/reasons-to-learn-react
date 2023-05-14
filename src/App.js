import './App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';

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
