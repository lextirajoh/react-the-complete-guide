import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

export default function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}
