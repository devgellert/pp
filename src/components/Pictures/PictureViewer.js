import React from 'react';

const PictureViewer = (props) => {
    return (
        <div style={{display: props.hidden ? 'none' : 'flex'}} id="picture-viewer-wrapper">
            <img 
            src={props.images[props.index] ? props.images[props.index].src : ''}/>
        </div>
    );
}

export default PictureViewer;
