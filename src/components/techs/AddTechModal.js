import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTech } from "../../actions/techAction";

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = () => {
    if (firstname === "" && lastname === "") {
      M.toast({ html: "Please fill all the fields" });
    } else {
      addTech({
        firstname,
        lastname
      });
      M.toast({ html: `${firstname} ${lastname} has added` });
      // clear data
      setFirstname("");
      setLastname("");
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={firstname}
              name='firstname'
              onChange={e => setFirstname(e.target.value)}
            />
            <label htmlFor='firstname' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={lastname}
              name='lastname'
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Last Name
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
