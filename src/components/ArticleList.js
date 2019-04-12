import React, { Component } from "react";
import Article from "./Article";
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ArticleList extends Component {
  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };
  // static defaultProps = { articles: [] };

  render() {
    const { articles, toggleOpenItem, openItemId } = this.props;

    const articleElements = articles.map((article) => <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openItemId}
        toggleOpen={toggleOpenItem(article.id)}
      />
    </li>);

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}

export default connect(state => ({
  articles: state.articles
}), null)(accordion(ArticleList));