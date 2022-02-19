import "./App.css";
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header /> 
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
