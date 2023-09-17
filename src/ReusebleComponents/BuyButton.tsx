
interface ButtonProps{
    content?: string
}

export const BuyButton = ({content}: ButtonProps) =>{
    return(
    <div className="buy-button">
        <p>{content}</p>
    </div>)
}