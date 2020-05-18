import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css'
import { Consumer } from '../context/ContextCreate';

function DetailList({ detail }) {
    const { title, images, info, inCart, id } = detail;
    return (
        <Consumer>
            {(value) => {
                const { addTocart } = value;
                return (
                    <div className="detail_list">
                        <h1>{title}</h1>
                        <img src={images}></img>
                        <h3>{info}</h3>
                        <div className="detail_btn">
                            <Link to="/"><button>Back to Product</button></Link>
                            <button className={`${inCart ? "added-cart" : "addtocart"}`}
                                onClick={() => { addTocart(id) }}
                            >{inCart ? "Added Cart" : "Add To Cart"}</button>
                        </div>

                    </div>
                )
            }}
        </Consumer>

    )
}
export default DetailList