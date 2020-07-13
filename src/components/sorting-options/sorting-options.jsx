import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SortingTypes, SortingTypeNames} from "../../const.js";

class SortingOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this._handleMenuClick = this._handleMenuClick.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
  }

  _handleMenuClick() {
    this.setState((state) => ({isOpen: !state.isOpen}));
  }

  _handleOptionClick(sortType) {
    const {onSortItemClick} = this.props;

    this.setState({isOpen: false});
    onSortItemClick(sortType);
  }

  _getMenuClass(type) {
    const sortType = this.props;
    return `places__option ${type === sortType ? ` places__option--active` : ``}`;
  }

  render() {
    const {sortType} = this.props;
    const isOpen = this.state.isOpen;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this._handleMenuClick} className="places__sorting-type" tabIndex="0">{SortingTypeNames[sortType]}</span>
        <ul onClick={(evt) => this._handleOptionClick(evt)} className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          <li onClick={() => this._handleOptionClick(SortingTypes.POPULAR)} className={this._getMenuClass(SortingTypes.POPULAR)} tabIndex="0">Popular</li>
          <li onClick={() => this._handleOptionClick(SortingTypes.PRICE_LOW_TO_HIGH)} className={this._getMenuClass(SortingTypes.PRICE_LOW_TO_HIGH)} tabIndex="0">Price: low to high</li>
          <li onClick={() => this._handleOptionClick(SortingTypes.PRICE_HIGH_TO_LOW)} className={this._getMenuClass(SortingTypes.PRICE_HIGH_TO_LOW)} tabIndex="0">Price: high to low</li>
          <li onClick={() => this._handleOptionClick(SortingTypes.TOP_RATED_FIRST)} className={this._getMenuClass(SortingTypes.TOP_RATED_FIRST)} tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  sortType: PropTypes.oneOf(
      [
        SortingTypes.POPULAR,
        SortingTypes.PRICE_LOW_TO_HIGH,
        SortingTypes.PRICE_HIGH_TO_LOW,
        SortingTypes.TOP_RATED_FIRST
      ]
  ).isRequired,
  onSortItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    sortType: state.sortType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSortItemClick(sortType) {
    dispatch(ActionCreator.sortChange(sortType));
  }
});

export {SortingOptions};

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
