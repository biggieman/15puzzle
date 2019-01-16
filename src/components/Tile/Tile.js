import React from 'react';

import './Tile.css';

const Tile = ({onClick, coord, value, done}) => {
    let style = {
        top: coord[0] * 25 + '%',
        left: coord[1] * 25 + '%'
    };

    let className = ['tile', 'rounded'];
    if (!value) {
        className.push('tile--empty');
    }
    if (done) {
        className.push('tile--done');
    }

    return (
        <div
            className={className.join(' ')}
            style={style}
            onClick={onClick}
        >
            <span className="tile__inner">{value || ''}</span>
        </div>
    );
};

export default Tile;
