<template>
  <div>
  <navbar/>
  <hero/>
  <products/>
  </div>
</template>

<script>
// import Card from '~/components/Card'
import navbar from '~/components/navbar'
import hero from '~/components/hero'
import products from '~/components/products'
export default {
  name: 'Home',

  components: {
    navbar,
    hero,
    products
  }
}
</script>
