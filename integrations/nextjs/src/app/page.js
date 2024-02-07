import GoodDataChart from "./gooddatachart";
import Image from "next/image";

export default function Home() {
  return (
      <div id="main">
          <header className="site-header">
              <h1>My Fruit Store</h1>
              <nav>
                  <a href="#home" className="nav-link">Home</a>
                  <a href="#products" className="nav-link">Products</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#contact" className="nav-link">Contact</a>
              </nav>
          </header>
          <main>
              <section className="products">
                  <h2>Todays Fruits</h2>
                  <div className="product-list">
                      <div className="product-item">
                          <img src="apples.jpeg" alt="Apples"/>
                              <h3>Apples</h3>
                              <p>Ideal for baking a delicious pie!</p>
                      </div>
                      <div className="product-item">
                          <img src="pears.jpeg" alt="Placeholder Image for Product 2"/>
                              <h3>Pears</h3>
                              <p>Ideal for smoothies!</p>
                      </div>
                      <div className="product-item">
                          <img src="bananas.jpeg" alt="Placeholder Image for Product 3"/>
                              <h3>Bananas</h3>
                              <p>Get your daily dose of potassium!</p>

                      </div>
                  </div>
              </section>
              <section class="data-visualization">
                  <h1>
                      Where people buy our fruits?
                  </h1>
                  <GoodDataChart/>
              </section>
          </main>

          <footer>
              <div>
                  I am a happy little Footer
              </div>
          </footer>
      </div>

);
}
