import React from 'react'

function Rating({
    passRate,
    star }) {


    const sendRate = (value) => {
        passRate(value)
    }

    const wrapShowStar = (stars) => {
        let result = []
        stars.forEach((star, i) => {
            result.push(<div
                key={i}
                onClick={() => {
                    sendRate(star.id)
                }}
                className="rating__item">{showStar(star.id)}</div>)
        })
        return result
    }

    // const handleStar = () => {
    //     sendRate(value)
    // }

    const showStar = (star) => {
        let result = []
        for (let i = 1; i <= star; i++) {
            result.push(<span key={i} className="star star-full"></span>)
        }
        for (let i = star + 1; i <= 5; i++) {
            result.push(<span
                key={i}

                className="star star-non"
            >
            </span>)
        }

        return result
    }
    return (
        <div className="rating">
            <div className="refine-title">Rating</div>
            {wrapShowStar(star)}
        </div>
    )
}

export default Rating
