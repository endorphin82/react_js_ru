import React, { Component } from "react";
import ArticleList from "../ArticleList";
import { Route } from "react-router-dom";
import Article from "../Article";

class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList/>
        <Route exact path="/articles" render={this.getIndex}/>
        <Route path="/articles/:id" render={this.getArticle}/>
      </div>
    );
  }

  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id}/>;
  };

  getIndex = () => {
    return <h2>Please select article</h2>;
  };
}

export default Articles;