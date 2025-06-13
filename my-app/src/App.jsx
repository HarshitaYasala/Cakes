import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import CakesPage from './stores/pages/CakesPage';
import CupCakespage from './stores/pages/CupCakespage';
import EasterSpecial from './stores/pages/EasterSpecial';
import ComboPackspage from './stores/pages/ComboPackspage';
import CakeSin from './stores/Singles/CakeSin';
import CupCakeSingle from './stores/Singles/CupCakeSingle';
import ComboSingle from './stores/Singles/ComboSingle';
import EasterSingle from './stores/Singles/EasterSingle';
import UserCart from './stores/UserCart';
import Cakes from './stores/components/Cakes';
import LoginPage from './stores/pages/LoginPage';
import Checkout from './stores/Checkout';
import Navbar from './stores/components/Navbar';
import OrderConfirmation from './stores/OrderConfirmation';
import BrowniesPage from './stores/pages/BrowniesPage';
import BrowniesSin from './stores/Singles/BrowniesSin';
const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/cakes' element={<CakesPage/>}/>
        <Route path='/cupcakes' element={<CupCakespage/>}/>
        <Route path='/easterspecial' element={<EasterSpecial/>}/>
        <Route path='/combopacks' element={<ComboPackspage/>}/> 
        <Route path='/BrowniesandBars' element={<BrowniesPage/>}/>
          <Route path='/cakes/:id' element={<CakeSin/>}/>
          <Route path='/cupcakes/:id' element={<CupCakeSingle/>}/>   
          <Route path='/easterspecial/:id' element={<EasterSingle/>}/>  
          <Route path='/combopacks/:id' element={<ComboSingle/>}/>
          <Route path='/Bowniesandbars/:id' element={<BrowniesSin/>}/> 
          <Route path='/cart' element={<UserCart/>}/> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" component={<OrderConfirmation/>} />
    </Routes>
    </div>
   );
}
 
export default App;