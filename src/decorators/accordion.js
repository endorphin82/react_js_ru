import React from "react";

export default (OriginalComponent) => class Accordion extends React.Component {
  state = {
    openItemId: null
  };

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId}/>;
  }

  toggleOpenItem = (openItemId) => () => {
    this.setState({ openItemId: openItemId === this.state.openItemId ? null : openItemId });
    console.log(openItemId);
  }
}