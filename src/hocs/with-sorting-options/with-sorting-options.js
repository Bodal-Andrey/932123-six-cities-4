import React from "react";

const withSortingOptions = (Component) => {
  class WithSortingOptions extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {isOpen: false};

      this.onMenuClick = this.onMenuClick.bind(this);
      this.onMenuExit = this.onMenuExit.bind(this);
    }

    onMenuClick() {
      this.setState((state) => ({isOpen: !state.isOpen}));
    }

    onMenuExit() {
      this.setState({isOpen: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          onMenuClick={this.onMenuClick}
          onMenuExit={this.onMenuExit}
          isOpen={this.state.isOpen}
        />
      );
    }
  }
  return WithSortingOptions;
};

export default withSortingOptions;
