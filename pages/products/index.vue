<template>
	<div class="">
		<div class="columns is-multiline is-8 mx-3 my-2">
			<div class=" column is-4" v-for="product in products" :key="product.id">
				<div class="card" style="padding:20px">
					<div class="card-image">
						<figure class="image is-4by3">
							<img :src="product.img" alt="Placeholder image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4">{{product.name}}</p>
							</div>
						</div>
						<div class="content">	
							{{product.info}}
						</div>
					</div>
					<div class="card-actions">
						<b-button type="is-primary"  expanded outlined
						tag="nuxt-link" :to="'/product/'+product.id"
						 >View Product</b-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				"hello":"World"
			}
		},
		computed:{
			products: function() {
				return this.$store.getters["data/products"]
			}
		}

	}
</script>