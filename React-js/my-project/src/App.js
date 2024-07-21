
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
         <>
             <Banner/>
             <Movies/>
         </>
        }/>
        <Route path='/watchlist' element={
         <>
             <Watchlist/>
         </>
        }/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
