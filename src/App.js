// import logo from './logo.svg';
// import './App.css';
import Coinbase from './components/container/Coinbase';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loginandregister from './components/forms/loginandregister';




function App() {
  return (
    // <div className="App"> 
    <Router>
      <Routes>
        <Route path='/' element={<Coinbase/>}></Route>
        <Route path='/login' element={<Loginandregister/>}></Route>

      </Routes>
    </Router>   
    //   <Coinbase></Coinbase>
    // </div>
  );
}

export default App;
