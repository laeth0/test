import React from "react";
import { useParams } from "react-router";
import useFetch from "./assets/hooks/useFetch";
export default function Category (){
    const {name} =useParams();
    const {data,loading,error}=useFetch(`https://dummyjson.com/products/category/${name}`);
    console.log(data);
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error fetching data</h1>
    return (
        <>

        {error? <div className='alert alert-danger'>{error}</div>:''}
        {data.products.map((c)=>
        <div className='container card1' >
        <h3>{c.title}</h3>
        <p>{c.description}</p>
        <img src={c.thumbnail} alt={c.title}></img>
            
        </div>
      
    
      

        )}
        </>
    )

}

