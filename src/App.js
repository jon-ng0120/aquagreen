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
              <Route exact path="/aquagreen" element={<Home />} />
              <Route exact path="/aquagreen/catalog" element={<Catalog />} />
              <Route
                exact
                path="/aquagreen/catalog/:id"
                element={<DetailedCardView />}
              />
              <Route exact path="/aquagreen/shopping-bag" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
