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
    imge = {element.coverImg} 
    ratting ={element.stats.rating} 
    reviewCountry = {element.stats.reviewCount}
    location = {element.location}
    title = {element.title}
    price = {element.price}/>

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

