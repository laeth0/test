import React from 'react';
import useFetch from './hooks/useFetch';
import { Link } from 'react-router';
import { BrowserRouter, Route, Router } from 'react-router-dom';
export default function Caty1 (){
    const {data,loading,error}=useFetch('https://dummyjson.com/products/categories');
    console.log(data);
    if(loading) return <p>Loading...</p>;
    return (
        <>

        {error? <div className='alert alert-danger'>{error}</div>:''}
        {data.map((c)=>
        <div className='container' >
         <Link className='h12' to={`/category/${c.name}`}>{c.name}</Link>
            
        </div>
      
    
      

        )}
        </>
    )
    
}
