import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../api/Endpoints';
import ProductCard from './ProductCard';

const JewelryList = () => {
    const [subCategories, setSubCategories] = useState([])
    const getData = () => {
        axios.get(Endpoints.JEWELRY_URL)
            .then(response => {
                console.log(response.data)
                setSubCategories(response.data)
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
                    subCategories.map((category) => <ProductCard data={category} />)
                }


            </div>
        </div>
    )
}
export default JewelryList