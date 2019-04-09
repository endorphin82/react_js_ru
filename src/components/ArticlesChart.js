import React, { Component } from "react";

class ArticlesChart extends Component {
  componentDidMount() {
    //d3 work with this.refs.chart
  }

  componentWillReceiveProps(nextProps) {
    //update chart for new articles
  }

  render() {
    return <div ref="chart"/>;
  }

  componentWillUnmount() {
    //do some cleanup
  }

}

export default ArticlesChart;