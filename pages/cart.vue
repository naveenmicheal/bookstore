<template>
	<div>
		<h1 v-if="products.length == 1"  class="title is-3 has-text-centered mt-3">{{products.length}} item in the cart</h1>
		<h1 v-if="products.length > 1" class="title is-3 has-text-centered mt-3">{{products.length}} items in the cart</h1>
		<div class="container">
			<div class="columns">
				<div class="column" >
					<div class="columns" v-for="product in products" :key="product.id">
						<div class="column" >
							<div class="card">  
								<div class="card-content">
									<div class="columns">
										<div class="column is-one-third">
											<img :src="product.img">

										</div>
										<div class="column">
											<p class="title is-4 mb-4"><strong>{{product.name}}</strong></p>
											<p class="subtitle is-5 pt-4 mb-1"><strong>Price: {{product.price}} &#8377;</strong></p>
											<p class="subtitle is-6 pt-3">Quantity: {{product.quantity}}  &times; {{product.price}} = {{product.price * product.quantity}} &#8377;</p>
											<b-field class="actions">
												<p class="control ">
													<button @click="pluscountcart(product.id)" class="button is-success is-light px-5 ">
														<b-icon icon="plus"></b-icon>
													</button>
												</p>
												<p class="control">
													<button class="button is-link is-light px-5">
														Quantity: {{product.quantity}}
													</button>
												</p>
												<p class="control">
													<button @click="minuscountcart(product.id)" class="button is-info is-light px-5">
														<b-icon icon="minus"></b-icon>
													</button>
												</p>
											</b-field>
											<div class="content">   
												<!-- <p>{{product.info}}</p>  -->
												<b-button class="mx-2" @click="removeitemcart(product.id)" type="is-danger is-light">Remove From the Cart</b-button>


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

					<div class="columns" v-for="product in products">
						<div class="column is-two-fifths">
							<p>{{product.name}}</p>
						</div>
						<div class="column">
							<p>{{product.price}} &#8377;</p>
						</div>
						<div class="column">
							<p>{{product.quantity}}</p>
						</div>
						<div class="column">
							<p>{{product.price * product.quantity}}  &#8377;</p>
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
							<strong>{{totalprice}} &#8377</strong>
						</div>
					</div>
					<hr>

				</div>
				<b-table class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd column" :data="data" :columns="columns">
				</b-table>
				
			</div>
			<div class="clearall">
					<b-button @click="clearcart">Clear Cart</b-button>
				</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				products:[],
				data: [
				{ 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
				],
				columns: [
				{
					field: 'first_name',
					label: 'First Name',
				},
				{
					field: 'last_name',
					label: 'Last Name',
				},
				{
					field: 'date',
					label: 'Date',
					centered: true
				},
				{
					field: 'gender',
					label: 'Gender',
				}
				]
			}
		},
		methods:{
			pluscountcart(e){
				this.$store.commit("data/pluscountcart",e)
			},
			minuscountcart(e){
				this.$store.commit("data/minuscountcart",e)
			},
			removeitemcart(e){
				let result = this.products.findIndex(item => item.id == e)
				this.$store.commit("data/removecartitem",result)
				this.products = this.$store.getters["data/getcart"]
			},
			clearcart(){

				this.$store.commit("data/clearcart")
				this.products = this.$store.getters["data/getcart"]
			}
		},
		computed:{
			// products(){ 
			// 	return this.$store.getters["data/getcart"]
			// },
			totalprice(){
				let totalprice = 0
				this.products.forEach(item =>{
					// console.log(parseInt(item.quantity))
					totalprice += parseInt(item.price) * parseInt(item.quantity)
				})  
				return parseInt(totalprice)
			}
		},
		mounted(){
			this.products = this.$store.getters["data/getcart"]
		}
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

