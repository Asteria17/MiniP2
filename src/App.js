import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer, Categorized } from './components';
import { Hero } from './pages';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NavBar />
      {/* <Categorized /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
