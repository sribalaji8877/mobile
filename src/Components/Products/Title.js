import React, { Fragment } from 'react'
import './Products.css'
function Title({ name, title }) {
    return (
        <Fragment>
            <h2 className="title_blog">{title} {name}</h2>
        </Fragment>
    )
}
export default Title
