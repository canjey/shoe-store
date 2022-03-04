import './App.css';
import Home from './Home';
import  Productdetails from './Productdetails';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element ={<Home />}></Route>
      <Route path ='/productdetails/:id' element ={<Productdetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </body>
  );
}

export default App;
