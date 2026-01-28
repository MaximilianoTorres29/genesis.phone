import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter basename="/genesis.phone">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;