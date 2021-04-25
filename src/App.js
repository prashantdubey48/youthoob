import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import "./_app.scss";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container border border-info">
        <Sidebar handleToggleSidebar={handleToggleSidebar} sidebar={sidebar} />
        <Container fluid className="app__main border warning">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  ///// private route
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
      <Route path="/search">
        <h1>Search Result</h1>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
