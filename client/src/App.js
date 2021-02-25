import React from 'react';
import './App.css';
import Nav from './Nav';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, useApolloClient} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
function App() {


  return (
    <ApolloProvider client={client}> 
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/Home" component ={Home}/>
      <Route path="/Product" exact component ={Product}/>
      <Route path="/Product/:id"  component={ProductDetail}/>
      </Switch>
    </div>
    </Router>
    </ApolloProvider>
  );

}

export default App;
