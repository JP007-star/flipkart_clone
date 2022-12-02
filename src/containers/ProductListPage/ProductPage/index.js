import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductPage } from '../../../actions';
import getParams from '../../../utlis/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { generatePublicURL } from '../../../urlConfig';
/**
* @author
* @function ProductPage
**/

export const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const url = useLocation()
    const { page } = product;
    useEffect(() => {
        const params = getParams(url.search)
        const payload = {
            params
        }

        dispatch(getProductPage(payload))
    }, [])
    return (
        <>
            <h1>{page.title}</h1>
            
            <Carousel renderThumbs={()=>{}}>
                {
                    page.banners && page.banners.map((banner, index) =>
                        <div key={index}>
                            
                             <img src={generatePublicURL(banner.img)} alt=""/>
                             {/* <p className="legend">legend1</p> */}
                        </div>
                    )


                }
            </Carousel>

        </>
    )

}