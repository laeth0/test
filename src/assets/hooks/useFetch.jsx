import React, { useEffect } from "react";
import axios from 'axios';
export default function useFetch (url){
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const getData =async()=>{
        try{
            setLoading(true);
            const {data} = await axios.get(url);
            setData(data);
            setError(null);
            setLoading(false);
        } catch(err){
            setError(err);
            
        }
        finally{
            setLoading(false);
        }

    }
    useEffect(()=>{
        getData();
    }
,[])

    return {data, error, loading}
}
