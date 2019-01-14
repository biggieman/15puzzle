import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { doMove, doReset, doTick } from './../../store/actions';

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
        const {grid, moves, time, doMove, doReset} = this.props;

        return (
            <div className="App">
                <div>
                    <button onClick={() => {doReset()}}>Reset</button>
                </div>
                Moves: {moves}, time: {time}
                <div className="grid">
                    {grid.map((cols, row) => {
                        return (
                            <div key={'row' + row} className="grid-row">
                                {cols.map((value, col) => {
                                    return (
                                        <div
                                            key={'col' + col}
                                            className={'grid-item ' + (!value ? 't-empty' : '')}
                                            onClick={() => {
                                                value && doMove([row, col]);
                                            }}
                                            >
                                            {value || ''}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
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
        doReset: bindActionCreators(doReset, dispatch),
        doTick: bindActionCreators(doTick, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(App);
