import React from 'react';
import { Consumer } from '../context/ContextCreate';
import '../../../src/app.css';
import {Link} from 'react-router-dom'

export default function Model() {
    return (
      <React.Fragment>
            <Consumer>
                {(values) => {
                    const { modelproduct, modelopen ,closemodel } = values;
                    if (!modelopen) {
                        return
                    } else {
                        const { id, images, company, price } = modelproduct
                        return (
                            <div className="overall_model">
                            <div className="content_model">
                                <img src={images} alt="model_img"></img>
                                <h3>{company}</h3>
                                <h6>{price}</h6>
                              <Link to="/"> <button onClick={()=>{closemodel()}}>Contine Shopping</button></Link> 
                               <Link to="/cart"><button onClick={()=>{closemodel()}}>Go To Cart</button></Link> 
                                </div>
                            </div>
                        )
                    }
                }}
            </Consumer>
            </React.Fragment>
    )
}
