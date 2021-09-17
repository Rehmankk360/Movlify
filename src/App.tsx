import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer } from './views';
import './index.css'
import routes from './routes';
function App() {
  return (
      <Router>
        <Header/>
        {routes.map(route=> <Route exact path={route.path} component={route.component}/>)}
        <Footer/>
      </Router>
    
  );
}

export default App;
