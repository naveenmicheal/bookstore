<template>
	<div>



		<div class="columns is-multiline is-8 mx-3 my-2">

			<div class=" column is-4" v-for="product in products" :key="product.id">
				<div class="card" style="padding:20px">
					<div class="card-image">
						<figure class="image is-4by3">
							<img :src="product.media[0].url" alt="Placeholder image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4">{{product.productname}}</p>
							</div>
						</div>
						<div style="height: 40px" class="content">	
							{{product.shortintro}}
						</div>
					</div>
					<div class="card-actions">
						<b-button type="is-primary"  expanded outlined
						tag="nuxt-link" :to="'/product/'+product._id"
						>View Product</b-button>
					</div>
				</div>
			</div>
		</div>
		<div :class="{ hiddenbar:doneloading }" style="width: 50%;margin-top: 40px; margin-right: auto; margin-left: auto;">
			<b-progress type="is-primary"></b-progress>
		</div>
		
		<bottombar v-if="length >0" id="bbar"/>
		</div>
	</template>

	<script>
		export default{
			data(){
				return{
					doneloading : true
				}
			},
			computed:{
				products: function() {
					return this.$store.getters["data/products"]
				},
				length(){
					return this.$store.getters["data/getcart"].length
				}
			},
			methods:{
			},
			mounted(){
				console.log("mounted TRIGGERED")
			// this.$store.commit("data/clearcart")	
			setTimeout(()=>{

			},100)
			if(this.products.length === 0){
				this.doneloading = false
				console.log("hh")
				fetch("https://wiredapi.herokuapp.com/store/PRGgD6Mchkyf_Utkp2013YmLdcHtDY").then(data => data.json().then(r => {
					this.$store.commit("data/addproducts",r.products)
					this.doneloading = true
				}))
			}
		},

	}
</script>

<style lang="css" scoped>
#bbar{
	display: none;
}
.hiddenbar{
	display: none
}
@media only screen and (max-width: 768px) {
	#bbar{
		display: block;
	} 
}
</style>