import { BrandLogoContainer } from "./BrandLogo"
import { ReleatedTitle } from "./ReleatedTitle"

export const BrandsContainer = () =>{

    const brandsLogo = ["brand1", "brand2", "brand3", "brand4", "brand5"]

    return(
        <div className="brands-container">
            <ReleatedTitle content="Navegue por marcas"/>


            <div className="brands">
                
               {brandsLogo.map(b => <BrandLogoContainer key={b}/>)}
            </div>
            
        </div>
    )

}