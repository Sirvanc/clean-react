import { useState } from 'react'
import LD_Logo from '/website_images/LD_Logo.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)
  let massage = "Hello World"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sirvan Chalabi</h1>
      <Title  massage ="Hello World"/>
  

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
import Title from './assets/components/Title'

function App() {



  return (
      <div id="container">
        <header>
            <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle">
                <span id="cartcount">99</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <section id="cart">
                <h2>Din handlevogn</h2>
                <ul id="cartlist">
                    <li>
                        <span class="title">Produkttittel</span>
                        <span class="price">89,-</span>
                        <span class="quantity">x1</span>
                        <span class="functions">
                            <button>X</button>
                        </span>
                    </li>
                    <li>
                        <span class="title">Wengestone warriors</span>
                        <span class="price">9989,-</span>
                        <span class="quantity">x333</span>
                        <span class="functions">
                            <button>X</button>
                        </span>
                    </li>
                </ul>
            </section>
        </header>
        <nav>
            <ul>
                <li><a href="#">City</a></li>
                <li><a href="#">Ninjago</a></li>
                <li><a href="#">Castles and Knights</a></li>
                <li><a href="#">Marine and Pirates</a></li>
                <li><a href="#">Movie Characters</a></li>
            </ul>
        </nav>
      <main>
        <h2> Ninjago</h2>
        <article>
        <img src="website_images/PROD_dragon_zane.webp" alt="${product.title}" />
        <a href="#"></a>
        <h3>title</h3>
        <span>Kr. </span>
        <button onclick="addToCart(${product.prodid})">Legg i handlekurv</button>
        </article>`
            
            
        </main>
    </div>
>>>>>>> ee44acc118dfee5cd2d9932d9d4f88ffbaa46d32
  )
}

export default App
