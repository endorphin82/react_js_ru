import React, { Component, PureComponent } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import CommentList from "../CommentList";
import "./style.css";
import { connect } from "react-redux";
import { deleteArticle, loadArticle } from "../../AC";
import Loader from "../Loader";

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  state = {
    updateIndex: 0
  };

  componentWillReceiveProps({ isOpen, loadArticle, article }) {
    // if (!this.props.isOpen && isOpen)
    if (!this.props.isOpen && isOpen && !article.text && !article.loading) loadArticle(article.id);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "close" : "open"}
        </button>
        <button onClick={this.handleDelete}>delete me</button>
        <CSSTransitionGroup
          transitionName="article"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}>
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    console.log("deleting article", article.id);
    deleteArticle(article.id);
  };

  setContainerRef = (ref) => {
    this.container = ref;
    // console.log(ref);
  };

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    if (article.loading) return <Loader/>;
    return (
      <section>
        {article.text}
        <button onClick={() => this.setState({ updateIndex: this.state.updateIndex + 1 })}>update</button>
        <CommentList key={this.state.updateIndex} article={article} ref={this.setCommentsRef}/>
      </section>
    );
  }

  setCommentsRef = ref => {
    // console.log("ref", findDOMNode(ref));
  };
}

export default connect(null, { deleteArticle, loadArticle })(Article);