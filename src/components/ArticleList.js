import React from "react";
import Article from "./Article";
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";

function ArticleList({ articles = [], toggleOpenItem, openItemId }) {

  const articleElements = articles.map((article) => <li key={article.id} >
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

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  //from accordion
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticleList);