import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import { select as selectPlayerAction } from '../actions/players';
import { removeCardFromPlayer as removeCardFromPlayerAction } from '../actions/cardDesk';


const Players = props => (
  <div className="players">
    {props.players.map(player => (
      <div key={player.id} className="player">
        <h2
          className={player.active ? 'active' : ''}
        >
          <span
            onClick={() => props.onClickPlayer(player.id)}
            role="button"
            tabIndex={0}
          >
         Hráč: {player.name}
          </span>
        </h2>
        <div className="cards">
          {player.cards.map(card => (
            <Card
              key={`${card.type}${card.value}`}
              value={card.value}
              type={card.type}
              onClick={() => { props.onCardClick(player.id, card); }}
            />
            ))}
        </div>
        <p>Celkem: {player.cards.reduce((a, c) => (a + c.score), 0)}</p>
      </div>
        ))}
  </div>
  );

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.arrayOf(PropTypes.number).isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })),
  })).isRequired,
};

const mapStateToProps = state => ({
  players: state.players,
});


const mapDispatchToProps = ({
  onClickPlayer: selectPlayerAction,
  onCardClick: removeCardFromPlayerAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
