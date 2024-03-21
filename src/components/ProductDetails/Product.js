import React,{useEffect, useState} from "react";
import './Product.css'
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../ApiService/api";


function Product(){

    const {id} = useParams();
    const [element,setElement] = useState({});
    
    useEffect(() => {

        const getElement = async() => {
            const data = await getProductId(id);
            setElement(data);
        }
        getElement()

    },[id])


    return(
        <div className="product-details">
            <img src={element.image} alt="" style={{width:'200px'}}></img>
            <div className="product-info">

                <h2>{element.title}</h2>
                <p>{element.price}</p>
                <button>Buy now</button>
                <Link to='/'><button>Go back</button></Link>
            </div>

        </div>
    )
}

export default Product;