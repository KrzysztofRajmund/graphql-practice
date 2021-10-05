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

// writing a GraphQL query that asks for names and codes for all countries
client.query({
query: gql`
{
  countries {
    name
    code
  }
}
`
}).then(response => console.log("response:",response));

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
 