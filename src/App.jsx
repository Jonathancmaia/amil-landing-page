import './App.css';
import Header from './components/header';
import Hire from './components/hire';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
    <div className="appContainer" id="appContainer">
      <Header/>
      <Hire />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
