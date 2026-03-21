import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <ItemList />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
