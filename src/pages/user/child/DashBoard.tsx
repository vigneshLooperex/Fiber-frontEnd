import React, { useEffect, useState } from 'react'
import { Liquid, Area } from '@ant-design/plots';
import { DashBoardLiquid } from '@/global/data';

const DashBoard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return (
        <div className='home-dashboard'>
            <div className='pie-chart'>
                <Liquid {...DashBoardLiquid} />
            </div>
            <div className='pie-chart'>
                <Area {...config} />

            </div>
        </div>
    )
}

export default DashBoard