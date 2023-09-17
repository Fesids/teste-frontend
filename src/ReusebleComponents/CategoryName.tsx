
interface CNProps{
    content: string
}
export const CategoryName = ({content}: CNProps) =>{
    return(<div className="category-name">
        {content}
    </div>)
}