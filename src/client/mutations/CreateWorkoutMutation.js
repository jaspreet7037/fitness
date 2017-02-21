import Relay from 'react-relay'

class CreateWorkoutMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`
    mutation  { AddWorkout }
    `
  }

  getVariables() {
    return {
      workout: this.props.workout,
      workoutDate: this.props.workoutDate,
      duration: this.props.duration,
      calories: this.props.calories,
      fatBurnTime: this.props.fatBurnTime,
      fitnessTime: this.props.fitnessTime,
      avgHeartRate: this.props.avgHeartRate,
      maxHeartRate: this.props.maxHeartRate,
      workoutType: this.props.workoutType,
    }
  }

  getFatQuery() {
    return Relay.QL`
    fragment on CreateWorkoutPayload {
      workout,
      store { workoutConnection }
    }
    `
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'store',
      parentID: this.props.store.id,
      connectionName: 'workoutConnection',
      edgeName: 'workout',
      rangeBehaviors: {
        '': 'append'
      }
    }]


  }

}

export default CreateWorkoutMutation