import React from 'react';

import './Tile.css';

const Tile = ({onClick, coord, value}) => {
    const getStyle = (position) => {
        return {
            top: position[0] * 60 + 'px',
            left: position[1] * 60 + 'px'
        };
    };

    return (
        <div
            className={'tile ' + (!value ? 'tile--empty' : '')}
            style={getStyle(coord)}
            onClick={onClick}
        >
            <span className="tile__inner">{value || ''}</span>
        </div>
    );
};

export default Tile;
