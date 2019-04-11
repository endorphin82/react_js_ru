import React, { Component } from "react";
import Select from "react-select";

class SelectFilter extends Component {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return <Select
      options={options}
      value={selectedOption}
      isMulti
      onChange={this.handleChange}
    />;
  }
}

export default SelectFilter;