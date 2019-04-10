import React, { Component } from "react";
import ArticleList from "./ArticleList";
import ArticlesChart from "./ArticlesChart";
import UserForm from "./UserForm";

class App extends Component {

  render() {
    return (
      <div>
        <UserForm/>
        <ArticleList articles={this.props.articles}/>
        <ArticlesChart articles={this.props.articles}/>
      </div>
    );
  }
}

export default App;