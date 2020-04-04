import React, { useEffect } from "react";
import TechItem from "./TechItem";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techAction";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>List of Technician</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(t => <TechItem tech={t} key={t.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object
};

const mapSateToProps = state => ({
  tech: state.tech
});

export default connect(mapSateToProps, { getTechs })(TechListModal);
