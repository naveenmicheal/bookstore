<template>
  <div>
    <hero/>
    <!-- <products/> -->
    <about/>
    <bottombar v-if="length >0" id="bbar"/>
  <div>
  </div>
  </div>
</template>

<script>
// import Card from '~/components/Card'
import hero from '~/components/hero'
import products from '~/components/products'
import about from '~/components/about'
export default {
  name: 'Home',
  computed:{
    length(){
      return this.$store.getters["data/getcart"].length
    } 
  },
  mounted(){
    console.log("BBook")
  },
  components: {
    hero,
    products,
    about
  },
  // mounted(){
  //  this.$axios.$get('https://wiredapi.herokuapp.com/store/ul1jtVPLEh3c73V44y_Jc410pqQpJ6')
  //  .then(data=>{
  //   this.$store.commit("data/store",data.products)
  //  })
  //  .catch(err=>console.log(err))
  // }
}
</script>

<style lang="css" scoped>
  #bbar{
    display: none;  
  }
  @media only screen and (max-width: 768px) {
    #bbar{
    display: block;
  } 
  }
</style>