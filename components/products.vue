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
							<div class="content">
								{{product['info']}}
								<br>
								<a class="button is-info " href="#">Buy Now {{product['price']}}rs</a>
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
/*	min-height: 250px;
	max-height: 300px;*/
	margin-right: 3px;
}
.card a{
	margin-top:10px;
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
					"img":"product.png"
				},
				{
					"id" :"pa2",
					"name":"ProductB",
					"price" :"55",
					"info" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellu",
					"img":"product.png"
				},
				{
					"id" :"pa3",
					"name":"ProductC",
					"price" :"75",
					"info" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus",
					"img":"product.png"
				}
				]
			}
		},
		
	}
</script>