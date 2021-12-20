import { makeVar, InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "token";
const AUTHOR = "author";
const TRIED = "tried";

export const isLoggedInUserVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const isLoggedInAsWhoVar = makeVar(String(localStorage.getItem(AUTHOR)));
export const isTriedVar = makeVar(Boolean(localStorage.getItem(TRIED)));
export const tokenVar = makeVar("");

export const logAdminIn = async (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "0");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("0");
  tokenVar(token);
};

export const logTutorIn = async (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "1");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("1");
  tokenVar(token);
};

export const logStdntIn = async (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "2");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("2");
  tokenVar(token);
};

export const logUserOut = async () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(TRIED);
  isLoggedInUserVar(false);
  isLoggedInAsWhoVar("3");
  tokenVar("");
};

export const setTried = async (tried) => {
  localStorage.setItem(TRIED, tried);
  isTriedVar(tried);
};

export const darkModeVar = makeVar(false);

const httpLink = createHttpLink({
  uri: "https://sweethanbackend.herokuapp.com/graphql",
});

const authLink = setContext(async(_, { headers }) => {
  const token = localStorage.getItem(TOKEN);
  return {
    headers: {
      ...headers,
      token,
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});