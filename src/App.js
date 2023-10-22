import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
