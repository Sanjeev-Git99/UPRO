import Header from './components/Header';
import Hero from './components/Hero';
import Gateway from './components/Gateway';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Gateway />
        <Features />
        <Solutions />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
