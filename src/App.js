import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FooTer from './components/FooTer';
import ProfileP from './components/ProfileP';




function App() {
  return (
    <>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='ProfileP' element={<ProfileP/>}/>
          {/* <Route path='/IframePage' element={<IframePage/>}/>
          <Route path='MyComponent' element={<MyComponent/>}/> */}
        </Routes>
        <FooTer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;

 