import React,{useState,useEffect} from "react";
import './Home.css'
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";


function Home(){
    
    const [products,setProducts] = useState([]);

    useEffect(() => {

        const fetProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
            // console.log(data)
        }
        fetProducts()

    },[])



    return(
        <div className="product-grid">

                {
                    products.map((obj) => (
                        <div className="product" key={obj.id}>

                            <img src={obj.image} alt="alternative"></img>
                            <h2>{obj.title}</h2>
                            <p>
                                <span>{obj.price}</span>
                            </p>
                            <Link to={`/product/${obj.id}`}>
                            <button>product details</button>
                            </Link>

                        </div>
                    ))
                }

        </div>
    )

}

export default Home;