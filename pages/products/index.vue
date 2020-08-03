<template>
	<div class="root">
		<div class="title has-text-centered">
			<p class="ptitile">Products</p>
		</div>
		<div class="columns">
			<div v-for="product in products.slice(0,3)" :key="product['id']"class="column product">
				<div class="column product">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img :src="product['img']" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<h1 class=" title is-3">{{product['name']}}</h1>
							<p class="title is-4">{{product['price']}}rs</p>
							<div class="content">
								{{product['info']}}
								<br> <br>
								<nuxt-link :to="product.url">
								<b-button type="is-primary" expanded>View Product</b-button>
								</nuxt-link>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


			<div class="columns">
			<div v-for="product in products.slice(3,6)" :key="product['id']"class="column product">
				<div class="product">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img :src="'/'+product['img']" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<h1 class=" title is-3">{{product['name']}}</h1>
							<p class="title is-4">{{product['price']}}rs</p>
							<div class="content">
								{{product['info']}}
								<br> <br>
								<nuxt-link :to="product.url">
								<b-button type="is-primary" expanded>View Product</b-button>
							</nuxt-link>
							</div>
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
@media only screen and (max-width: 768px) {
.root{
	padding-right: 10px;
	padding-left: 10px;
}
	
}
.ptitile{
	padding-top: 1rem;
}
.product{
	/*background-color: grey;*/
/*	min-height: 250px;
	max-height: 300px;*/
	margin-right: 3px;
}
.card a{
	margin-top:10px;
}
.title{
	margin-bottom: 10px;
}
.card{
	box-shadow: 0px 1px 6px grey;
}
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<script type="text/javascript">
	import storedata from '~/static/storedata.json'
	export default{
		data(){
			return{
				name : "Hello",
				products : storedata
			}
		},
		transition: "default"
	}
</script>