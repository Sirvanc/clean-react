import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home  from '/'
import Categories from './components/Categories'
import Layout from './components/Layout'
import postes from './assets/posts'
import PostPage from './components/PostPage'

function App() {

  return (

    <Layout>

    <Routes>
      <Route index elemet={<Home />} />
        <Route path="categories/*" element={<Categories />} />
        <Route index element= { <Categoriesindex/>}/>
        <Route path=":slug" element={<Category />} /> 
        <Route path=':slug/:postid' elemet={<PostPage />} />
      
      </Routes>  
    </Layout>
  )
}

export default App
