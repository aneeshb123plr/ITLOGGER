import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logAction";
import TechSelectOption from "./TechSelectOption";
const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
    // eslint-disable-next-line
  }, [current]);
  const onSubmit = () => {
    if (message === "" && tech === "") {
      M.toast({ html: "Please fill all the fields" });
    } else {
      const log = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date()
      };

      updateLog(log);
      M.toast({ html: `Log update by ${tech}` });

      // clear data
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id='edit-log-modal' className='modal' style={modelStyle}>
      <div className='modal-content'>
        <h4>Edit the system log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={message}
              name='message'
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              value={tech}
              name='tech'
              onChange={e => setTech(e.target.value)}
            >
              <option value='disabled'>Select option</option>
              <TechSelectOption />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                className='filled-in'
                type='checkbox'
                name='attention'
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Attention need</span>
            </label>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn-flat white-text'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modelStyle = {
  height: "75%",
  width: "75%"
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
