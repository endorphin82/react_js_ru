import React, { Component } from "react";
import ArticleList from "./ArticleList";
import ArticlesChart from "./ArticlesChart";
import UserForm from "./UserForm";
import Select from "react-select";
import "./app.css";

class App extends Component {
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
    return (
      <div>
        <UserForm/>
        <Select
          isMulti
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <ArticleList articles={this.props.articles}/>
        <ArticlesChart articles={this.props.articles}/>
      </div>
    );
  }
}

export default App;