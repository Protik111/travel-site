import React from 'react';
import '../../components/Place/Place.css';

const Place = (props) => {
    const handleClick = props.handleClick;
    const selectedPlace = props.selectedPlace;
    const data = props.data;
    // console.log('selected',selectedPlace);
    // console.log('click',handleClick);
    // console.log('data', data);
    return (
            <div className={`img-box ${selectedPlace.id === data.id && "active-place"}`} onClick={() => handleClick(data)} >
                <img src={data.image} alt=""/>
                <h4 className="placeName">{data.name}</h4>
             </div>
    );
};

export default Place;