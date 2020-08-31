import React, { useState, useEffect, useReducer } from 'react'
import './ListProduct.css'
import '../sidebar/sidebar.css'
import Product from './Product'
import Pagination from './Pagination'
import Filters from './Filter'
import axios from 'axios'

function ListProduct({
    products,
    search,
    cate,
    rate
}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(8)
    const [filterSelect, setFilterSelect] = useState("1")
    const [product2, setProduct2] = useState(products)


    const indexOfLastPost = currentPage * productPerPage
    const indexOfFirstPost = indexOfLastPost - productPerPage
    const currentPosts = product2.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
        let url = `http://localhost:4000/products?`
        if (search) {
            url += `q=${search}`
        }
        axios.get(url)
            .then(res => {
                setProduct2(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }, [search])

    useEffect(() => {
        filterSelect === "1" ?
            setProduct2([...products].sort((a, b) => a.id - b.id)) :
            filterSelect === "2" ?
                setProduct2([...products].sort((a, b) => a.price - b.price)) :
                setProduct2([...products].sort((a, b) => b.price - a.price));
    }, [filterSelect])

    useEffect(() => {


        if (cate !== "" || rate !== "") {
            const result = [...products].filter((product) => {
                if (cate !== "" && rate !== 0) {
                    return (
                        product.category.toLowerCase().indexOf(cate.toLowerCase()) !== -1
                        &&
                        product.ranking === rate
                    )
                }
                if (cate !== "") {
                    return (
                        product.category.toLowerCase().indexOf(cate.toLowerCase()) !== -1
                    )
                }
                if (rate !== 0) {
                    return (
                        product.ranking === rate
                    )
                }
            });
            setProduct2(() => [...result])
        }
    }, [cate, rate])


    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const passFilter = (value) => {
        setFilterSelect(value)
    }

    return (
        <div className="list-products">

            <div className="head-list">
                <div className="result-product">
                    <div className="result-count">{product2.length} result &nbsp;</div>
                    <div className="result-ms">found in 4ms</div>
                </div>

                <div className="select-filter">
                    <span>Sort by</span>
                    <Filters
                        passFilter={passFilter}
                    />
                </div>
            </div>

            <Product
                product2={currentPosts}
            />

            <Pagination
                productPerPage={productPerPage}
                totalProducts={product2.length}
                paginate={paginate}
            />
        </div>
    )
}

export default ListProduct
