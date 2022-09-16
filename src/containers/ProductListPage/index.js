import React, { useEffect,useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicURL } from '../../urlConfig';
import './style.css'

export default function ProductListPage(props) {

  const product = useSelector(state => state.product);
  const [priceRange,setPriceRange] = useState({
    under5k: 'under 5000',
    under10k:'under 10000',
    under15k:'under 15000',
    under20k:'under 20000',
    under30k:'under 30000',
    above30k:'above 30000'
  })
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {

    dispatch(getProductsBySlug(slug))
  }, [])
  return (
    <>
       
      <Layout />
      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <div className='card row'>

              <div className='card-header'>
                <div className='card-title'>{slug} mobile {priceRange[key]}</div>
                <button>veiw all</button>
              </div>
              
              <div className='card-body'>
                {
                  product.productsByPrice[key].map(product =>
                    
                      <div className='product-container'>

                        <div className='product-image'>
                          <img src={generatePublicURL(product.productPicture[0].image)} alt='#' />
                        </div>

                        <div className='product-info'>
                          <div style={{ margin: '5px 0' }}>{product.name}</div>
                          <div>
                            <span>4.5</span>&nbsp;
                            <span>1200</span>
                          </div>
                          <div className='product-price'>{product.price}</div>
                        </div>

                      </div>
                   )
                }


              </div>
            </div>
          )
        })
      }

    </>
  )
}






