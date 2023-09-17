import { BrandsContainer } from "./BrandsContainers"
import { CategoriesContainer } from "./CategoriesContainer"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { PartnersContainer } from "./PartnersContainer"
import { PromotionOutdoor } from "./PromotionOutdoor"
import { ReleatedProductsContainer } from "./ReleatedProductsContainer"
import { ReleatedProductsContainerSectionTwo } from "./ReleatedProductsContainerSectionTwo"

export const PrincipalPage = () =>{

    return(
        <div className="principal-page">
            <Navbar/>

            <PromotionOutdoor/>

            <CategoriesContainer/>

            <ReleatedProductsContainer/>

            <PartnersContainer/>

            <ReleatedProductsContainerSectionTwo/>

            <BrandsContainer/>
            
            <Footer/>

        </div>
    )

}