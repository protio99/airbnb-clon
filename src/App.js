//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
//import katie from './images/katie-zaferes.png';
import data from './data';

export default function App() {
  
  var card = data.map(element => {

    return <Card 
    key = {element.id}
    element = {element}/>

  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {card}
      </section>
    </div>
  );
}

