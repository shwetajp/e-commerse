import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../api/Endpoints';
import ProductCard from './ProductCard';

const MenClothList = () => {
    const [clothes, setClothes] = useState([])
    const getData = () => {
        axios.get(Endpoints.MENSCLOTH_URL)
            .then(response => {
                console.log(response.data)
                setClothes(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='container'>
            {/* <h1>CategoryList</h1> */}
            <div className="row">
                {
                    clothes.map((category) => <ProductCard data={category} />)
                }

            </div>
        </div>
    )
}
export default MenClothList