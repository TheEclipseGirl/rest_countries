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
import { connect } from "./index";
import { mode } from './reducers';
import { toggleMode } from "./actions";

class App extends Component {

  

  render() {

    // const {mode} = this.state;
    console.log(this.props.mode);
    if(this.props.mode.mode === 'light'){
      document.body.style.backgroundColor = 'white';
    }else{
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }

    return (
    
        <Router>
          <Switch>
              <Route exact path="/">
                <HomeContainer />
              </Route>
              <Route 
                path="/details/:country"
                render={(props) => <DetailsContainer {...props}/>}
              />
          </Switch>
        </Router>
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  }
}
export default connect(mapStateToProps)(App);
