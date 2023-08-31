import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import { useParams } from 'react-router-dom';
import './DetailPage.scss';


const generateInfoCardData = (item) => {
    const img = item.SpeciesIllustrationPhoto.src;
    const title = item.SpeciesName;
    const desc = (
        <>
            <b>Per Serving: </b>
            <p>Total Calories: {item.Calories}  </p>
            <p>Total Fat: {item.FatTotal} </p>
        </>
    );
    const text = item.PhysicalDescription;
    return { title, desc, text, img }
};

const DetailPage = (props) => {
    const { pageData } = props;
    const { selected } = useParams();
    const currentPage = pageData?.filter(i => i.NOAAFisheriesRegion === selected);
    const sumCal = currentPage?.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.Calories || 0);
    }, 0);
    const sumFat = currentPage?.reduce((accumulator, currentValue) => {
        const fatVal = currentValue.FatTotal ? currentValue.FatTotal.replace(' g', '') : 0;
        return accumulator + parseInt(fatVal || 0);
    }, 0);

    const averageCal = sumCal / currentPage?.length;
    const averageFat = sumFat / currentPage?.length;

    return (
        <>
            {pageData ?
                <div className='detailpage'>
                    <div className='detailpage__content'>
                        <div className='detailpage__content--title'>
                            <h1>{selected}</h1>
                            <h4>Average <b>{averageCal.toFixed(2)} Calories</b> / Serving </h4>
                            <h4>Average <b>{averageFat.toFixed(2)} g</b> of Fat / Serving </h4>
                        </div>
                        <div className='detailpage__content--main'>
                            {currentPage && currentPage.map((item, index) => (
                                <InfoCard key={index} data={generateInfoCardData(item)} />
                            ))}
                        </div>
                    </div>
                </div>
                :
                <p> No page data found </p>
            }
        </>
    );
};

export default DetailPage;
