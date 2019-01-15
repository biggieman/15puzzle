import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { doMove, doNewGame, doReset, doTick } from './../../store/actions';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.doTick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {grid, moves, time, doMove, doNewGame, doReset} = this.props;

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
                Moves: {moves}, time: {time}
                <div className="container">
                    <div className="grid">
                        {grid.map((cols, row) => {
                            return cols.map((item, col) => {
                                return (
                                    <div
                                        key={'item:' + row + ':'+ col}
                                        className={'grid-item ' + (!item.value ? 'grid-item--empty' : '')}
                                        style={getStyle(item.coord)}
                                        onClick={() => {
                                            item.value && doMove(item.coord);
                                        }}
                                        >
                                        <span className="grid-item__inner">{item.value || ''}</span>
                                    </div>
                                );
                            });
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        grid: state.grid,
        moves: state.moves,
        time: state.time
    };
};

const putActionsToProps = (dispatch) => {
    return {
        doMove: bindActionCreators(doMove, dispatch),
        doNewGame: bindActionCreators(doNewGame, dispatch),
        doReset: bindActionCreators(doReset, dispatch),
        doTick: bindActionCreators(doTick, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(App);
