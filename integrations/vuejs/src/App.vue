<script>
export default {
  name: 'App',
  components: {GoodDataChart}
}
import GoodDataChart from "@/GoodDataChart.vue";
</script>

<template>
  <div id="app">
    <header class="site-header">
      <h1>My Fruit Store</h1>
      <nav>
        <a href="#home" class="nav-link">Home</a>
        <a href="#products" class="nav-link">Products</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </header>
    <main>
      <section class="products">
        <h2>Todays Fruits</h2>
        <div class="product-list">
          <div class="product-item">
            <img src="@/assets/apples.jpeg" alt="Apples">
            <h3>Apples</h3>
            <p>Ideal for baking a delicious pie!</p>
          </div>
          <div class="product-item">
            <img src="@/assets/pears.jpeg" alt="Placeholder Image for Product 2">
            <h3>Pears</h3>
            <p>Ideal for smoothies!</p>
          </div>
          <div class="product-item">
            <img src="@/assets/bananas.jpeg" alt="Placeholder Image for Product 3">
            <h3>Bananas</h3>
            <p>Get your daily dose of potassium!</p>
          </div>
        </div>
      </section>
      <section class="data-visualization">
        <GoodDataChart></GoodDataChart>
      </section>
    </main>

    <footer>
      <div>
        I am a happy little Footer
      </div>
    </footer>
  </div>
</template>


<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%
}

.site-header {
  background-color: #333;
  color: white;
  padding: 1em 1em;
  width: 100%;
}

nav .nav-link {
  color: white;
  text-decoration: none;
  margin: 0 1em;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.products, .data-visualization {
  margin: 1em;
  padding: 1em;
}

footer {
  background-color: #333;
  text-align: center;
  padding: 1em 0;
  margin-top: auto;
}

/* Responsive styles */
@media (max-width: 899px) {

  .nav-link {
    margin: 0.5em 0;
  }

  .product-list {
    flex-direction: column;
    align-content: center;
    width: 100%;
    display: flex;
  }

  .product-item {
    margin: 0.5em;
    align-self: center;
    align-content: center;
  }
}

@media (min-width: 900px) {
  nav {
    flex-direction: row;
  }

  .nav-link {
    margin: 0.5em 0;
  }

  .product-list {
    flex-direction: row;
    display: flex;
  }

  .product-item {
    width: 30%;
    margin: 0.5em;
    align-self: center;
    align-content: center;
    display:flex;
    flex-direction: column;
  }
}
</style>
