import {
  GraphQLObjectType
} from 'graphql'

import AddWorkoutMutation from './add-workout'

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddWorkout: AddWorkoutMutation
  })
})

export default RootMutationType

