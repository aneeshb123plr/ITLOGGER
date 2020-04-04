import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import ProgressBar from "../layout/ProgressBar";
import { getLogs } from "../../actions/logAction";
import PropTypes from "prop-types";
const Log = ({ getLogs, log: { logs, loading } }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <ProgressBar />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System</h4>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map(log => <LogItem log={log} key={log.id} />)
        )}
      </li>
    </ul>
  );
};

Log.propTypes = {
  getLogs: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Log);
