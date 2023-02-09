import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "http://localhost:3000/",
	});

	return (
		<Router>
			<ApolloProvider client={client}>
				<Navbar />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/create-note" element={<Form />} />
					<Route index element={<Login />} />
				</Routes>
			</ApolloProvider>
		</Router>
	);
}

export default App;
