import React, { Component } from "react";
import Articles from "./routes/Articles";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import NotFound from "./routes/NotFound";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import NewArticle from "./routes/NewArticle";

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
        <Switch>
          <Route path="/counter" component={Counter}/>
          <Route path="/filters" render={() => <Filters articles={[]}/>}/>
          <Route path="/articles/new" component={NewArticle}/>
          <Route path="/articles" component={Articles}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;