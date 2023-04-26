import './App.css';
import Home from './Pages/Home';
import Mint from './Pages/Mint';
import SearchPage from './Pages/SearchPage';
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/mint' element={<Mint/>} />
      <Route path='/searchpage' element={<SearchPage/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  );
}

export default App;
