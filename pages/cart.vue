<template>
	<div>
		<h1 v-if="products.length == 1"  class="title is-3 has-text-centered mt-3">{{products.length}} item in the cart</h1>
		<h1 v-if="products.length > 1" class="title is-3 has-text-centered mt-3">{{products.length}} items in the cart</h1>
		<div class="container">
			<div class="columns">
				<div class="column" >
					<h1 v-if="products.length == 0" class="title has-text-centered mt-5">Cart is Empty</h1>
					<div class="columns" v-for="product in products" :key="product._id">
						<div class="column" >
							<div class="card">  
								<div class="card-content">
									<div class="columns">
										<div class="column is-one-third">
											<img :src="product.media[0].url">

										</div>
										<div class="column">
											<p class="title is-4 mb-4"><strong>{{product.productname}}</strong></p>
											<p class="subtitle is-5 pt-4 mb-1"><strong>Price: {{product.productprice}} &#8377;</strong></p>
											<p class="subtitle is-6 pt-3">Quantity: {{product.quantity}}  &times; {{product.productprice}} = {{product.productprice * product.quantity}} &#8377;</p>
											<b-field class="actions">
												<p class="control">
													<button v-if="product.quantity >1" @click="minuscountcart(product._id)" class="button is-info is-light px-5">
														<b-icon icon="minus"></b-icon>
													</button>
												</p>
												
												<p class="control">
													<button class="button is-link is-light px-5">
														Quantity: {{product.quantity}}
													</button>
												</p>
												<p class="control ">
													<button @click="pluscountcart(product._id)" class="button is-success is-light px-5 ">
														<b-icon icon="plus"></b-icon>
													</button>
												</p>
												
											</b-field>
											<div class="content">   

											<!-- 	<p>{{}}</p> --> 
												<b-button icon-right="delete" @click="removeitemcart(product._id)" type="is-danger is-light">Remove From the Cart</b-button>


											</div>

										</div>
									</div>

								</div>	
							</div>
						</div>
					</div>
				</div>
				<div class="is-hidden-mobile is-hidden-tablet-only column" style="background-color: lightgrey" >
					<h1 class="title has-text-centered is-4">Price Details</h1>
					<hr>
					<div class="columns">
						<div class="column is-two-fifths">
							<strong>Product Name</strong>
						</div>
						<div class="column">
							<strong>Price</strong>
						</div>
						<div class="column">
							<strong>Quantity</strong>
						</div>
						<div class="column">
							<strong>Total</strong>
						</div>
					</div>

					<div class="columns" v-for="product in products" :key="product.id">
						<div class="column is-two-fifths">
							<p>{{product.productname}}</p>
						</div>
						<div class="column">
							<p>{{product.productprice}} &#8377;</p>
						</div>
						<div class="column">
							<p>{{product.quantity}}</p>
						</div>
						<div class="column">
							<p>{{product.productprice * product.quantity}}  &#8377;</p>
						</div>
					</div>
					<hr>
					<div class="columns">
						<div class="column is-two-fifths">
							<strong></strong>
						</div>
						<div class="column">
							<strong></strong>
						</div>

						<div class="column">
							<strong>Total Price: </strong>
						</div>
						<div class="column">
							<strong>{{totalprice}} &#8377;</strong>
						</div>
					</div>
					<hr>

					<b-button tag="nuxt-link" to="/checkout" @click="" type="is-dark" icon-right="send" expanded >
					Ready to Checkout
					</b-button>

				</div>

				<!-- <b-table class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd column px-3 pt-3" :data="products" :columns="columns">
				</b-table> -->
				<div class="column is-hidden-desktop is-hidden-widescreen is-hidden-fullhd column px-3 pt-3">
						<h1 class="title is-2 has-text-centered">Total Price</h1>
						<h1 class="title is-3 has-text-centered">{{totalprice}} &#8377;</h1>
						<b-button tag="nuxt-link" to="/checkout" @click="" type="is-dark" icon-right="send" expanded >
					Ready to Checkout
					</b-button>
				</div>
				

				
			</div>	
			<!-- <div class="clearall">
					<b-button @click="clearcart">Clear Cart</b-button>
				</div> -->
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				products:[],
			}
		},
		methods:{
			pluscountcart(e){
				this.$store.commit("data/pluscountcart",e)
				this.products = []
				this.products = this.$store.getters["data/getcart"]
			},
			minuscountcart(e){
				this.$store.commit("data/minuscountcart",e)
				this.products = []
				this.products = this.$store.getters["data/getcart"]
			},
			removeitemcart(e){
				let result = this.products.findIndex(item => item._id == e)
				this.$store.commit("data/removecartitem",result)
				this.products = []
				this.products = this.$store.getters["data/getcart"]
			},
			clearcart(){
				this.$store.commit("data/clearcart")
				this.products = []
				this.products = this.$store.getters["data/getcart"]
			},
		},
		computed:{
			totalprice(){
				let totalprice = 0
				this.products.forEach(item =>{
					totalprice += parseInt(item.productprice) * parseInt(item.quantity)
				})  
				return parseInt(totalprice)
			}
		},
		mounted(){
			console.log('MOUNTED FIRED')
			this.products = this.$store.getters["data/getcart"]
			if(this.products.length == 0){
				setTimeout(()=>{
					console.log("retry")
					this.products = this.$store.getters["data/getcart"]
				},100)
			}
		},
	}
</script>

<style type="text/css">
.actions button{
	border-radius: 0;
}
button{
	border-radius: 0
}
</style>

