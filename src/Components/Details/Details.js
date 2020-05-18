import React, { Component } from 'react'
import { Consumer } from '../context/ContextCreate';
import DetailList from './DetailList';
class Details extends Component {
    render() {
        return (
            <div className="container">
                <Consumer>
                    {(values) => {
                        const {detail}=values
                     return  <DetailList detail={detail}></DetailList>
                    }}
                </Consumer>
            </div>
        )
    }
}
export default Details