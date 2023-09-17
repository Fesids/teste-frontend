
interface TitleProps{
    content: string
}

export const ReleatedTitle = ({content}: TitleProps) =>{

    return(
        <div className="releated-products-title">
           <h1><span>{content}</span></h1>
        </div>
    )
}