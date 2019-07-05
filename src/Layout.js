import React, { Suspense } from "react";
import { Link, Switch, Route, NavLink, withRouter } from "react-router-dom";
import "./Layout.css";
import FirstPage from "./Components/first-page";
import SecondPage from "./Components/second-page";
import ThirdPage from "./Components/third-page.1";
import ProtectedRoute from "./hoc/protected-route";
import GuardedComponent from "./Components/guarded-component";
import FormPage from './Components/form-page';
import WithSpinner from "./hoc/withSpinner";

const LazyComponent = React.lazy(() =>  import('./Components/lazy-loaded-component'))

const Layout = props => {
  let auth = true;
  let routes = null;

  if (auth) {
    routes = (
      <Switch>
        <Route path="/second" component={SecondPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/third" component={ThirdPage} />
        <ProtectedRoute path="/guardedComponent" component={GuardedComponent} />
        <Route path="/lazyLoadedComponent" render={() => {
            return (<Suspense fallback={<div>Loading....</div>}>
                <LazyComponent/>
            </Suspense>)
        }}></Route>
        <Route path="/" component={props => WithSpinner(FirstPage, props)} />
      </Switch>
    );
  }

  return (
    <div>
      <div className="top">
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/"> Link 1 </NavLink>
        </div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/second"> Link 2 </NavLink>
        </div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/third"> Link 3 </NavLink>
        </div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/guardedComponent"> Link 4 Guarded </NavLink>
        </div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/lazyLoadedComponent"> Link 4 LazyLoaded </NavLink>
        </div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <NavLink to="/form"> Link 5 Form Example </NavLink>
        </div>
      </div>

      <div className="left">Side Bar</div>
      <div className="main">{routes}</div>
    </div>
  );
};

export default Layout;
