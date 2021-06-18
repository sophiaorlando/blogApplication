import TopBar from "./components/TopBar/topBar"
import Home from "./components/Pages/Home/Home"
import Single from "./components/Pages/single/single"
import Write from "./components/Pages/Write/write";
import Settings from "./components/Pages/settings/settings";
import Login from "./components/Pages/login/login";
import Register from "./components/Pages/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {/* if you have logged in already, go to the home page, if not, you have access to the register page */}
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
