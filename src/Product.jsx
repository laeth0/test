import React from "react";
import { useParams } from "react-router";
import useFetch from "./assets/hooks/useFetch";
export default function Product (){
    const {id} =useParams();
    const {data,loading,error}=useFetch(`https://dummyjson.com/products/${id}`);
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error fetching data</h1>

    return (
       
        <div className="card1 mb-3 container"   key={data.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <p className="card-text"><small className="text-body-secondary">${data.price}</small></p>
              <p className="card-text"><small className="text-body-secondary">in stock {data.stock}</small></p>
              <button className="mohyee1">Add to cart</button>
              {data.images.map(img=><img src ={img} className="w-25"/>)}

            </div>
          </div>
        </div>
      </div>

          
         
    )
}