<template>
	<div class="root">
		<div class="title has-text-centered">
			<p class="ptitile">Products</p>
		</div>
		<div class="columns">
						<div class="column product">
					<div class="column product">
				<div class="card">
					<div class="card-image">
						<figure class="image is-4by3">
							<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
						</figure>
					</div>
					<div class="card-content">
						<h1 class=" title is-3">Product A</h1>
						<div class="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus nec iaculis mauris
							<a class="button is-info " href="#">Buy Now</a>
						</div>
					</div>
				</div>
			</div>
			</div>


		</div>
	</div>
</template>

<style lang="css" scoped>
.root{
	padding-right: 40px;
	padding-left: 40px;
	margin-bottom: 100px;
}
.ptitile{
	padding-top: 1rem;
}
.product{
	/*background-color: grey;*/
	min-height: 250px;
	max-height: 300px;
	margin-right: 3px;
}
.card a{
	margin-top:10px;
}
</style>

<script type="text/javascript">
	 import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				name : "Hello",
				// products : this.$store.getter.storeproducts
			}
		},
	computed: mapGetters({
   	 articles: 'data/getproducts',
  
  }),
		
	}
</script>