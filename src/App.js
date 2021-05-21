import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './layoutes/Home'

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
         <Header />
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
