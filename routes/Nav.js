import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "../components/Home";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} initial={true} hideNavBar={true} />
    </Scene>
  </Router>
);
export default Routes;