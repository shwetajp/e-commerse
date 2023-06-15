import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../api/Endpoints';
import ProductCard from './ProductCard';

const ElectronicsList = () => {
    const [electronics, setElectronics] = useState([])
    const getData = () => {
        axios.get(Endpoints.ELECTRONICS_URL)
            .then(response => {
                console.log(response.data)
                setElectronics(response.data)
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
                    electronics.map((category) => <ProductCard data={category} />)
                }


            </div>
        </div>
    )
}
export default ElectronicsList