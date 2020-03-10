import React, { useState, useEffect, useReducer } from 'react';
import importedFilters from './Filters';
import FilterBar from './FilterBar';
import galery from './Galery';
import FilteredImages from './FilteredImages';
import '../../style/css/pictures.css';
import PictureViewer from './PictureViewer';
const reducer = (state, action) => {
    switch (action.type) {
        case "handleFilter":
            return {
                ...state,
                activeName: action.payload.name,
                activePrint: action.payload.print,
                activeImages: galery.filter(img => img.filter === action.payload.name || !action.payload.name )
            };
            break;
        case "handleViewer":
            console.log(action.payload);
            return { ...state, indexForViewer: action.payload }
            break;
        case 'toggle':
            return { ...state, hiddenViewer: !action.payload };
            break;
        default:
            break;
    }
}
function Pictures() {

    const [{ activeImages, indexForViewer, filters, activeName, activePrint, hiddenViewer }, dispatch] = useReducer(reducer, {
        activeImages: galery,
        indexForViewer: 0,
        filters: importedFilters,
        activeName: '',
        activePrint: '',
        hiddenViewer: true
    })
    
    function handleFilter(e) {
        dispatch({
            type: "handleFilter",
            payload: {
                name: e.target.getAttribute("name"),
                print: e.target.getAttribute("print")
            } 
        }
        );
        dispatch({
            type: 'handleViewer',
            payload: 0
        })
    }
    function handleViewer(e) {
        const newAlt = e.target.getAttribute("alt");
        console.log(newAlt);
        let i = 0;
        while(activeImages[i].alt != newAlt ) {
            ++i;
        }
        console.log(i);
        dispatch({ type: "handleViewer", payload: i});
        toggleHiddenViewer();
    }
    function viewerArrows(option) {
        if(option === 'next') {
            dispatch({ type: "handleViewer", payload: indexForViewer < activeImages.length-1 ? indexForViewer+1 : 0})
        }else if(option === 'previous') {
            dispatch({ type: "handleViewer", payload: indexForViewer === 0 ? activeImages.length-1 : indexForViewer-1})
        }
    }
    function toggleHiddenViewer() {
        dispatch({ type: 'toggle', payload: hiddenViewer })
    }
    return (
        <div id="pictures-wrapper">
            <FilterBar
                active={activePrint}
                handleFilter={handleFilter} 
                filters={filters}
            />
            
            <FilteredImages
                handleViewer={handleViewer}
                filter={activeName}
            />
            <PictureViewer
            index={indexForViewer}
            images= {activeImages}
            toggle={toggleHiddenViewer}
            hidden={hiddenViewer}
            handleArrow={viewerArrows}
            />
        </div>
    );
}

export default Pictures;
