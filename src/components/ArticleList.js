import React, { Component } from "react";
import Article from "./Article";
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filteredArticlesSelector } from "../selectors";
import { loadAllArticles } from "../AC";
import Loader from "./Loader";

class ArticleList extends Component {
  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loading, loaded, loadAllArticles } = this.props;
    if (!loaded || !loading) loadAllArticles();
  }

  // static defaultProps = { articles: [] };

  render() {
    const { articles, loading, toggleOpenItem, openItemId } = this.props;
    if (loading) return <Loader/>;
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

export default connect((state) => {
  return {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  };
}, { loadAllArticles })(accordion(ArticleList));