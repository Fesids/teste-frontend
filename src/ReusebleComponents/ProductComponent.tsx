import { useState } from "react"
import { Product } from "../models/Product"
import { BuyButton } from "./BuyButton"

import { ProdModal } from "../Modal/Modal"

interface ProductProps{
    product: Product
}



export const ProductComp = ({product}: ProductProps)=>{

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
    
        <div className="product">
            <div className="product-img" onClick={() => setIsOpen(true)}>
                <img src={product?.photo}>
                </img>
            </div>
            <div className="product-info">
                <div className="product-desc">
                    {product?.descriptionShort}
                </div>
                <div className="old-price">
                    R$ 30,90
                </div>
                <div className="actual-price">
                    R$ {product?.price}
                </div>
                <div className="installments">
                    ou 2x de R$ 49,95 sem juros
                </div>
                <div className="free">
                    Frete grátis
                </div>
                <BuyButton content="COMPRAR"/>
               

            </div>
            
        </div>
        {isOpen && <ProdModal setIsOpen={setIsOpen} data={product}/>}
        </>
    )
}

