import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SortingTypes, SortingTypeNames} from "../../const.js";
import withSortingOptions from "../../hocs/with-sorting-options/with-sorting-options.js";

class SortingOptions extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleOptionClick = this._handleOptionClick.bind(this);
  }

  _handleOptionClick(sortType) {
    const {onSortItemClick, onMenuExit} = this.props;

    onMenuExit();
    onSortItemClick(sortType);
  }

  _getMenuClass(type) {
    const sortType = this.props;
    return `places__option ${type === sortType ? ` places__option--active` : ``}`;
  }

  render() {
    const {sortType, onMenuClick, isOpen} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={onMenuClick} className="places__sorting-type" tabIndex="0">{SortingTypeNames[sortType]}</span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
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
  onMenuExit: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withSortingOptions(SortingOptions));
