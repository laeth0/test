import React from 'react';
import useFetch from './hooks/useFetch';
import { Link } from 'react-router';
export default function CC1 (){
    const {data,loading,error}=useFetch('https://dummyjson.com/products');
    console.log(data);
    if(loading) return <p>Loading...</p>;
    return (
        <>

        {error? <div className='alert alert-danger'>{error}</div>:''}
        {data.products.map(product =>
        <div className="card1 mb-3 container"   key={product.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><small className="text-body-secondary">${product.price}</small></p>
              <p className="card-text"><small className="text-body-secondary">in stock {product.stock}</small></p>
              <button className="mohyee1">Add to cart</button>
              <Link to={`/product/${product.id}`} className='Details'>View Details</Link>

            </div>
          </div>
        </div>
      </div>
      

        )}
        </>
    )
    
}

