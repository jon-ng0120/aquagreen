import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Catalog from './Components/Catalog';
import CartProvider from './store/CartProvider';
import FilterProvider from './store/FilterProvider';
import DetailedCardView from './Components/DetailedCardView';
import Header from './Components/Header';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <CartProvider>
        <FilterProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="catalog/:id" element={<DetailedCardView />} />
              <Route path="shopping-bag" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
