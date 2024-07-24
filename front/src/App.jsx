import Browse from './pages/Browse/Browse';
import Create from './pages/Create/Create';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Details/Detail';
import Login from './pages/Login/Login';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route index element={<Browse/>} />
        <Route path='/home' element={<Browse/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
