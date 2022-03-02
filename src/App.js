//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from './images/image.png';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card  
      imge = {katie}
      ratting = "5.0"
      reviewCountry = {6}
      country = "USA"
      title = "Life Lessons with Katie Zaferes"
      price = {136}
      />
    </div>
  );
}

