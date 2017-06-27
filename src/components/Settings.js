import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LabelInput from './LabelInput';
import { changeName as playerChangeName, togglePlayersCount } from '../actions/players';
import { start as gameStart } from '../actions/game';


const Settings = props => (
  <div>
    <h1>Nová hra</h1>
    <div className="players-count">
      <label>
        <input
          type="radio"
          name="players-count"
          checked={props.players.length === 3}
          onChange={props.onPlayersCountChange}
        />
         3 hráči
     </label>
      <label>
        <input
          type="radio"
          name="players-count"
          checked={props.players.length === 4}
          onChange={props.onPlayersCountChange}
        />
         4 hráči
     </label>
    </div>
    {props.players.map((p, i) => (
      <LabelInput
        value={p.name}
        key={p.id}
        onChange={(value) => { props.onChangePlayerName(p.id, value); }}
        label={`Hráč ${i + 1}`}
        placeholder="Jméno"
      />
    ))}
    <button className="button" onClick={() => props.onClickStart(props.players.length)}>Start</button>
  </div>
    );

Settings.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.arrayOf(PropTypes.number).isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })),
  })).isRequired,
  onClickStart: PropTypes.func.isRequired,
  onPlayersCountChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = {
  onChangePlayerName: playerChangeName,
  onClickStart: gameStart,
  onPlayersCountChange: togglePlayersCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
