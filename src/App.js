import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useReactiveVar, ApolloProvider } from "@apollo/client";
import { darkModeVar, isLoggedInUserVar, isLoggedInAsWhoVar, client } from './apollo';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import { HelmetProvider } from "react-helmet-async";
import Main from './screens/Main';
import Login from './screens/Login';
import Header from './components/Header';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';
import routes from './routes';

function App() {
  const isLoggedInUser = useReactiveVar(isLoggedInUserVar);
  const isLoggedInAsWho = useReactiveVar(isLoggedInAsWhoVar);
  const darkMode = useReactiveVar(darkModeVar); 
  return (
    <ApolloProvider client={client}>
    <HelmetProvider>
    <ThemeProvider theme = {darkMode? darkTheme : lightTheme}>
    <GlobalStyles />
    <Router>
      <Header/>
      <Switch>
        <Route path={routes.main} exact>
          <Main/>
        </Route>
        {!isLoggedInUser? (
        <Route path={routes.login} exact>
          <Login/>
        </Route>
        ) : null}
        {!isLoggedInUser? (
        <Route path={routes.signUp} exact>
          <SignUp/>
        </Route>
        ) : null}
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
    </HelmetProvider> 
    </ApolloProvider> 
  );
}

export default App;
