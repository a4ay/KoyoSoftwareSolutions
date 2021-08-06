import React from 'react';
import './ProductCard.css'
import money from '../../../img/BuyerServices/money.svg'
import product from '../../../img/BuyerServices/product.svg'
import buy from '../../../img/BuyerServices/buy.svg'

const ProductCard = ({ img, title, description, price, stock }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="single-course">
                <div className="card">
                    <img src={img} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="text-magenda">{title}</h5>
                        <p className="descriptionText">{description}</p>
                        <button className="btn btn-success btn-rounded btnAddToCart1"><img src={buy} alt=""/> Add To Cart</button>
                        <div className="course-info d-flex justify-content-between mt-3">
                            <p>
                                <img src={money} alt=""/> {price}
                            </p>
                            <p>
                                <img src={product} alt=""/> {stock}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;