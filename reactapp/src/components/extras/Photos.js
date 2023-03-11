import React, { useState } from 'react';
import "../../styles/photos.css"

const Photos = ({photos, state, setState, ...props}) => {
    return (
        <div className="photos">
            {photos.map((photo, iter) => {
                return (<div onClick={() => {
                    setState((oldState) => ({
                        ...oldState, mainPhoto: iter
                    }))
                }}
                key={iter}>
                {iter == state.mainPhoto 
                    ? <div className="photo selectedPhoto"><img src={photo.url}/></div> 
                    : <div className="photo"><img src={photo.url} /></div>}
                
            </div>)
            })}
        </div>
    );
};

export default Photos;