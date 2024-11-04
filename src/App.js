
import './App.css';
import Body from './component/Body';
import Cart from './component/Cart';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   {/* <Body /> */}
    //   <Login />
      
    // </div>
   
    <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<Body />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
