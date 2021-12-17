import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/404/NotFound';
import Home from './Pages/Home/Home';
import JoinUs from './Pages/Login/JoinUs/JoinUs';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jobs' element={<Home />} />
        <Route path='/register' element={<JoinUs />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
