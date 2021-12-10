import { makeVar, InMemoryCache, ApolloClient } from "@apollo/client";

const TOKEN = "token";
const AUTHOR = "author";
const ADMIN = "0";
const TUTOR = "1";
const STDNT = "2";
const UNKWN = "3";

export const isLoggedInUserVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const isLoggedInAsWhoVar = makeVar(String(localStorage.getItem(AUTHOR)));

export const logAdminIn = (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "0");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("0");
};

export const logTutorIn = (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "1");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("1");
};

export const logStdntIn = (token) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(AUTHOR, "2");
  isLoggedInUserVar(true);
  isLoggedInAsWhoVar("2");
};


export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInUserVar(false);
  isLoggedInAsWhoVar("3");
};

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
    uri: "https://sweethanbackend.herokuapp.com/graphql",
    cache: new InMemoryCache(),
})