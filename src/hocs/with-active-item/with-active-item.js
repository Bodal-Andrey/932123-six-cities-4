import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItemId: null};

      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(id) {
      this.setState({activeItemId: id});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItemId={this.state.activeItemId}
          onActiveItemChange={this.handleActiveItemChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
