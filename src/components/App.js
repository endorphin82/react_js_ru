import React, { Component } from "react";
import ArticleList from "./ArticleList";
import ArticlesChart from "./ArticlesChart";

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles}/>
        <ArticlesChart articles={this.props.articles}/>
      </div>
    );
  }
}

export default App;