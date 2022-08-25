import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          {' '}
          <ProductDetail />{' '}
        </Route>
      </main>
    </div>
  );
}
