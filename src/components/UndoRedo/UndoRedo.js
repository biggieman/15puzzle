import React from 'react'
import { bindActionCreators } from 'redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <div>
        <button onClick={onUndo} disabled={!canUndo}>Undo</button>
        <button onClick={onRedo} disabled={!canRedo}>Redo</button>
    </div>
)

const mapStateToProps = (state) => ({
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
})

const mapActionsToProps = (dispatch) => {
    return {
        onUndo: bindActionCreators(UndoActionCreators.undo, dispatch),
        onRedo: bindActionCreators(UndoActionCreators.redo, dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(UndoRedo);
