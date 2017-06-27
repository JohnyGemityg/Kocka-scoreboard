import React from 'react';
import PropTypes from 'prop-types';

const LabelInput = props => (
  <div className="label-input">
    <label>
      {props.label}
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => { props.onChange(e.target.value); }}
      />
    </label>
  </div>
    );


LabelInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

LabelInput.defaultProps = {
  label: '',
  placeholder: '',
};

export default LabelInput;
