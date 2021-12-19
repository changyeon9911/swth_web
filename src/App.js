import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useReactiveVar, ApolloProvider } from "@apollo/client";
import { darkModeVar, isLoggedInUserVar, isLoggedInAsWhoVar, client } from './apollo';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import { HelmetProvider } from "react-helmet-async";
import Main from './screens/Main';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';
import routes from './routes';
import FreeRegister from "./screens/FreeRegister";
import SignHeader from "./components/SignHeader";
import MyPageHeader from "./components/mypage/MyPageHeader";
import MyPageProfile from "./components/mypage/MyPageProfile";
import MyPageNav from "./components/mypage/MyPageNav";
import MyCourses from "./screens/MyCourses";
import RegisterCourse from "./screens/RegisterCourse";
import GroupCourse from "./screens/GroupCourse";
import MasterCourse from "./screens/MasterCourse";
import GroupCourseThree from "./screens/GroupCourseTwo";
import GroupCourseTwo from "./screens/GroupCourseThree";
import GroupCourseOne from "./screens/GroupCourseOne";
import EditTried from "./screens/EditTried";
import CourseRoad from "./screens/CourseRoad";

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
      <Switch>
        <Route path={routes.main} exact>
          <Main/>
        </Route>
        {!isLoggedInUser? (
        <Route path={routes.login} exact>
          <SignHeader/>
          <Login/>
        </Route>
        ) : null}
        {!isLoggedInUser? (
        <Route path={routes.signUp} exact>
          <SignHeader/>
          <SignUp/>
        </Route>
        ) : null}
        {isLoggedInUser? (
        <Route path={routes.freeRegister} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <FreeRegister/>
        </Route>
        ) : (
        <Route path={routes.freeRegister} exact>
          <SignHeader/>
          <Login/>
        </Route>)}
        {isLoggedInUser? (
        <Route path={routes.editTried} exact>
          <EditTried/>
        </Route>
        ) : (
        <Route path={routes.editTried} exact>
          <SignHeader/>
          <Login/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.registerCourse} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <RegisterCourse/>
        </Route>
        ) : (
        <Route path={routes.registerCourse} exact>
          <SignHeader/>
          <Login/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.myCourses} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <MyCourses/>
        </Route>
        ) : (
        <Route path={routes.myCourses} exact>
          <SignHeader/>
          <Login/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.masterCourse} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <MasterCourse/>
        </Route>
        ) : (
        <Route path={routes.masterCourse} exact>
          <SignHeader/>
          <MasterCourse/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.groupCourse} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <GroupCourse/>
        </Route>
        ) : (
        <Route path={routes.groupCourse} exact>
          <SignHeader/>
          <GroupCourse/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.gl1} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <GroupCourseOne/>
        </Route>
        ) : (
        <Route path={routes.gl1} exact>
          <SignHeader/>
          <GroupCourseOne/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.gl2} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <GroupCourseTwo/>
        </Route>
        ) : (
        <Route path={routes.gl2} exact>
          <SignHeader/>
          <GroupCourseTwo/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.gl3} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <GroupCourseThree/>
        </Route>
        ) : (
        <Route path={routes.gl3} exact>
          <SignHeader/>
          <GroupCourseThree/>
        </Route>
        )}
        {isLoggedInUser? (
        <Route path={routes.courseRoad} exact>
          <MyPageHeader/>
          <MyPageProfile/>
          <MyPageNav/>
          <CourseRoad/>
        </Route>
        ) : (
        <Route path={routes.courseRoad} exact>
          <SignHeader/>
          <Login/>
        </Route>
        )}
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
