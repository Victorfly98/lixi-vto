import { createBrowserHistory } from "history";
import { Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<Route exact path="/" component={Home} />
			{/* <Route exact path="/lixi" component={Home} /> */}
		</Router>
	);
}

export default App;
