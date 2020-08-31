import React from 'react'

function Type() {

    const typeProducts = [
        {
            type: "Trend Cases",
            id: 1
        },
        {
            type: "Ult Protection cases",
            id: 2
        },
        {
            type: "Ink cartridges",
            id: 3
        },
        {
            type: "Business Cases",
            id: 4
        }

    ]

    return (
        <div className="type">
            <div className="refine-title">Type</div>

            <form>
                {
                    typeProducts.map((value, i) => (
                        <div className="type-checkbox" key={i}>
                            <input
                                type="checkbox"
                                id={value.id}
                                name={i}

                            />
                            <label htmlFor={value.id} className="type__label">{value.type} <span>(123)</span></label>
                        </div>
                    ))
                }
                {/* <div className="type-checkbox">
                    <input type="checkbox" id="trend" name="trend" />
                    <label htmlFor="trend" className="type__label">Trend Cases <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="protection" name="protection" />
                    <label htmlFor="protection" className="type__label">Ult Protection cases <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="ink" name="ink" />
                    <label htmlFor="ink" className="type__label">Ink cartridges <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="business" name="business" />
                    <label htmlFor="business" className="type__label">Business Cases <span>(123)</span></label>
                </div> */}
            </form>


            <div className="refine-title">Brand</div>
            <form>
                <div className="type-checkbox">
                    <input type="text" placeholder="search" />
                </div>
                <div className="type-checkbox">
                    <input type="checkbox" id="brand1" name="brand1" />
                    <label htmlFor="brand1" className="type__label">Brand 1 <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="brand2" name="brand2" />
                    <label htmlFor="brand2" className="type__label">Brand 2 <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="brand3" name="brand3" />
                    <label htmlFor="brand3" className="type__label">Brand 3 <span>(123)</span></label>
                </div>

                <div className="type-checkbox">
                    <input type="checkbox" id="brand4" name="brand4" />
                    <label htmlFor="brand4" className="type__label">Brand 4 <span>(123)</span></label>
                </div>
            </form>
        </div>
    )
}

export default Type
