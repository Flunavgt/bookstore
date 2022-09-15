import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';
import NavBar from '../NavBar/NavBar';

const App = () => (
  <div className="mymain">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
