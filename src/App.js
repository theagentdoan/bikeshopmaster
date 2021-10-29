import './App.css';
import Footer from './components/Footer';
import Header from './components/HeaderClass';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Signin from './components/Signin';

import Nomatch from './components/Nomatch';
import { FilterContext } from './FilterContext';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [keyword, setKeyword] = useState('')
  console.log(keyword)
  return (
    <FilterContext.Provider value={keyword}>
    <Router>
    <Header setKeyword={setKeyword}/>
    <Switch>
    <Route exact path="/">
    <Homepage/>
    </Route>
    {/* <Route exact path="/shop">
    <ShopMain/>
    </Route> */}
    <Route exact path={["/shop/:category","/shop"]}>
    <Shop keyword={keyword}/>
    </Route>
    <Route path="/detail/:id">
    <Detail/>
    </Route>
    <Route path="/cart">
    <Cart/>
    </Route>
    <Route path="/signin">
    <Signin/>
    </Route>
    
    <Route path="*">
    <Nomatch/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
    </FilterContext.Provider>
  );
}

export default App;
