import React from 'react'
import { bindActionCreators } from 'redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <div className="p-3">
        <button className="btn btn-outline-dark mx-1" onClick={onUndo} disabled={!canUndo} title="Undo">
            <i className="material-icons">undo</i> Undo
        </button>
        <button className="btn btn-outline-dark mx-1" onClick={onRedo} disabled={!canRedo} title="Redo">
            <i className="material-icons">redo</i> Redo
        </button>
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
