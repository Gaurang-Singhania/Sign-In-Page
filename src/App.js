import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Loginpage from './components/Loginpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
      </Routes>

    </>
  );
}

export default App;
