import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div
    className={`card ${props.type}`}
    onClick={props.onClick}
  >
    <span className="symbol">{props.value}</span>
  </div>
    );

Card.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: null,
};


export default Card;
