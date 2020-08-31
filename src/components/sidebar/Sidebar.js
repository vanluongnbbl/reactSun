import React, { useState, useEffect } from 'react'
import './sidebar.css'
import Category from './category/Category'
import Refine from './refine/Refine'
import axios from 'axios'
function Sidebar({
    products,
    setProducts,
    passCate,
    passRate
}) {

    const [category, setCategory] = useState([])


    useEffect(() => {
        axios.get('http://localhost:4000/categorys')
            .then(res => {
                setCategory(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    // const resetFilter = (value) => {
    //     setCate(value[0])
    //     setRate(value[1])
    // }

    return (
        <aside>
            <div className="sidebar">
                {/* {cate === "" && rate === 0 ? "" :
                    (<div id="clear-all">
                        Clear All filters
                    </div>)

                } */}
                <Category
                    setCategory={setCategory}
                    passCate={passCate}
                    products={products}
                    setProducts={setProducts}
                    category={category}
                />

                <Refine
                    products={products}
                    passRate={passRate}
                />
            </div>
        </aside>
    )
}

export default Sidebar
