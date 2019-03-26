import React, { Component } from 'react';
import { Header  } from '../src/components'
import { Provider } from 'react-redux'
import  store  from './store'
import Approutes from './routes'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Approutes/>
        </Provider>
      </div>
    );
  }
}

export default App;
