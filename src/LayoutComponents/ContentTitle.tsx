
interface ContentTitleProps{
    content: string
}
export const SimpleContentTitle = ({content}: ContentTitleProps) =>{

    return(
        <div className="simple-content-title">
            {content}
        </div>
    )

}

export const ContentTitle = ({content}: ContentTitleProps) =>{

    return(
        <div className="content-title">
            {content}
        </div>
    )

}