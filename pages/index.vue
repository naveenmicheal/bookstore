<template>
  <div>
  <hero/>
  <products/>
  <about/>
  </div>
</template>

<script>
// import Card from '~/components/Card'
import hero from '~/components/hero'
import products from '~/components/products'
import about from '~/components/about'
export default {
  name: 'Home',

  components: {
    hero,
    products,
    about
  }
}
</script>
