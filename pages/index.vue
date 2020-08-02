<template>
  <div>
  <navbar/>
  <hero/>
  <products/>
  <footbar/>
  </div>
</template>

<script>
// import Card from '~/components/Card'
import navbar from '~/components/navbar'
import hero from '~/components/hero'
import products from '~/components/products'
import footbar from '~/components/footbar'
export default {
  name: 'Home',

  components: {
    navbar,
    hero,
    products,
    footbar
  }
}
</script>
