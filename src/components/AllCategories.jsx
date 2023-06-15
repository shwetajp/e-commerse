import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Constants from '../api/Constants';
import ProductCard from './ProductCard';

const AllCategories = () => {
    const [categories, setCategories] = useState([])
    const getData = () => {
        axios.get(Constants.BASE_URL)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
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
                    categories.map((category) => <ProductCard data={category} />)
                }

            </div>
        </div>
    )
}
export default AllCategories;