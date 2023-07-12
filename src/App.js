import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
 import Register from './components/Login';
import Reg from './components/register';
import Home from './components/home';
import ProfileCreate from './components/profile';
  
 import NavigationBar from './components/nav';
import About from './components/about ';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/Reg" element={<Reg />}></Route>
          <Route path="/NavigationBar" element={<Home />}></Route>
          <Route path="/profile" element={<ProfileCreate />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

