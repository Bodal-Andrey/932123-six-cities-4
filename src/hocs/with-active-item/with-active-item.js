import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItemId: this.props.sourceActiveItemId};

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

  WithActiveItem.propTypes = {
    sourceActiveItemId: PropTypes.any.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
