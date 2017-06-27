import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CardDesk from './components/CardDesk';
import Settings from './components/Settings';
import ScoreTable from './components/ScoreTable';
import Players from './components/Players';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {!this.props.started ?
          <Settings />
        :
          <div>
            <Players />
            <CardDesk />
            <ScoreTable />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  started: state.game.started,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);

