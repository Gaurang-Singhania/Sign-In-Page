import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import loginpage from './components/loginpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/' element={<loginpage />} />
      </Routes>

    </>
  );
}

export default App;
