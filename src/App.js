import './App.css';
import Home from './containers/HomePage';
import { Route,Routes} from 'react-router-dom';
import ProductListPage from './containers/ProductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import { ProductDetailsPage } from './containers/ProductDetailsPage';

import CheckoutPage from './containers/CheckoutPage';
import { CartPage } from './containers/CartPage';

function App() {
  const dispatch=useDispatch();
  const auth=useSelector(state=> state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  },[auth.authenticate])
  return (
    <div className="App">
         <Routes>
           <Route path="/"  element={<Home/>}/>
           <Route path="/cart"  element={<CartPage/>}/>
           <Route path='/checkout' element={<CheckoutPage/>}/>
           <Route path="/:slug" element={<ProductListPage/>}/>
           <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage/>}/>
         </Routes>
    </div>
  );
}

export default App;
