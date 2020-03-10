import React, { useState, useEffect } from 'react';
import importedFilters from './Filters';
import FilterBar from './FilterBar';
import galery from './Galery';
import FilteredImages from './FilteredImages';
import '../../style/css/pictures.css';
import PictureViewer from './PictureViewer';

function Pictures() {
    const [activeName, setName] = useState('');
    const [activePrint, setPrint] = useState('');
    const [activeImages, setActiveImages] = useState(galery);
    const [filters, setFilters] = useState(importedFilters);
    const [indexForViewer, setIndexForViewer] = useState(0);
    const [hiddenViewer, setHiddenViewer] = useState(true);

    function handleFilter(e) {
        setName(e.target.getAttribute("name"));
        setPrint(e.target.getAttribute("print"));
        const newGalery = galery.filter(img => img.filter === activeName);
        setActiveImages(newGalery)
    }
    function toggleViewer() {
        setHiddenViewer(!hiddenViewer);
    }

    function handleViewer(e) {
        const newAlt = e.target.getAttribute("alt");
        const index = activeImages.indexOf({alt: newAlt});
        setIndexForViewer(index);
    }
    useEffect(() => {
        console.log(indexForViewer);
    }, [indexForViewer])

    return (
        <div id="pictures-wrapper">
            <FilterBar active={activePrint} handleFilter={handleFilter} filters={filters}/>
            <FilteredImages handleViewer={handleViewer} toggle = {toggleViewer} filter={activeName}/>
            <PictureViewer
            
            hidden={hiddenViewer} index={indexForViewer} images={activeImages}/>
        </div>
    );
}

export default Pictures;
