import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filteredArticlesSelector } from "../selectors";
import { loadAllArticles } from "../AC";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

class ArticleList extends Component {
  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    const { loading, loaded, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }

  // static defaultProps = { articles: [] };

  render() {
    const { articles, loading } = this.props;
    if (loading) return <Loader/>;
    const articleElements = articles.map((article) => <li key={article.id}>
      <NavLink
        to={`/articles/${article.id}`}
        activeStyle={{ color: "tomato" }}>
        {article.title}
      </NavLink>
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
}, { loadAllArticles })(ArticleList);