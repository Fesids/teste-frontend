
import { useEffect, useState } from "react";
import { ProductComp } from "../ReusebleComponents/ProductComponent"
import { ReleatedTitle } from "./ReleatedTitle"
import axios from "axios";
import { APIResp } from "../models/APIResp";


export const ReleatedProductsContainer = () =>{

    const [data, setData] = useState({} as APIResp);
    const fetchData = async () =>{
        const response =  await axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
        .then(resp => resp);
        setData(response.data);
    }

    useEffect(()=>{

        fetchData()
        
    }, []);

    console.log(data);

    return(
        <div className="releated-products-container">
            
            <ReleatedTitle content="Produtos Relacionados"/>
            <div className="releated-products-type-container">
                <div className="product-type">
                    CELULAR
                </div>
                <div className="product-type">
                    ACESSÓRIOS
                </div>
                <div className="product-type">
                    TABLETS
                </div>
                <div className="product-type">
                    NOTEBOOKS
                </div>
                <div className="product-type">
                    TVS
                </div>
                <div className="product-type">
                    VER TODOS
                </div>

            </div>

            <div className="products">
               

                

                {data.products? data.products.slice(0,4).map(product => <ProductComp product={product}/>): ""}
               
                
            </div>
        </div>
        
    )
}