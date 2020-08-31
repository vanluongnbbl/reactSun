import React, { useState, useEffect } from 'react'
import Type from './type/Type'
import Rating from './rating/Rating'
import Price from './price/Price'
import axios from 'axios'
function Refine({ products, passRate }) {

    const [star, setStar] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/ratings')
            .then(res => {
                setStar(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="refine">
            <div className="category__title">Refine by</div>
            <Type products={products} />
            <Rating
                passRate={passRate}
                star={star}
            />
            <Price />
        </div>
    )
}

export default Refine
