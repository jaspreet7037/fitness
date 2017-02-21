import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Relay from 'react-relay'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { FitnessContainer, FitnessRoute } from './Fitness'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Route exact path="/" children={({ match }) => {
            return match ?
              <Relay.RootContainer
                Component={FitnessContainer}
                route={new FitnessRoute()}
              /> : null
          }}/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App