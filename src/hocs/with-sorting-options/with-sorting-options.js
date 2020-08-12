import React from "react";

const withSortingOptions = (Component) => {
  class WithSortingOptions extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {isOpen: false};

      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.handleMenuExit = this.handleMenuExit.bind(this);
    }

    handleMenuClick() {
      this.setState((state) => ({isOpen: !state.isOpen}));
    }

    handleMenuExit() {
      this.setState({isOpen: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          onMenuClick={this.handleMenuClick}
          onMenuExit={this.handleMenuExit}
          isOpen={this.state.isOpen}
        />
      );
    }
  }
  return WithSortingOptions;
};

export default withSortingOptions;
