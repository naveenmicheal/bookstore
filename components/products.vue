<template>
	<div class="root">
		<div class="title has-text-centered">
			<p class="ptitile">Products</p>
		</div>
		<div class="columns">
			<div v-for="product in products" :key="product['id']"class="column product">
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
									<b-button  type="is-primary" expanded>View Product</b-button>
								</nuxt-link>	
								
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
		<nuxt-link to="/products">
						<b-button class="viewall"  type="is-primary" expanded >View All Products</b-button>			
			</nuxt-link>
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
	margin-right: 1px;
}
.card a{
	margin-top:10px;
}
.title{
	margin-bottom: 10px;
}
button.button.viewall.is-primary.is-fullwidth{
	margin: auto;
	width: 50%;
}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				name : "Hello",
				products :[
				{
					"id" :"pa1",
					"name":"ProductA",
					"price" :"35",
					"info" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus",
					"img":"img1.jpeg",
					"url" :"/products/pa1"
					
				},
				{
					"id" :"pa2",
					"name":"ProductB",
					"price" :"55",
					"info" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellu",
					"img":"img2.jpeg",
					"url" :"/products/pa2"
				},
				{
					"id" :"pa3",
					"name":"ProductC",
					"price" :"75",
					"info" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus",
					"img":"img3.jpeg",
					"url" :"/products/pa3"
				}
				]
			}
		},
		
	}
</script>