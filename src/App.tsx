import React from 'react';
import './App.css';
import Cards from './components/Cards';
//graphql + apollo-client
import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient, gql} from 'apollo-boost';

//api query
const httpLink = createHttpLink({
  uri:'https://countries.trevorblades.com/'
});
//cache
const cache = new InMemoryCache();

//apollo client
const client = new ApolloClient({
  link: httpLink,
  cache
});

// writing a GraphQL query example with QUERY METHOD (or we can create  QUERY COMPONENT or use useQuery HOOK!) !!!
//QUERY METHOD
client.query({
query: gql`
{
  country(code:"PL") {
    name
  }
}
`
}).then(response => console.log("response:",response.data));

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Cards/>
    </div>
    </ApolloProvider>
  );
}

export default App;
 