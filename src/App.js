import {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeContainer from './components/HomeContainer';
import DetailsContainer from './components/DetailsContainer';
import { modeContext } from "./components/modeContext";


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      mode:"light"
    }
  }
  
  toggleMode=()=>{
    this.setState({
        mode:"dark"
    })
    this.state.mode === "light" ? 
    this.setState({
        mode:"dark"
        
    })
    : this.setState({
        mode:"light"
    })
}

  render() {

    const {mode} = this.state;

    if(mode === 'light'){
      document.body.style.backgroundColor = 'white';
    }else{
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }

    return (
      <modeContext.Provider value={mode}>
        <Router>
          <Switch>
              <Route exact path="/">
                <HomeContainer
                  toggleMode={this.toggleMode}
                />
              </Route>
              <Route path="/details/:country">
                <DetailsContainer
                  toggleMode={this.toggleMode}
                />
              </Route>
          </Switch>
        </Router>
      </modeContext.Provider>
    );
  }
}

export default App;
