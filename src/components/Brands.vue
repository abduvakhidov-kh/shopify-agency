<script setup>
const brandList = [
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alfresco-logo.svg/2560px-Alfresco-logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png',
]
</script>

<template>
  <section class="brands">
    <h2 class="brands-header">Trusted by brands</h2>
    <p>We work in partnership with ambitious brands who have a growth mindset. Brands with purpose and substance that
      aren't afraid to stand out from the crowd. Whether you're looking to launch, rebrand, scale, or go global, we'd love
      to work with you.</p>
    <div class="brand-list">
      <div v-for="(item, index) in brandList" :key="index">
        <img v-bind:src="item" class="logo" />
      </div>
    </div>
  </section>
</template>

<style>
.logo {
  height: 50px;
}

.brands {
  background-color: black;
  color: #fff;
  padding: 2.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}

.brands p {
  text-align: center;
  font-weight: 300;
  width: 90%;
  margin-bottom: 1rem;
}

.brands-header {
  font-size: 32px;
  font-weight: 500;
  position: relative;
}

.brands-header::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 50%;
  border-bottom: 1px solid var(--primary);
  transition: .3s;
}

.brands-header:hover::before {
  width: 100%;
}

.brand-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  filter: grayscale(100%);
  margin-bottom: 1rem;
}
</style>