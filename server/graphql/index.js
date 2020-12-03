
const mongoose = require('mongoose');
const {ApolloServer, gql} = require('apollo-server-express');
//resolvers
const {portfolioMutations, portfoliosQueries} = require('./resolvers');

//types

const {portfolioTypes} = require('./types');


//GRAPHQL models
const Portfolio = require('./models/Portfolio');


//DATABASE MODELS

const databasePortfolio = require('../database/models/portfolio');


exports.createApolloServer = () =>{

    //Schema construction using graphql
    const typeDefs = gql`
    
         ${portfolioTypes}
    
          type Query {
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

    const apolloServer = new ApolloServer({typeDefs, resolvers,
        context:()=> ({
            models: {
                Portfolio: new Portfolio(databasePortfolio)
            }
        })
    });

    return apolloServer;
}