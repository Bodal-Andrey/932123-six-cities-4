import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItemId: null};

      this.onActiveItemChange = this.onActiveItemChange.bind(this);
    }

    onActiveItemChange(id) {
      this.setState({activeItemId: id});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItemId={this.state.activeItemId}
          onActiveItemChange={this.onActiveItemChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
