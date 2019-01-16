import React from 'react';

import Tile from './../Tile/Tile';

import './Tiles.css';

const Tiles = ({tiles, onTileClick}) => {
    return (
        <div className="tiles">
            {tiles.map((item, index) => {
                return (
                    <Tile
                        key={'item:' + index}
                        {...item}
                        onClick={() => onTileClick(item)}
                    />
                );
            })}
        </div>
    );
};

export default Tiles;
