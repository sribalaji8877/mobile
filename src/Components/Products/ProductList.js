import React, { Component } from 'react'
import Products from './Products';
import Title from './Title';
import './Products.css'
import { Consumer } from '../context/ContextCreate';
import { ProductDetails } from '../../Data';
class ProductList extends Component {
    state={
        search:"",
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.id] : e.target.value
      })
    }
  
    render() {
        return (
            <div className="container">
                <Title title="Our" name="Products"></Title>
                <input type="search" onChange={this.handleChange} id="search" value={this.state.search}></input>
                <div className="product_overalls">
                    <Consumer>
                        {(value) => {
                            return value.product.map(pro => {
                                return <Products key={pro.id} product={pro}></Products>
                            })
                        }}
                    </Consumer>
                </div>
            </div>
        )
    }
}
export default ProductList