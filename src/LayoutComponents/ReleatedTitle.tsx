
interface TitleProps{
    content: string
}

export const ReleatedTitle = ({content}: TitleProps) =>{

    return(
        <div className="releated-products-title">
           {content}
        </div>
    )
}