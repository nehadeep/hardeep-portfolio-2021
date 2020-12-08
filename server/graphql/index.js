
const {ApolloServer, gql} = require('apollo-server-express');
//resolvers
const {userQueries,portfolioMutations, portfoliosQueries, userMutations} = require('./resolvers');

//types

const {portfolioTypes, userTypes} = require('./types');

const {buildAuthContext} = require('./context');


//GRAPHQL models
const Portfolio = require('./models/Portfolio');
const User = require('./models/User');


//DATABASE MODELS

const databasePortfolio = require('../database/models/portfolio');
const databaseUser = require('../database/models/user');


exports.createApolloServer = () =>{

    //Schema construction using graphql
    const typeDefs = gql`
    
         ${portfolioTypes}
         ${userTypes}
    
          type Query {
           portfolio(id: ID): Portfolio
           portfolios: [Portfolio]
           user: User
          }
          
          type Mutation {
          
            createPortfolio(input: PortfolioInput): Portfolio
            updatePortfolio(id: ID, input: PortfolioInput) : Portfolio
            deletePortfolio(id: ID) : ID
            signUp(input: SignUpInput): String

            signIn(input: SignInInput): User
            signOut: Boolean
            
          }
    `;

    //the root provides a resolver for each api end point --> resolvers
    const resolvers = {
        Query:{
            ...portfoliosQueries,
            ...userQueries
        },
        Mutation: {
            ...portfolioMutations,
            ...userMutations
        }

    };

    const apolloServer = new ApolloServer({typeDefs, resolvers,
        context:({req})=> ({
            ...buildAuthContext(req),
            models: {
                Portfolio: new Portfolio(databasePortfolio),
                User: new User(databaseUser)
            }
        })
    });

    return apolloServer;
}