import React from 'react';
import "./InfoCard.scss";
const InfoCard = (props) => {
    const { title, desc, text, img } = props.data;

    return (

        <div className='infocard'>
            <div className='infocard__img'>
                <img src={img} />
            </div>
            <div className='infocard__content'>
                <div className='infocard__title'><h3> {title} </h3></div>
                <div className='infocard__desc'>{desc}</div>
                <div className='infocard__text' dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    )
}

export default InfoCard;
