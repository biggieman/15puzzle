import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { doNewGame, doReset } from './../../store/actions';

import UndoRedo from './../UndoRedo/UndoRedo';

import './Header.css';

const Header = ({onNewGameClick, onResetClick, moves}) => {
    return (
        <div className="header">
            <div className="main-buttons">
                <button onClick={() => {onNewGameClick()}}>New game</button>
                <button onClick={() => {onResetClick()}}>Reset</button>
            </div>
            <div className="info">
                Moves: {moves}
            </div>

            <UndoRedo/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    moves: state.present.moves
});

const mapActionsToProps = (dispatch) => ({
    onNewGameClick: bindActionCreators(doNewGame, dispatch),
    onResetClick: bindActionCreators(doReset, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Header);
