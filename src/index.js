import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import DetailPage from './pages/detail/DetailPage';
import Header from './components/Header/Header';
import getAllData from '../src/apis/data/getAllData';


const App = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchDataAndSetState() {
            const apiData = await getAllData();
            setData(apiData);
        }
        fetchDataAndSetState();
    }, []);
    let items;
    if (data) {
        items = [...new Set(data.map(i => i.NOAAFisheriesRegion))];
    }
    return (
        <HashRouter>
            <Header pageData={data} items={items} />
            <Routes>
                <Route path="/" element={<HomePage pageData={data} items={items} />} />
                <Route path="/detailPage/:selected" element={<DetailPage pageData={data} />} />
            </Routes>
        </HashRouter>
    )


};

ReactDOM.render(<App />, document.getElementById('root'));
