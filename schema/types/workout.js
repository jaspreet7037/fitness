import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import DurationType from './duration'

const WorkoutType = new GraphQLObjectType({
  name: 'WorkoutType',
  fields: {
    id: { type: GraphQLID },
    workout: { type: new GraphQLNonNull(GraphQLString) },
    workoutDate: { type: new GraphQLNonNull(GraphQLString) },
    duration: { type: new GraphQLNonNull(DurationType) },
    calories: { type: new GraphQLNonNull(GraphQLInt) },
    fatBurnTime: { type: new GraphQLNonNull(DurationType) },
    fitnessTime: { type: new GraphQLNonNull(DurationType) },
    avgHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
    maxHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
    workoutType: { type: new GraphQLNonNull(GraphQLString) }
  }
})

export default WorkoutType