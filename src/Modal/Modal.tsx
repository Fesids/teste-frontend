import { useState } from "react";
import { Product } from "../models/Product";
import "./ModalStyle.scss"

interface modalProps {
    setIsOpen:(state:boolean) => void,
    data: Product
}


export const ProdModal = ({ setIsOpen, data }: modalProps) => {

    //const [isOpen, setIsOpen] = useState(true)
    const [unit, setUnit] = useState(1);

    return (
      <>

      <div className={"darkBG"} onClick={()=>setIsOpen(false)} />
      <div className="my-modal">
        <div className="img-container">
          <img src={data.photo}>
          </img>
        </div>
        <div className="right-content">
          <div className="product-name">
            {data.productName}
          </div>
          <div className="price">
            R$ {data.price}
          </div>
          <div className="description">
            {data.descriptionShort}
          </div>
          <div className="more-details">
            Veja mais detalhes do produto &gt;
           
          </div>

          <div className="units">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" onClick={()=> setUnit(unit-1)}>
              <path d="M4.53816 9.81812H16.3843" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>

            <div>
              {unit}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" onClick={()=> setUnit(unit+1)}>
              <path d="M10.6925 4.09094V15.5455" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
              <path d="M4.76863 9.81812H16.6148" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>

          </div>

          <div className="button">
            comprar
          </div>


        </div>
      </div>
      </>
      


     
    );
  };