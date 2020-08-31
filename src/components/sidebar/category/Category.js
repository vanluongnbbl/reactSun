import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';


function Category({
    passCate,
    category }) {

    const [isOpen, setIsOpen] = useState(0)
    const [subCate, setSubCate] = useState(0)

    const sendType = (value) => {
        passCate(value)
    }

    const toggleSubCate = (id, value) => {
        setSubCate(id)
        sendType(value)
    }

    const toggle = (id, value) => {
        setIsOpen(id);
        sendType(value)
    }

    const subCategory = (item) => {
        let result = []
        item.subObj.forEach(i => {
            return (
                result.push(<div key={i}
                    className={subCate === i.id ? "sub-cate active-category" : "sub-cate"}
                    onClick={() => {
                        toggleSubCate(i.id,
                            i.category)
                    }} >
                    <FaChevronRight />
                    {(i.name)}
                </div>
                )
            )
        })
        return result
    }

    return (

        <div className="category">
            <div className="category__title">Show results for</div>
            {
                category.map((item, i) => (
                    <div className="category__content" key={i}>
                        <div className={isOpen ?
                            "category__item active-category" :
                            "category__item"}
                            onClick={() => {
                                toggle(item.id,
                                    item.category);
                            }}>
                            <FaChevronRight />
                            {item.name}

                        </div>
                        <div className={isOpen === item.id ? "category__item--sub block" : "category__item--sub"} >
                            {subCategory(item)}
                        </div>

                    </div>
                )
                )
            }
        </div>
    )

}

export default Category
