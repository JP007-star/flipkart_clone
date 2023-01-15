import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout'
import getParams from '../../utlis/getParams';

/**
* @author
* @function ProductDetailsPage
**/

export const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product= useSelector(state=>state.product)
  const {productId} = useParams()
    useEffect(() => {
        
        const payload = {
          params:{
            productId
          }
        }
    dispatch(getProductDetailsById(payload))
  })
  return(
    <>
      <Layout>
        <div>{product.productDetails.name}</div>
      </Layout>
    </>
    
    
   )

 }