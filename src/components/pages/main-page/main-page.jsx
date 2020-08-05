import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesList from "../../cities-list/cities-list.jsx";
import CitiesContainer from "../../cities-container/cities-container.jsx";
import MainEmpty from "../../main-empty/main-empty.jsx";
import {getFilteredOffers} from "../../../reducer/data/selectors.js";
import Header from "../../header/header.jsx";

const MainPage = (props) => {
  const {activeOffers} = props;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header isLogoActive={true} />
        <main className={`page__main page__main--index ${activeOffers.length ? `` : `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            {activeOffers.length ? <CitiesContainer /> : <MainEmpty />}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  activeOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
  };
};

export {MainPage};

export default connect(mapStateToProps, null)(MainPage);
