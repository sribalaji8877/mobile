import React from 'react';
import { Link } from 'react-router-dom';
import '../Products/Products.css';
import PropTypes from 'prop-types';
import { Consumer } from '../context/ContextCreate';

function Products({ product }) {
    const { id, images, company, inCart, price } = product;
    return (
        <div className="product_view">
            <Consumer>
                {
                    (value) => {
                        const { additems ,addTocart,openmodel} = value;
                        return <div>
                            <Link to="/details" >
                                <img src={images} alt="detail_img" onClick={() => { additems(id) }}></img></Link>
                            <div className="product_btn">
                                <h5>{company}</h5>
                                <h6>Price $ {price}</h6>
                                <button className={`${inCart ? "added-cart" : "addtocart"}`}
                                    onClick={ () => { addTocart(id); openmodel(id)  }
                                
                                }
                                >{inCart ? "Added Cart" : "Add To Cart"}</button>
                            </div>
                        </div>
                    }
                }
            </Consumer>
        </div>
    )
}


Products.propTypes = {
    product: PropTypes.shape({
        price: PropTypes.number,
        id: PropTypes.number,
        imges: PropTypes.string,
        price: PropTypes.number
    }).isRequired
}
export default Products
