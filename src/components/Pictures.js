import React, { Component } from 'react';
import images from '../imageInport';

export class Pictures extends Component {

    
    
    render() {
        return (
            <div>
                {images.forEach(img => {
                    return(
                    <img src={img}/> 
                    )
                })}
            </div>
        );
    }
}

export default Pictures;
