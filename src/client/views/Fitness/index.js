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

  handleSubmit = (e) => {
    e.preventDefault()
    Relay.Store.update(
      new CreateWorkoutMutation({
        workout: this.refs.Workout.value,
        workoutDate: this.refs.WorkoutDate.value,
        duration: this.refs.Duration.value,
        calories: this.refs.Calories.value,
        fatBurnTime: this.refs.FatBurnTime.value,
        fitnessTime: this.refs.FitnessTime.value,
        avgHeartRate: this.refs.AvgHeartRate.value,
        maxHeartRate: this.refs.MaxHeartRate.value,
        workoutType: this.refs.WorkoutType.value,
        store: this.props.store
      })
    )
  }


  render() {
    return (
      <div className={styles.fitnessBody}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Workout" ref="Workout"/>
          <input type="text" placeholder="WorkoutDate" ref="WorkoutDate"/>
          <input type="text" placeholder="Duration" ref="Duration"/>
          <input type="text" placeholder="Calories" ref="Calories"/>
          <input type="text" placeholder="FatBurnTime" ref="FatBurnTime"/>
          <input type="text" placeholder="FitnessTime" ref="FitnessTime"/>
          <input type="text" placeholder="AvgHeartRate" ref="AvgHeartRate"/>
          <input type="text" placeholder="MaxHeartRate" ref="MaxHeartRate"/>
          <input type="text" placeholder="WorkoutType" ref="WorkoutType"/>
          <button type="submit">Add Workout</button>
        </form>

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

