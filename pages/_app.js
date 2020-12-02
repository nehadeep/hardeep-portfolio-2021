import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss';
import Navbar from "../components/shared/Navbar";
import Hero from "../components/shared/Hero";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from '@apollo/react-hooks';
//import 'isomorphic-unfetch';


const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
});

const MyApp =({Component, pageProps}) =>{

const isHomePage = () => Component.name === 'Home';

  return(
      <ApolloProvider client={client}>
      <div className="portfolio-app">
        <Navbar/>
          {isHomePage() &&  <Hero/>}
          <div className="container">
         <Component {...pageProps} />
        </div>
          {/* FOOTER STARTS */}
          {isHomePage() && <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
              <div className="container text-center">
                  <small>Copyright &copy; Your Website</small>
              </div>
          </footer>
          }
      </div>
      </ApolloProvider>
  )
};

// MyApp.getInitialProps = async (context) =>{
//  console.log("contect", context);
// }

export default MyApp;
