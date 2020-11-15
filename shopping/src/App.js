import React from 'react';
import ShoppingAdmin from './components/admin/ShoppingAdmin.js';
import ClientShopping from './components/client/ClientShopping.js';
import ProductDetail from './components/client/ProductDetail.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/admin/Login.js';
import {createStore} from 'redux'
import {Provider} from 'react-redux'  
function App() {
  const initState ={
    cart:[]
  }
  const root_reducer = function(state = initState,action){
    console.log(state)
    return state
  }

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    )

  return (
<Provider store={store}>
<Router>
      <div>
        <Switch>
            <Router  path="/admin/login">
              <Login></Login>
            </Router>
            <Route path="/admin">
            <ShoppingAdmin></ShoppingAdmin> 
            </Route>
            <Route path='/products'>
            <ClientShopping></ClientShopping>
            </Route>
            <Route path="/product-detail">
            <ProductDetail></ProductDetail> 

            </Route>  
            </Switch>
      </div>
    </Router>
</Provider>
  );
}

export default App;
