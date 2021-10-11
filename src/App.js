import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const stdntLoggedIn = false;
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        { stdntLoggedIn? "Home" : "Login" }
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
