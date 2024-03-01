import { useState } from "react"
import { Link } from "react-router-dom"
export default function CategoriesIndex(content) {
    
    console.log("sjekk", content)
    const [search, setSarch] = useState("")
    
    const handleSumbit = (e) => {
        e.preventDefault()
        setQuery(serach)

    }
    
    const handelChamge =()
    return(
    <>
            <h1>Characters</h1>
            <form>
                <form onSubmit={handleSumbit}
                <label htmlFor="search"> Søk etter karakter:</label>
                <input type="text" id="serarch" placeholder="Rick..."></input>
                <input type="text" id="serarch" placeholder="Rick..."></input>
                <input type="sumbit"
            </form>
        <ul className="category-list">
            {content?.map(item => <li key={item.id}><Link to={item.name}>{item.name}</Link></li>)}
        </ul>
    </>)
}