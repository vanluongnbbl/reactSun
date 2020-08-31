import React from 'react'
import './header.css'

function Header({ search, handleSearchChange }) {

    return (
        <header>
            <div>
                <div className="brand">Amazing</div>
                <div className="input-search">
                    <input
                        type="text"
                        placeholder="Search a product"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button>search</button>
                </div>
            </div>
        </header>
    )
}

export default Header
