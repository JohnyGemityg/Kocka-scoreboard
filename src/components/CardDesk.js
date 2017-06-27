import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';

import { addCardToActivePlayer as addCardToActivePlayerAction, saveRound as saveRoundAction } from '../actions/cardDesk';


const CardDesk = ({ cards, onCardClick, onSaveRoundClick }) => (
  <div>
    <div className="cardDesk">
      {cards.map(card => (
        <Card
          key={`${card.type}${card.value}`}
          value={card.value}
          type={card.type}
          onClick={() => { onCardClick(card); }}
        />
                ))}
    </div>
    {cards.length < 1 && <button className="button" onClick={onSaveRoundClick}>Uložit skóre</button>}
  </div>
  );


CardDesk.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onSaveRoundClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cardDesk.filter(card => (!card.marked)),
});


const mapDispatchToProps = ({
  onCardClick: addCardToActivePlayerAction,
  onSaveRoundClick: saveRoundAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDesk);
