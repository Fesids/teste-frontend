import { Product } from "../models/Product"
import { BuyButton } from "./BuyButton"

interface ProductProps{
    product: Product
}

export const ProductComp = ({product}: ProductProps)=>{
    return(
        <div className="product">
            <div className="product-img">
                <img src={product.photo}>
                </img>
            </div>
            <div className="product-info">
                <div className="product-desc">
                    {product.descriptionShort}
                </div>
                <div className="old-price">
                    R$ 30,90
                </div>
                <div className="actual-price">
                    {product.price}
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
    )
}