import React from 'react';
import img1 from '../../images/1.jpg';
import arrow from '../../images/arrow.png'
const PictureViewer = (props) => {
    return (
        <div style={{display: props.hidden ? 'none' : 'flex'}} id="picture-viewer-wrapper">
            <img 
                src={props.images ? props.images[props.index].src : img1}
            />
            <img
            onClick={() => props.handleArrow('previous')}
            id="picture-viewer-arrow-prev" src={arrow}/>
            <img
            onClick={() => props.handleArrow('next')}
            id="picture-viewer-arrow-next" src={arrow}/>
            <span
                id="picture-viewer-close"
                onClick={() => props.toggle()}
            >Close</span>
        </div>
    );
}

export default PictureViewer;
