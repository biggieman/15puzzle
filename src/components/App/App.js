import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { doMove, doNewGame, doReset } from './../../store/actions';

import './App.css';

class App extends React.Component {
    render() {
        const {grid, moves, doMove, doNewGame, doReset} = this.props;

        const getStyle = (position) => {
            return {
                top: position[0] * 60 + 'px',
                left: position[1] * 60 + 'px'
            };
        };

        return (
            <div className="app">
                <div>
                <button onClick={() => {doNewGame()}}>New game</button> <button onClick={() => {doReset()}}>Reset</button>
                </div>
                Moves: {moves}
                <div className="container">
                    <div className="grid">
                        {grid.map((item, index) => {
                            return (
                                <div
                                    key={'item:' + index}
                                    className={'grid-item ' + (!item.value ? 'grid-item--empty' : '')}
                                    style={getStyle(item.coord)}
                                    onClick={() => {
                                        item.value && doMove(item.coord);
                                    }}
                                    >
                                    <span className="grid-item__inner">{item.value || ''}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        moves: state.moves
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        doMove: bindActionCreators(doMove, dispatch),
        doNewGame: bindActionCreators(doNewGame, dispatch),
        doReset: bindActionCreators(doReset, dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
