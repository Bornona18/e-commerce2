import React from 'react';
import './App.css';
import Home from './Components/Home';
import Makechoice from './Components/Makechoice';

import { BrowserRouter, Route } from 'react-router-dom'
import Men from './Components/Men';
import Women from './Components/Women';
import Children1 from './Components/Children';
import Cart from './Components/Cart';
import store from './redux/Store/store'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import checkout from './Components/checkout';
import dashboard from './Components/Dashboard'
import settings from './Components/SettingsMenu'



function App() {  

  let browserHistory = createHistory()
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
          <a className="navbar-brand" href="#">GiganticDesire</a></nav>

        <BrowserRouter history={browserHistory} className="content">
          <Route exact path="/" component={Home} />
          <Route path="/choice/" component={Makechoice} />
          <Route path="/men/" component={Men} />
          <Route path="/women/" component={Women} />
          <Route path="/children/" component={Children1} />
          <Route path="/cart/" component={Cart} />
          <Route path="/check" component={checkout} />
          <Route path="/dashboard/" component={dashboard} />
          <Route path="/settings/" component={settings} />
        </BrowserRouter>

        <footer class="page-footer font-small bg-dark text-white pt-4" style={{marginTop: "28vh"}}>
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-3 ">
                <h5 >Follow us for More:</h5> <br></br>
                <a href="#" className=" brand  text-white fa fa-facebook-official"></a>&nbsp;&nbsp;
                <a href="#" className=" brand text-white fa fa-twitter-square"></a>&nbsp;&nbsp;
                <a href="#" className=" brand text-white fa fa-instagram"></a>&nbsp;&nbsp;
              </div>
              <hr class="clearfix w-100 d-md-none pb-3"></hr>
              <div class="col-md-6 ">
                <h5 >About Us</h5>
                <p>GiganticDesire is an USA e-commerce company based in Bronx, N.Y, USA. It was founded by Nusrat J Bornona  in 2020.</p>
              </div>
              <hr class="clearfix w-100 d-md-none pb-3"></hr>
              <div class="col-md-3">
                <h5 >Contact us :</h5>
                <p> <i className="  brand text-white fa fa-whatsapp" ></i>&nbsp; : &nbsp; 347-8256990</p>
              </div>
            </div>
            </div>
            </footer>
      </div>
      </Provider>
  );
}

export default App;