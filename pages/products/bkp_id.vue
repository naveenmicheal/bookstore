<template>
	<div>
		{{pid}}
	</div>
</template>

<script type="text/javascript">
	import storedata from '~/static/storedata.json'
	export default{
		data(){
			return{
				pid :this.$route.params.id,
				
			}
		},
		computed:{
			product : ()=>{
				return storedata.find(product => product['id'] == this.pid)
			}
		}
	}
</script>