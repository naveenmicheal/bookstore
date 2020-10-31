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
    
  }
}
</script>

<style lang="css" scoped>
</style>
