import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TechSelectOption = ({ tech: { techs, loading } }) =>
  !loading &&
  techs !== null &&
  techs.map(t => (
    <option key={t.id}>
      {t.firstname} {t.lastname}
    </option>
  ));

TechSelectOption.propTypes = {
  tech: PropTypes.object
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, {})(TechSelectOption);
