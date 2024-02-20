import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home  from '/'
import Categories from './components/Categories'
import Layout from './components/Layout'

function App() {

  return (

    <Layout>

    <Routes>
      <Route index elemet={<Home />} />
        <Route path="categories/*" element={<Categories />} />
        <Route index element= { <Categoriesindex/>}/>
        <Route path=":slug" element={<Category />} /> 
        
      
      </Routes>  
    </Layout>
  )
}

export default App
