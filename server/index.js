const express = require('express')
const next = require('next');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();


const { portfoliosData }= require('./resources/portfolios_data');

const data = {
    portfolios : portfoliosData
};

app.prepare().then(() => {
    const server = express();

    //Schema construction using graphql
    const schema = buildSchema(`
    type Portfolio {
        _id: ID,
        title: String,
        company: String,
        companyWebsite: String,
        location: String,
        jobTitle: String,
        description: String,
        startDate: String,
        endDate: String,
    }
    
      type Query {
       hello: String,
       portfolios: [Portfolio]
      }
    `);

    //the root provides a resolver for each api end point --> resolvers
    const root = {
      hello: () =>{
          return "hello"
      },
      portfolios: () => {
          return data.portfolios;
      }
    };

    server.use('/graphql', graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    }));

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})