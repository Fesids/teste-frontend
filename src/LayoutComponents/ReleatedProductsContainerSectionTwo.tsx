import { ReleatedTitle } from "./ReleatedTitle"

export const ReleatedProductsContainerSectionTwo = () =>{

    return(
        <div className="releated-products-container-section-two">
            <ReleatedTitle content="Produtos Relacionados"/>
            <div className="see-all">
                Ver todos
            </div>
            <div className="products-container">
                <div className="products">
                    <h2>Produtos</h2>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <button>CONFIRA</button>
                </div>
                <div className="products">
                    <h2>Produtos</h2>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <button>CONFIRA</button>
                   
                </div>
            </div>

        </div>
    )
}