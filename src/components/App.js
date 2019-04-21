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
import { ConnectedRouter } from "connected-react-router";
import PropTypes from "prop-types";
import LangProvider from "./LangProvider";


// import "./app.css";

class App extends Component {
  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.username
    };
  }

  state = {
    username: "",
    language: "ru"
  };

  changeLanguage = language => ev => this.setState({ language });

  render() {
    return (
      <ConnectedRouter history={history}>
        <LangProvider language={this.state.language}>
          <div>
            <ul>
              <li onClick={this.changeLanguage("en")}>English</li>
              <li onClick={this.changeLanguage("ru")}>Russian</li>
            </ul>
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
          <UserForm value={this.state.username} onChange={this.handleUserChange}/>
          <Switch>
            <Route path="/counter" component={Counter}/>
            <Route path="/filters" render={() => <Filters articles={[]}/>}/>
            <Route path="/articles/new" component={NewArticle}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/comments" component={CommentsPage}/>
            {/*<Redirect from='/comments/' to="/comments/1"/>*/}
            <Route path="*" component={NotFound}/>
          </Switch>
        </LangProvider>
      </ConnectedRouter>
    );
  }

  handleUserChange = (username) => this.setState({ username });

}


export default App;