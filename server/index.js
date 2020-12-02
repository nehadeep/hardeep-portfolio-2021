
const express = require('express')
const next = require('next');

const {ApolloServer, gql} = require('apollo-server-express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//resolvers
const {portfolioMutations, portfoliosQueries} = require('./graphql/resolvers/index');

//types

const {portfolioTypes} = require('./graphql/types/index');

app.prepare().then(() => {
    const server = express();

    //Schema construction using graphql
    const typeDefs = gql`
    
         ${portfolioTypes}
    
          type Query {
           hello: String,
           portfolio(id: ID): Portfolio
           portfolios: [Portfolio]
          }
          
          type Mutation {
          
            createPortfolio(input: PortfolioInput): Portfolio
            updatePortfolio(id: ID, input: PortfolioInput) : Portfolio
            deletePortfolio(id: ID) : ID
            
          }
    `;

    //the root provides a resolver for each api end point --> resolvers
    const resolvers = {
        Query:{
            ...portfoliosQueries
        },
        Mutation: {
            ...portfolioMutations
        }

    };

    const apolloServer = new ApolloServer({typeDefs, resolvers});
    apolloServer.applyMiddleware({app: server});

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    });
});