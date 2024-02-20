import { useParams } from "react-router-dom"
import { posts } from "../assets/posts"
import { useEffect, useState } from "react"

export default function Category() {
    const { slug } = useParams()
    cosnt[post, setPost] = useState()
    
    useEffect(() => {
        setPost(posts.filter(post => post.category  === slug))
    },[])
    console.log("sjekk ,post")

    return (

        <section>
            <h1>{slug}</h1>
            {post.map(item => <PostCard key={item.id} title={item.title} category={})}
    

        </section>
        
    )
}