import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logAction";
import PropTypes from "prop-types";
import TechSelectOption from "./TechSelectOption";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === "" && tech === "") {
      M.toast({ html: "Please fill all the fields" });
    } else {
      console.log(message + " " + tech + " " + attention);

      const log = {
        message,
        tech,
        attention,
        date: new Date()
      };
      addLog(log);

      M.toast({ html: "New log added" });
      // clear data
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal' style={modelStyle}>
      <div className='modal-content'>
        <h4>Enter the system log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={message}
              name='message'
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Message
            </label>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
