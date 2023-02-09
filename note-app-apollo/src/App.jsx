import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';


function App() {
  
  const client = new ApolloClient( {
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/"
  })

  return (
    <ApolloProvider client={client}>
     <Home />
    </ApolloProvider>
   
  )
}

export default App
