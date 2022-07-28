import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';
import View from './pages/View';


function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/addContact' element={ <Edit /> } />
          <Route path='/update/:id' element={ <Edit /> } />
          <Route path='/view/:id' element={ <View /> } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
