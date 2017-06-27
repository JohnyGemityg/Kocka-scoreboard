import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ScoreTable = props => (
  <div>
    <h1>Skóre</h1>
    <table className="score-table">
      <thead>
        <tr>
          {props.players.map(player => (
            <th key={player.id}>{player.name}</th>
        ))}
        </tr>
      </thead>
      <tbody>
        <tr className="results-row">
          {props.players.map(player => (
            <td key={player.id}>{player.score.reduce((a, c) => (a + c), 0)}</td>
        ))}
        </tr>
        {props.players[0].score.map((score, i) => (
          <tr key={i}>
            {props.players.map(player => (
              <td key={player.id}>{player.score[i]}</td>
          ))}
          </tr>
      ))}
      </tbody>
    </table>
  </div>
  );

ScoreTable.propTypes = {
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

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
