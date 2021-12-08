import { makeVar, InMemoryCache, ApolloClient } from "@apollo/client";

const TOKEN = "token";

export const isLoggedInStdntVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInStdntVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInStdntVar(false);
};

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
})