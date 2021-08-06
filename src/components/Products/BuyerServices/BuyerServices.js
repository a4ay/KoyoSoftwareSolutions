import React from 'react';
import './BuyerServices.css'
// import ProductCard from '../ProductCard/ProductCard'
import WebText from '../../../TextData'

import ProductCard from '../ProductCard/ProductCard';

// function createData(img, title, description, price, stock) {
//     return { img, title, description, price, stock };
// }

const BuyerServices = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4400/getBuyerServices')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data.data)
    //         })
    // }, [])
    // const rows = [];
    // for (let i = 0; i < products.length; i++) {
    //     const e = products[i];
    //     if (e.img == '' || e.img == 'url') {
    //         e.img = 'bat.jpg'
    //     } else {
    //         console.log(e.img)
    //     }
    //     const row = createData('http://localhost:4400/static/'+e.img, e.title, e.description, e.price, e.stock)
    //     rows.push(row)
    // }
    // console.log(rows)
    
    return (
        <div>
            <section className="courses my-5">
                <div className="container">
                    <h1 className="text-center text-magenda">{WebText.BuyerServices.title}</h1>
                    <div className="row my-5">
                        {
                            WebText.BuyerServices.data.map(element=> <ProductCard  key={element.title} data={element}/>)
                            // rows.map(element=> <ProductCard data={element}/>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BuyerServices;
