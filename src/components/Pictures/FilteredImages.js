import React from 'react';
import galery from './Galery';

const FilteredImages = (props) => {
    return (
        <div id="pictures-image-wrapper">
            {galery.map(image => {
                if (image.filter === props.filter || !props.filter) {
                    return (
                           <img 
                            onClick={e => props.handleViewer(e)}
                            src={image.src}
                            alt={image.alt}
                           /> 
                    )   
                }
            })}
        </div>
    );
}

export default FilteredImages;
