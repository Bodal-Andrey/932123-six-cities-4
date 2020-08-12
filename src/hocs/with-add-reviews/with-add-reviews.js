import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const withAddReviews = (Component) => {
  class WithAddReviews extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        review: ``,
        isActiveSubmit: false
      };

      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmitForm() {
      const {uploadReviews, offerId} = this.props;
      const {rating, review} = this.state;

      uploadReviews(rating, review, offerId);
      this.clearState();
    }

    handleChange(evt) {
      const target = evt.target.name;
      const value = evt.target.value;
      this.setState({[target]: value}, () => {
        this.activeForm();
      });
    }

    activeForm() {
      if (this.state.review.length >= 50 && this.state.rating) {
        this.setState({isActiveSubmit: true});
      } else {
        this.setState({isActiveSubmit: false});
      }
    }

    clearState() {
      this.setState(
          {
            rating: null,
            review: ``,
            isActiveSubmit: false
          }
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitForm={this.handleSubmitForm}
          isActiveSubmit={this.state.isActiveSubmit}
          onChange={this.handleChange}
          rating={this.state.rating}
        />
      );
    }
  }

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => ({
    uploadReviews(rating, review, offerId) {
      dispatch(DataOperation.uploadReviews(rating, review, offerId));
    }
  });

  WithAddReviews.propTypes = {
    uploadReviews: PropTypes.func,
    offerId: PropTypes.number,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReviews);
};

export default withAddReviews;
