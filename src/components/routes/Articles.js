import React, { Component } from "react";
import ArticleList from "../ArticleList";
import { Route } from "react-router-dom";
import Article from "../Article";

class Articles extends Component {
  render() {
    const { isExact } = this.props.match;
    return (
      <div>
        <ArticleList/>
        {
          isExact
            ? <h2>Please select article</h2>
            : <Route path="/articles/:id" render={this.getArticle}/>
        }
      </div>
    );
  }

  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id}/>;
  };
}

export default Articles;