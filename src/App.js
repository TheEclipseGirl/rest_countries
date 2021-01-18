import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeContainer from './components/HomeContainer';
import DetailsContainer from './components/DetailsContainer';
function App() {
  return (
    <Router>
     
     <Switch>
        <Route exact path="/">
          <HomeContainer/>
        </Route>
        <Route path="/details/:country">
          <DetailsContainer/>
        </Route>
    </Switch>

    </Router>
  );
}

export default App;
