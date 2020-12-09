import withApollo from 'next-with-apollo';
import{ ApolloClient, ApolloProvider , InMemoryCache } from '@apollo/client';
import moment from "moment";

export default withApollo(
    ({ initialState }) => {
        return new ApolloClient({
            uri: 'http://localhost:3000/graphql',
            cache: new InMemoryCache().restore(initialState || {}),
            resolvers: {
                Portfolio: {
                    daysOfExperience({startDate, endDate}, args, {cache}){
                        let now = moment().unix();
                        if(endDate){
                            now = endDate/1000;

                        }
                        return moment.unix(now).diff(moment.unix(startDate/1000), 'days')
                    }
                }
            }
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        }
    }
);