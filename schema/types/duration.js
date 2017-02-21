import {
  GraphQLObjectType,
  GraphQLInt
} from 'graphql'

const DurationType = new GraphQLObjectType({
  name: 'DurationType',
  fields: {
    minutes: { type: GraphQLInt },
    seconds: { type: GraphQLInt },
    hours: { type: GraphQLInt }
  }
})

export default DurationType