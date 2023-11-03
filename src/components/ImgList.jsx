import React from 'react';
import ImgCard from './ImgCard'
import './ImgList.css';

const ImgList = (props) => {
    const images = props.images.map((image) => {
        return <ImgCard key={image.Id} image={image} />;
    });

    return <div className="img-list">{images}</div>;    
};

export default ImgList;