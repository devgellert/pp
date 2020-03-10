import React from 'react';

const FilterBar = (props) => {


    return (
        <div id="pictures-filterbar">
            <ul>
                {props.filters.map(filter => {
                    return (
                        <li
                            onClick={ e => props.handleFilter(e)}
                            name={filter.name}
                            print={filter.print}
                            style={props.active === filter.print || !filter.name && !props.active ? {color: 'blue'} : {}}
                        >
                                {filter.print}
                        </li>
                    )
                })}   
            </ul>
        </div>
    );
}

export default FilterBar;
