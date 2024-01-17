<script>
export default {
  name: 'App',
  components: {GoodDataChart}
  // Additional script content
}
import GoodDataChart from "@/GoodDataChart.vue";
</script>

<template>
  <div id="app">
    <!-- Header Section -->
    <header class="site-header">
      <h1>My Store</h1>
      <nav>
        <a href="#home" class="nav-link">Home</a>
        <a href="#products" class="nav-link">Products</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </header>

    <!-- Main Content Section -->
    <main>
      <!-- Product Listing -->
      <section class="products">
        <h2>Featured Products</h2>
        <div class="product-list">
          <div class="product-item">
            <img src="https://via.placeholder.com/200x250" alt="Placeholder Image for Product 1">
            <h3>Product 1</h3>
            <p>Description of Product 1.</p>
          </div>
          <div class="product-item">
            <img src="https://via.placeholder.com/200x250" alt="Placeholder Image for Product 2">
            <h3>Product 2</h3>
            <p>Description of Product 2.</p>
          </div>
          <div class="product-item">
            <img src="https://via.placeholder.com/200x250" alt="Placeholder Image for Product 3">
            <h3>Product 3</h3>
            <p>Description of Product 3.</p>
          </div>
        </div>
          <!-- More products can be added here -->
      </section>

      <!-- Data Visualization Embedding Space -->
      <section class="data-visualization">
        <GoodDataChart></GoodDataChart>
      </section>
    </main>

    <!-- Footer Section -->
    <footer>
      <div>
        I am a happy little Footer
      </div>
    </footer>
  </div>
</template>


<style>
/* General styles */
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

/* Header styles */
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

/* Main content styles */
.products, .data-visualization {
  margin: 1em;
  padding: 1em;
}

/* Footer styles */
footer {
  background-color: #f5f5f5;
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
    width: max-content;
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
