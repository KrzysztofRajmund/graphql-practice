import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loader from '../components/Loader';
import Cards  from '../components/Cards';
const GET_COUNTIRES = gql`
{
    countries {
        name
        capital
        currency
      }
}
`

const CountriesCollection = () => (
    <Query query={GET_COUNTIRES}>
{/* query function  */}
    </Query>
)

export default CountriesCollection;
