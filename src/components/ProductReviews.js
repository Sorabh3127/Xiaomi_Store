import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js";
import '../styles/ProductReviews.css';


const ProductReviews = ({productReviews}) => {
    return (
        <div className="productReview">
            {productReviews.map((item,index)=>(
                <ProductReviewCard key={item.image} index={index} image={item.image} review={item.review} name={item.name} price={item.price}/>
            ))}
        </div>
    )
}

export default ProductReviews
