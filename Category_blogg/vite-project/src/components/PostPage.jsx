import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostPage() {
    const { slug, postid } = useParams()

    cosnt[currentPost, setCurrentPost] = useState()
    
    useEffect(() => {
        setCurrentCategory(post?.filter(post=> post.category === slug))
    },[])
    
    console.log (setCurrentCategory?.filter(item => JSON.stringify(item.id) === postid))

    return <h1> Post Page</h1>
}