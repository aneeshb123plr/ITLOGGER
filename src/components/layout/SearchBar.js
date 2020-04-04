import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLog } from "../../actions/logAction";
const SearchBar = ({ searchLog }) => {
  const text = useRef();

  const onSearch = () => {
    searchLog(text.current.value);
  };
  return (
    <nav className='blue' style={{ marginBottom: "20px" }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              ref={text}
              id='search'
              type='search'
              required
              onChange={onSearch}
              placeholder='Search Log...'
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLog })(SearchBar);
