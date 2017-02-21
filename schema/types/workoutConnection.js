import {
  connectionDefinitions,
} from 'graphql-relay'
import WorkoutType from './workout'

const workoutConnection = connectionDefinitions({
  name: 'Workout',
  nodeType: WorkoutType
})

export default workoutConnection