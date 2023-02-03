import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'
import { Home } from './components/Home'

function App() {

  const client = new ApolloClient( {
    cache : new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>

  )
}

export default App
