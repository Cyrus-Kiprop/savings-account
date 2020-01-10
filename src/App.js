import React from "react";
import "./assets/css/index.css";
import { Route, Switch } from "react-router-dom";

// Components Improtations
import Homepage from "./components/Home/Homepage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutPage from "./components/About/AboutPage.jsx";
import LearnPage from "./components/Learn/LearnPage.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/about" component={AboutPage} />
        <Route path="/learning-resources" component={LearnPage} />
        {/* <Route path="/course/:slug" component={ManageCoursePage} />  */}

        {/* The route /course/:slug should come first before the /course route to avooid premature matching */}
        {/* <Route path="/course" component={ManageCoursePage} /> */}

        {/* <Route component={PageNotFound} /> */}
      </Switch>
      {/* <ToastContainer autoClose={3000} hideProgressBar /> */}
    </div>
  );
}

export default App;
