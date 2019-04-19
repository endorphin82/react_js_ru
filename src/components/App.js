import React, { Component } from "react";
import Articles from "./routes/Articles";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import NotFound from "./routes/NotFound";
import NewArticle from "./routes/NewArticle";
import CommentsPage from "./routes/CommentsPage";
import { NavLink, Route, Switch } from "react-router-dom";
import { history } from "../history";
import { ConnectedRouter } from 'connected-react-router'


// import "./app.css";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
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
          <Route path="/comments" component={CommentsPage}/>
          {/*<Redirect from='/comments/' to="/comments/1"/>*/}
          <Route path="*" component={NotFound}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;