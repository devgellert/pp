import React from 'react';
import galery from './Galery';

const FilteredImages = (props) => {
    return (
        <div id="pictures-image-wrapper">
            {galery.map(img => {
                if (img.filter === props.filter || !props.filter) {
                    return (
                           <img 
                            onClick={e => {
                                props.handleViewer(e);
                                props.toggle();
                            }}
                            src={img.src}
                            alt={img.alt}
                           /> 
                    )   
                }
            })}
        </div>
    );
}

export default FilteredImages;
