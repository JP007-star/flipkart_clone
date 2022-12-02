import React from 'react'
import { useLocation } from 'react-router-dom';

import Layout from '../../components/Layout'
import getParams from '../../utlis/getParams';
import { ProductPage } from './ProductPage';
import { ProductStore } from './ProductStore'

import './style.css'

export default function ProductListPage(props) {
  const url = useLocation();

  const renderProducts = () => {
    const params = getParams(url.search)
    console.log(params);
    let content = null;
    switch (params.type) {
      case 'store':
        content = <ProductStore {...props} />;
        break;    
      case 'page':
        content = <ProductPage {...props} />;
        break;
      default:
        content = null
    }

    return content;
  }
  return (
    <>

      <Layout>
        {renderProducts()}
      </Layout>

    </>
  )
}






