import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Relay from 'react-relay'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { FitnessContainer, FitnessRoute } from './Fitness'
import WorkoutForm from './WorkoutForm'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" children={({ match }) => {
              return match ?
                <Relay.RootContainer
                  Component={FitnessContainer}
                  route={new FitnessRoute()}
                /> : null
            }}/>
            <Route path="/input" component={WorkoutForm}/>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App