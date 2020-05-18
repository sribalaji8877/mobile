import React, { Component } from 'react';
import { Provider } from '../context/ContextCreate';
import { ProductDetails, DetailPages } from '../../Data'

class Main extends Component {
    state = {
        product: [],
        detail: DetailPages,
        cart: [],
        modelproduct: DetailPages,
        modelopen: false,
        subTotal: 0,
        Tax: 0,
        Total: 0,
        discount: 100
    }
    componentDidMount = () => {
        let storeArr = [];
        ProductDetails.map(pro => {
            const getvalue = pro;
            storeArr = [...storeArr, { ...getvalue, quantity: 1 }]
        })
        this.setState({
            product: storeArr
        })
    }
    getitems = (id) => {
        const finder = this.state.product.find(fin => {
            return fin.id === id
        })
        return finder
    }
    additems = (id) => {
        const added = this.getitems(id)
        this.setState({
            detail: added
        })
    }

    addTocart = (id) => {
        let tempproduct = [...this.state.product];
        const store = this.getitems(id)
        store.inCart = true;
        store.count = store.count + 1;
        store.total = store.price;
        this.setState({
            product: tempproduct,
            cart: [...this.state.cart, { ...store }],
        }, () => {
           this.totaladd()
        })
    }
    totaladd=()=>{
        let subtotal = 0;
        let dis = 100;
        const store = this.state.cart.map(del => {
            return subtotal += del.total
        })
        const taxStore = subtotal * 0.01;
        const ttax = parseFloat(taxStore.toFixed(2));
        const total = subtotal + ttax - dis;
        this.setState({
            subTotal: subtotal,
            Tax: ttax,
            Total: total
        })
    }
    openmodel = (id) => {
        const finder = this.getitems(id);
        this.setState({
            modelproduct: finder,
            modelopen: true
        })
    }
    closemodel = () => {
        this.setState({
            modelopen: false
        })
    }

    clearCart = () => {
        this.setState({
            cart: []
        }, () => {
            let newArry = [];
            ProductDetails.map(x => {
                const store = x;
                newArry = [...newArry, { ...store }]
            })
            this.setState({
                product: newArry
            })
        })
    }
    removeCart = (id) => {
        const storeCart = [...this.state.cart];
        const storeProduct = [...this.state.product];
        const filter = storeCart.filter(fil => {
            return fil.id !== id
        })
        const storred = storeProduct.find(y => {
            return y.id === id
        })
        storred.inCart = false;
        storred.count = 0;
        storred.total = 0;

        this.setState({
            product: storeProduct,
            cart: filter
        })

    }
    increment=(id)=>{
       const storeCart = [...this.state.cart];
       const getfind = storeCart.find(y=>{
           return y.id === id
       });
       getfind.count= getfind.count+1;
       getfind.total=getfind.count*getfind.price
       this.setState({
           cart:storeCart
       },()=>{
           this.totaladd()
       })
    }
    decrement=(id)=>{
        const storeCarts = [...this.state.cart];
        const getfind = storeCarts.find(y=>{
            return y.id === id
        });
        getfind.count= getfind.count -1;
        if(getfind.count < 1){
         return   this.removeCart(id)
        }
        else{
            getfind.total=getfind.count*getfind.price
        }
        this.setState({
            cart:storeCarts
        },()=>{
            this.totaladd()
        })
    }
    render() {
        return (
            <div>
                <Provider value={{
                    ...this.state,
                    additems: this.additems,
                    addTocart: this.addTocart,
                    openmodel: this.openmodel,
                    closemodel: this.closemodel,
                    clearCart: this.clearCart,
                    removeCart: this.removeCart,
                    increment:this.increment,
                    decrement:this.decrement
                }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export default Main
