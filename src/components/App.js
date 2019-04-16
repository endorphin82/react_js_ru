import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";

// import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Main menu</h2>
          <nav>
            <ul>
              <li><NavLink
                activeStyle={{ color: "tomato" }}
                to="/counter">Counter</NavLink></li>
              <li><NavLink
                activeStyle={{ color: "tomato" }}
                to="/filters">Filters</NavLink></li>
              <li><NavLink
                activeStyle={{ color: "tomato" }}
                to="/articles">Articles</NavLink></li>
            </ul>
          </nav>
        </div>
        <UserForm/>
        <Route path="/counter" component={Counter}/>
        <Route path="/filters" component={() => <Filters articles={[]}/>}/>
        <Route path="/articles" component={ArticleList}/>
      </Router>
    );
  }
}

export default App;