import {BrowserRouter, Route} from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Drink from './Drink';
import Chips from './Chips';
import IceCreem from './IceCreem';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Route exact path="/">
        <VendingMachine  />
      </Route>
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/icecream">
          <IceCreem/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
