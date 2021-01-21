import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

export const StoreContext = createContext('');

export function connect (callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const {store} = this.props;
        const state = store.getState();
        const dataToBePassesAsProps = callback(state);
        return (
          <Component {...this.props} {...dataToBePassesAsProps} dispatch={store.dispatch} />
        );
      }
    }

    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => <ConnectedComponent {...this.props} store={store}/>}
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  }
}

ReactDOM.render(
  <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);