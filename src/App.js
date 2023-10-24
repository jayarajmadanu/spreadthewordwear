import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import ItemPage from './components/ItemPage';

function App() {
  //basename={process.env.PUBLIC_URL}
  {/*<BrowserRouter basename="/spreadthewordwear">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ItemPage />} />
      </Routes>
  </BrowserRouter>*/}
  return (
   <HashRouter >
        <Routes>
        <Route  path="/" element={<Home></Home>} />
        <Route  path="/product" element={<ItemPage></ItemPage> }/>
        </Routes>
        </HashRouter>
  
  );
}

export default App;
