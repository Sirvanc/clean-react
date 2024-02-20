import { Link } from "react-router-dom"
import { posts } from "../assets/posts"

export default function PostCard({ title, category, ingres, id }) {

    return (
        <article>
            <h3>{title}</h3>
            <p>{ingres}</p>
            <Link to="">{category}</Link>
            <Link to="">{JSON:}</Link>
            
        </article>
    )
    
}