<template>
	<div>
		<h1 class="title is-3 has-text-centered mt-3">Delivary Information</h1>
		<p class="subtitle is-3 has-text-centered">{{products.length}} in the cart</p>
		<div class="container px-6">
			<div class="columns">
				<div class="column">
					<div class="columns">
						<div class="column">
							<b-field label="Name" >
								<b-input v-model="address.name"></b-input>
							</b-field>
						</div>
						<div class="column">
							<b-field label="Email Address">
								<b-input v-model="address.email"></b-input>
							</b-field>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<b-field label="Contact Number ">
								<b-input v-model="address.contact"></b-input>
							</b-field>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<b-field label="House Number && Street">
								<b-input v-model="address.house"></b-input>
							</b-field>
						</div>
						<div class="column">
							<b-field label="Location Name">
								<b-input  v-model="address.location" ></b-input>
							</b-field>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<b-field label="Town">
								<b-input  v-model="address.town"></b-input>
							</b-field>
						</div>
						<div class="column">
							<b-field label="City">
								<b-input  v-model="address.city"></b-input>
							</b-field>
						</div>
					</div>
					<div class="columns mb-6">
						<div class="column">
							<b-field label="State">
								<b-input  v-model="address.state"></b-input>
							</b-field>
						</div>
						<div class="column">
							<b-field label="Pincode">
								<b-input  v-model="address.pincode"></b-input>
							</b-field>
						</div>
					</div>
				</div>

				<div style="background-color: white" class="column">
					<!-- <div class="card" v-for="product in products">
						<div class="card-content">
							<div class="media">
								<div class="media-content">
									<p class="title is-5">{{product.quantity}} &times; {{product.name}}</p>
									<p class="subtitle is-5">Price: {{product.quantity*product.price}} &#8377;</p>
								</div>
							</div>
						</div>
					</div> -->
					<h1 class="title is-3 has-text-centered">Payment Methods</h1>
					<div class="field">
						<b-radio
						native-value="later"
						size="is-medium"
						disabled>
						Cash on Delivery
					</b-radio>
				</div>
				<div class="field">
					<b-radio
					v-model="paymentoption"
					native-value="razorpay"
					size="is-medium"
					type="is-info">
					Bank / Card / UPI
				</b-radio>
			</div>
			<p class="subtitle is-4">Total Price: {{totalprice}} &#8377;</p>
			<b-button :loading="loading" @click="payment(totalprice)" type="is-info" expanded>Place a Order</b-button>

		</div>
	</div>
</div>
</div>
</template>

<script type="text/javascript">
	export default{
		head(){
			return{
				script:[{
					src:"https://checkout.razorpay.com/v1/checkout.js"
				}]
			}
			
		},
		data(){
			return{
				address:{
					name:"John Doe",
					email:"john@example.com",
					contact:'9876543210',
					house:"1337 / Main Street",
					location:"Detroit",
					town:"lack town",
					city:"Heywood",
					state:"Pacifica",
					pincode:"207702"
				},
				loading:false,
				paymentoption:'razorpay',
				result:''
			}
		},
		methods:{
			payment: async function (e) {
				this.loading = !this.loading
				let data = await this.$axios.$post(
					"https://wiredapi.herokuapp.com/payment/pay",{
						amount: this.totalprice
					})
				console.log(data)
				this.result = data
				let options = {	
					"key":"rzp_test_GrVH3IIHb1f13O",
					"amount":data.amount,
					"currency":data.currency,
					"order_id":data.id,
					"handler": function (response){
						console.log(`Payment Id: ${response.razorpay_payment_id},
						 Order Id: ${response.razorpay_order_id},
						 Signature: ${response.razorpay_signature}`)
						alert('Success')
					},
					"prefill": {
						"name": this.address.name,
						"email": this.address.email,
						"contact": this.address.contact,
						"location": this.address.location
					}

				}
				var rzp1 = new Razorpay(options);
				rzp1.on('payment.failed', function (response){
					console.log(`Code: ${response.error.code}, 
						Description ${response.error.description}
						source : ${response.error.source} step ${response.error.step}
						Reason ${response.error.reason}
						Metadata ${response.error.metadata}`)
					alert('Payment Failed');
				});
				rzp1.open();
				this.loading = !this.loading
			}
		},
		computed:{
			products(){
				return this.$store.getters["data/getcart"]
			},
			totalprice(){
				let total = 0
				this.products.forEach(item =>{
					total += parseInt((item.price * item.quantity))
				})
				return total
			}
		},
		mounted(){
			this.$axios.$get("https://wiredapi.herokuapp.com/")
		}
	}
</script>

<style lang="css" scoped>
.textarea:not([rows]){
	min-height: 20px;
}
</style>
