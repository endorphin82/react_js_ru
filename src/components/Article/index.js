import React, { Component, PureComponent } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import CommentList from "../CommentList";
import "./style.css";

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "close" : "open"}</button>
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

  setContainerRef = (ref) => {
    this.container = ref;
    // console.log(ref);
  };

  getBody() {
    const { article, isOpen } = this.props;
    console.log("upd");
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <button onClick={() => this.setState({ updateIndex: this.state.updateIndex + 1 })}>update</button>
        <CommentList key={this.state.updateIndex} comments={article.comments} ref={this.setCommentsRef}/>
      </section>
    );
  }

  setCommentsRef = ref => {
    // console.log("ref", findDOMNode(ref));
  };
}

export default Article;