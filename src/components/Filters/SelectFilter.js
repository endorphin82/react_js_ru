import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { changeSelection, loadAllArticles } from "../../AC";
import { mapToArr } from "../../helpers";

class SelectFilter extends Component {
  componentDidMount() {
    const { loading, loaded, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }

  handleChange = selected => this.props.changeSelection(selected.map(option => option));

  render() {
    const { articles, selected } = this.props;
    console.log("selected", selected, "articles", articles);
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    console.log("options", options);
    return <Select
      value={selected}
      isMulti
      onChange={this.handleChange}
      options={options}
    />;
  }
}

export default connect(state => ({
  selected: state.filters.selected,
  articles: mapToArr(state.articles.entities),
  loading: state.articles.loading,
  loaded: state.articles.loaded
}), { changeSelection, loadAllArticles }, null, { pure: false })(SelectFilter);