import express from 'express'
import compression from 'compression'
import { resolve } from 'path'
import graphqlHTTP from 'express-graphql'
import pgPool from './pgPool'
import schema from '../../schema'

/* START code for writing out graphql schema for babel relay plugin */

// import { graphql } from 'graphql'
// import { introspectionQuery } from 'graphql/utilities'

// graphql(schema, introspectionQuery).then((data) => {
//   console.log('writing data')
//   fs.writeFile('/home/jsjaspreet/dev/projects/rgr-links/linksSchema.json', JSON.stringify(data, null, 2), err => {
//     if (err) throw err
//     console.log("Wrote json schema")
//   })
// })

/* END */

const nodeEnv = process.env.NODE_ENV || "development"
const port = process.env.PORT || "9090"

console.log(`Running in ${nodeEnv}`)

const app = express()
app.use(compression())


app.get('/api/status', (req, res) => res.send({"hello": "world"}))
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      pgPool
    }
  })
)


// static
const maxAge = nodeEnv === "production" ? 1000 * 60 * 60 * 24 * 30 : 0
app.use("/build", express.static(resolve('./build'), { maxAge }))

app.all('*', (req, res) => {
  res.sendFile(resolve('./build/index.html'))
})

app.listen(port, console.log(`Running app at ${port}`))
