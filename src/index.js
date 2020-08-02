import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
//import CadastroVideo from '.pages'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route component={Pagina404}/> 

    </Switch>
  </BrowserRouter>,
  //<React.StrictMode>
//    <App />
  //</React.StrictMode>,
  document.getElementById('root')
);
