
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
