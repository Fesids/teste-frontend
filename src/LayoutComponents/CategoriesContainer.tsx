import { CategoryName } from "../ReusebleComponents/CategoryName"

export const CategoriesContainer = () =>{

    return(
        <div className="categories-container">
            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/5baaa4ef964ec9bb6a81924bc01a987a.png"/>
                   
                </div>
                <CategoryName content="Tecnologia"/>
            </div>

            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/8a2856879b2fc47b395b5bac440f2082.png"/>
                    
                </div>
                <CategoryName content="Supermercado"/>
            </div>

            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/66bda6f0c267a09340129b6b398babf0.png"/>
                   
                </div>
                <CategoryName content="Bebidas"/>
            </div>

            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/4825979ea1a6baa97091ad97ccc9be8d.png"/>
                    
                </div>
                <CategoryName content="Ferramentas"/>
            </div>

            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/c5d4ae04d5771f78b2e045d56dc6cef4.png"/>
                    
                </div>
                <CategoryName content="Saúde"/>
            </div>

            <div className="category-container">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/629e9d89619a124562be9750edf436b2.png"/>
                    
                </div>
                <CategoryName content="Esportes e Fitness"/>
            </div>

            <div className="category-container last">
                <div className="category-icon">
                    <img src="http://127.0.0.1:8080/ab3bb3f1719627cbe3cee87bcc5ca589.png"/>
                    
                   
                </div>
                <CategoryName content="Moda"/>
            </div>


        </div>
    )
}