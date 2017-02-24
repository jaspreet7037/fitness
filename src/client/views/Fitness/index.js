import React, { Component } from 'react'
import Relay from 'react-relay'
import styles from './styles.css'
import WorkoutCard from '../../components/WorkoutCard'
import CreateWorkoutMutation from '../../mutations/CreateWorkoutMutation'

class FitnessRoute extends Relay.Route {
  static routeName = 'Fitness'
  static queries = {
    store: (Component) => Relay.QL`
                query MainQuery {
                 store { ${Component.getFragment('store')} }
                 }
               `
  }
}


class Fitness extends Component {



  render() {
    return (
      <div className={styles.fitnessBody}>


        <div className={styles.fitnessCardsContainer}>
          {
            this.props.store.workoutConnection.edges.map((edge) => <WorkoutCard key={edge.node.id}
                                                                                id={edge.node.id}
                                                                                workout={edge.node}/>)
          }
        </div>
      </div>
    )
  }
}

const FitnessContainer = Relay.createContainer(Fitness, {
  initialVariables: {
    limit: 100,
  },
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        id,
        workoutConnection(first: $limit) {
          edges {
            node {
              id
              ${WorkoutCard.getFragment('workout')}
            }
          }
        }
      }
    `
  }
})


export {
  FitnessContainer,
  FitnessRoute
}

