import React from 'react';

import InfoCard from '../../components/InfoCard/InfoCard';
import "./HomePage.scss";

const generateInfoCardData = (pageData, item) => {
    const data = pageData.filter(i => i.NOAAFisheriesRegion === item)
    const sumCal = data.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.Calories || 0);
    }, 0);
    const sumFat = data.reduce((accumulator, currentValue) => {
        const fatVal = currentValue.FatTotal ? currentValue.FatTotal.replace(' g', '') : 0;
        return accumulator + parseInt(fatVal || 0);
    }, 0);
    const averageCal = sumCal / data.length;
    const averageFat = sumFat / data.length;
    const title = <p><b>Region:</b> {item} </p>;
    const desc = <p><b>Measurement: </b> Per Serving</p>;
    const img = data[Math.floor(Math.random() * data.length)].SpeciesIllustrationPhoto.src
    const text = `
        <p><b>Average Calories:</b> ${averageCal.toFixed(2)}  </p>
        <p><b>Average FatTotal:</b> ${averageFat.toFixed(2)} g</p>
    `;

    return { title, desc, text, img }
}
const HomePage = (props) => {
    const { pageData, items } = props;
    return (
        <>
            {pageData ?
                <div className='homepage'>
                    <div className='homepage__content'>
                        <div className='homepage__content--title'><h1>HomePage</h1></div>
                        <div className='homepage__content--main'>
                            {items.map((item, index) => (
                                <InfoCard key={index} data={generateInfoCardData(pageData, item)} />
                            ))}
                        </div>
                    </div>
                </div>
                :
                <p> No page data found </p>
            }
        </>
    )
};

export default HomePage;
