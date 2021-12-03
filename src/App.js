import './App.css';
import Footer from './components/Footer';
import Header from './components/HeaderClass';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Detail from './components/Detail';
import Cart from './components/Cart';
// import Signin from './components/Signin';
import Login from './components/Login.js';

import Nomatch from './components/Nomatch';
import { FilterContext } from './FilterContext';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from './components/Signup/Form';



function App() {
  const [keyword, setKeyword] = useState('')
  console.log(keyword)
  return (
    // <FilterContext.Provider value={keyword}>
    <Router>
    <Header />
    <Switch>
    <Route exact path="/">
    <Homepage keyword={keyword}/>
    </Route>
    {/* <Route exact path="/shop">
    <ShopMain/>
    </Route> */}
    <Route exact path={["/shop/:category","/shop"]}>
    <Shop keyword={keyword} setKeyword={setKeyword}/>
    </Route>
    <Route path="/detail/:id">
    <Detail/>
    </Route>
    <Route path="/cart">
    <Cart/>
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/form">
    <Form/>
    </Route>
    <Route path="*">
    <Nomatch/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
    // </FilterContext.Provider>
  );
}

export default App;
