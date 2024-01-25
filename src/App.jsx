import { useState } from 'react'
import LD_Logo from '/website_images/LD_Logo.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
  )
}

export default App
