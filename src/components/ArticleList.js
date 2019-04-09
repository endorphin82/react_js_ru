import React from "react";
import Article from "./Article";

class ArticleList extends React.Component {
  state = {
    openArticleId: null
  };

  render() {
    const articleElements = this.props.articles.map((article) => <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === this.state.openArticleId}
        toggleOpen={this.toggleArticle.bind(this, article.id)}
      />
    </li>);

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }

  toggleArticle(openArticleId) {
    this.setState({ openArticleId });
  }
}

export default ArticleList;