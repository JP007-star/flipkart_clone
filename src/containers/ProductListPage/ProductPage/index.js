import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductPage } from '../../../actions';
import getParams from '../../../utlis/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { generatePublicURL } from '../../../urlConfig';
import { Card } from 'react-bootstrap';
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
            <div style={{ margin: '0 10px' }}>
                <h1>{page.title}</h1>
                <Carousel renderThumbs={() => { }}>
                    {
                        page.banners && page.banners.map((banner, index) =>
                            <div key={index}>
                                <a 
                                style={{display:'block'}}
                                href={banner.navigateTo}
                                >
                                    <img src={generatePublicURL(banner.img)} alt="" />
                                </a>

                                {/* <p className="legend">legend1</p> */}
                            </div>
                        )
                    }
                </Carousel>
                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                {
                    page.products && page.products.map((product,index) => 
                        <Card key={index} style={{width:'400px',height:'100px',margin:'0 5px'}}> 
                          <img style={{width:'100%' ,height:'300px'}} src={generatePublicURL(product.img)} alt=""/>
                        </Card>
                     )              
                }
                </div>
                
            </div>
        </>
    )

}