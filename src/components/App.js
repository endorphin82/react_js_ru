import React, { Component } from "react";
import ArticleList from "./ArticleList";
import ArticlesChart from "./ArticlesChart";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";

// import "./app.css";

class App extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div>
        <Counter/>
        <UserForm/>
        <Filters articles={articles}/>
        <ArticleList articles={this.props.articles}/>
        <ArticlesChart articles={this.props.articles}/>
      </div>
    );
  }
}

export default App;