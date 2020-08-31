import React, { useState } from 'react'

const Filters = ({ passFilter }) => {
    const [filter, setFilter] = useState("1")

    const sendFilter = () => {
        passFilter(filter)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    return (
        <select
            value={filter}
            onChange={handleFilter}
        >
            <option value="1">Featured</option>
            <option value="2">Price asc.</option>
            <option value="3">Price desc.</option>
            {sendFilter()}
        </select>
    )
}

export default Filters
