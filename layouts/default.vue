<template>
  <div>
  	<navbar/>
    <nuxt />
    <footbar/>    
  </div>
</template>

<script>
	import navbar from '~/components/navbar'
	import footbar from '~/components/footbar'
  import axios from "axios"
  export default {

    data () {
      return {
      }
    },
    components :{
     navbar,
     footbar
   },
   computed:{

   },
   mounted(){
   },
   created(){
        axios.get("https://wiredapi.herokuapp.com/store/PRGgD6Mchkyf_Utkp2013YmLdcHtDY").then(data =>{
        console.log(data.data)
        this.$store.commit("data/addproducts",data.data.products)
      })
    console.log(23)
  }
}
</script>

<style lang="css" scoped>
</style>
