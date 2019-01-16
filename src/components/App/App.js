import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { doMove, doNewGame, doReset } from './../../store/actions';

import Tiles from './../Tiles/Tiles';
import UndoRedo from './../UndoRedo/UndoRedo';

import './App.css';

class App extends React.Component {
    render() {
        const {tiles, moves, doMove, doNewGame, doReset} = this.props;

        return (
            <div className="app">
                <div>
                <button onClick={() => {doNewGame()}}>New game</button> <button onClick={() => {doReset()}}>Reset</button>
                </div>
                Moves: {moves}
                <div className="container">
                    <Tiles
                        tiles={tiles}
                        onTileClick={(item) => item.value && doMove(item.coord)}
                    />
                </div>
                <UndoRedo/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tiles: state.present.grid,
    moves: state.present.moves
});

const mapActionsToProps = (dispatch) => ({
    doMove: bindActionCreators(doMove, dispatch),
    doNewGame: bindActionCreators(doNewGame, dispatch),
    doReset: bindActionCreators(doReset, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(App);
