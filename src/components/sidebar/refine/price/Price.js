import React from 'react'

function Price() {
    return (
        <div className="price-filter">
            <div className="refine-title">Price</div>

            <div>
                <div className="price-filter__item">≤ 1</div>
                <div className="price-filter__item">$1 - 80</div>
                <div className="price-filter__item">$80 - 160</div>
                <div className="price-filter__item">$160 - 240</div>
                <div className="price-filter__item">$240 - 1,820</div>
                <div className="price-filter__item">$1,820 - 3,400</div>
                <div className="price-filter__item">$3,400 - 5,000</div>
                <div className="price-filter__item">≥ 5,000</div>
            </div>

            <div className="form-range-price">
                <form>
                    <span><strong>$</strong></span>
                    <input type="number" value="1" />
                    <span>to</span>
                    <span><strong>$</strong></span>
                    <input type="number" />
                    <button>Go</button>
                </form>
            </div>
        </div>
    )
}

export default Price
