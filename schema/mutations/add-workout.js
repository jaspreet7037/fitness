import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

import {
  mutationWithClientMutationId
} from 'graphql-relay'

import pgPool from '../../src/server/pgPool'

import pgdbCreator from '../../database/pgdb'
import WorkoutConnectionType from '../types/workoutConnection'
import storeType from '../types/store'


const createWorkoutMutation = mutationWithClientMutationId({
  name: 'CreateWorkout',
  inputFields: {
    workout: { type: new GraphQLNonNull(GraphQLString) },
    workoutDate: { type: new GraphQLNonNull(GraphQLString) },
    duration: { type: new GraphQLNonNull(GraphQLString) },
    calories: { type: new GraphQLNonNull(GraphQLInt) },
    fatBurnTime: { type: new GraphQLNonNull(GraphQLString) },
    fitnessTime: { type: new GraphQLNonNull(GraphQLString) },
    avgHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
    maxHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
    workoutType: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    workout: {
      type: WorkoutConnectionType.edgeType,
      resolve: (obj) => ({ node: obj, cursor: obj.id })
    },
    store: {
      type: storeType,
      resolve: () => ({})
    }
  },
  mutateAndGetPayload: (input) => {
    const pgdb = pgdbCreator(pgPool)
    return pgdb.addNewWorkout(input)
  }
})

// const WorkoutInputType = new GraphQLInputObjectType({
//   name: 'WorkoutInput',
//   fields: {
//     workout: { type: new GraphQLNonNull(GraphQLString) },
//     workoutDate: { type: new GraphQLNonNull(GraphQLString) },
//     duration: { type: new GraphQLNonNull(GraphQLString) },
//     calories: { type: new GraphQLNonNull(GraphQLInt) },
//     fatBurnTime: { type: new GraphQLNonNull(GraphQLString) },
//     fitnessTime: { type: new GraphQLNonNull(GraphQLString) },
//     avgHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
//     maxHeartRate: { type: new GraphQLNonNull(GraphQLInt) },
//     workoutType: { type: new GraphQLNonNull(GraphQLString) }
//   }
// })
//
// const WorkoutInput = {
//   type: WorkoutType,
//   args: {
//     input: { type: new GraphQLNonNull(WorkoutInputType) }
//   },
//   resolve(obj, { input }, { pgPool }) {
//     const pgdb = pgdbCreator(pgPool)
//     return pgdb.addNewWorkout(input)
//   }
// }

export default createWorkoutMutation
