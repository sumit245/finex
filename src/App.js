import './assets/styles.css';
import About from './components/About';
import Blog from './components/Blog';
import Currency from './components/Currency';
import ExchangeTable from './components/ExchangeTable';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <Features />
      <Currency />
      <ExchangeTable />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
