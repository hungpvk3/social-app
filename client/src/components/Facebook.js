import React from 'react'
import Header from './layouts/header/Header'
import ContenLeft from './layouts/contentLeft/ContenLeft'
import ContentRight from './layouts/contentRight/ContentRight'
import Content from './layouts/content/Content'

const Facebook = () => {
    return (
        <div className="containers">
                <Header />
            <div className="row">
                <div className="col-md-2 col-lg-3">
                    <ContenLeft />
                </div>
                <div className="col-md-8 col-lg-6">
                    <Content />
                </div>
                <div className="col-md-2 col-lg-3">
                    <ContentRight />
                </div>
            </div>
        </div>
    )
}

export default Facebook
