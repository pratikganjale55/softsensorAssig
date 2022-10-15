
import { Route, Routes } from 'react-router';
import './App.css';
import Cart from './components/Cart';
import DisplayData from './components/DisplayData';



function App() {
  return (
  <>
  <Routes>
     <Route path='/' element={<DisplayData/>}/>
     <Route path='/:id' element={<Cart/>}/>
      
    </Routes>
  
  </>

  );
}

export default App;

