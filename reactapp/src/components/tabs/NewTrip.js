import React, { useState, useEffect } from 'react';
import * as loadImage from 'blueimp-load-image'
import "../../styles/index.css";
import "../../styles/form.css";

const NewTrip = () => {
    const [state, setState] = useState({
        name: '',
        datestarted: '',
        dateended: '',
        description: '', 
        photos: []
    })

    useEffect(() => {
        console.log(state.photos)
    })

    const getGpsInfo = async (photo, detail) => {
        return new Promise((resolve, reject) => {
            loadImage.parseMetaData(photo, (data) => {
                if(data.exif && data.exif.get('GPSInfo')){
                    let gpsData = data.exif.get('GPSInfo')
                    let latData = gpsData.get(detail);
                    resolve(latData[0] + latData[1]/60 + latData[2]/3600)
                } else {
                    resolve(0)
                }
            })
        })
    }

    return (
        <div className="container">
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Name" value={state.name} 
                    onChange={(e) => { setState((oldState) => ({ ...oldState, name: e.target.value}))}}
                /><br />

                <label htmlFor="datestarted">Date started</label>
                <input id="datestarted" type="date" placeholder="Date started" value={state.datestarted} 
                    onChange={(e) => { setState((oldState) => ({ ...oldState, datestarted: e.target.value}))}}
                /><br />

                <label htmlFor="dateended">Date ended</label>
                <input id="dateended" type="date" placeholder="Date ended" value={state.dateended} 
                    onChange={(e) => { setState((oldState) => ({ ...oldState, dateended: e.target.value}))}}
                /><br />
                
                <label htmlFor="description">Description</label>
                <input id="description" type="text" placeholder="Description" value={state.description} 
                    onChange={(e) => { setState((oldState) => ({ ...oldState, description: e.target.value}))}}
                /><br />

                <label htmlFor="photos">Photos</label>
                <input id="photos" type="file" placeholder="Photos" multiple 
                    onChange={async (e) => { 
                        const uploaded = [...state.photos]
                        let files = Array.prototype.slice.call(e.target.files);
                        for(let i = 0; i < files.length; i++) {
                            uploaded.push({ 
                                file: files[i], 
                                long: await getGpsInfo(files[i], 'GPSLongitude'),
                                lat: await getGpsInfo(files[i], 'GPSLatitude')
                            });
                        }

                        setState((oldState) => ({...oldState, photos: uploaded}))
                    }}
                /><br />
            </form>
        </div>
    );
};

export default NewTrip;