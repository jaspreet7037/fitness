import workoutConnection from './workoutConnection'
import pgdbCreator from '../../database/pgdb'
import {
  connectionArgs,
  connectionFromPromisedArray,
  globalIdField
} from 'graphql-relay'
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'


const storeType = new GraphQLObjectType({
  name: 'Store',
  fields: {
    id: globalIdField("Store"),
    workoutConnection: {
      type: workoutConnection.connectionType,
      args: {
        ...connectionArgs,
        date: { type: GraphQLString },
        query: { type: GraphQLString }
      },
      resolve: (obj, args, { unused, pgPool }) => {
        const pgdb = pgdbCreator(pgPool)
        const promisedArray = args.date ? pgdb.getWorkoutsByDate(args.date) : pgdb.getWorkouts()
        return connectionFromPromisedArray(promisedArray, args)
      }
    }
  }
})

export default storeType
