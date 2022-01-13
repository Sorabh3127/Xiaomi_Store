import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({index,image,review,name,price}) => {
    return (
        <div className="productReviewCard">
            <img src={image} alt={`${index} Review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>

        </div>
    )
}

export default ProductReviewCard
