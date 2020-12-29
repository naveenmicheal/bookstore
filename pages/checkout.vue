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
			<b-button :loading="loading" @click="initpayment()" type="is-info" expanded>Place a Order</b-button>

		</div>
	</div>
</div>
</div>
</template>

<script type="text/javascript">
	import axios from "axios"
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
				result:'',
				storeid:"PRGgD6Mchkyf_Utkp2013YmLdcHtDY",
				orderid:""
			}
		},
		methods:{
			initpayment: async function(e){
				this.loading = !this.loading
				let data = await this.$axios.$post(
					"https://wiredapi.herokuapp.com/orders/create",
					{
						"customername": this.address.name,
						"customeremail":this.address.email,
						"contact": this.address.contact,
						"houseaddress": this.address.house,
						"location": this.address.location,
						"town": this.address.town,
						"city": this.address.city,
						"state": this.address.state,
						"pincode": this.address.pincode,
						"storeid":this.storeid,
						"items":this.products,
						"paid":false,
						"paymentid": null,
						"paymenthash": null,
					}
					)
				console.log(data)
				if(data.status === "success"){
					let options = {	
						"key":"rzp_test_GrVH3IIHb1f13O",
						"amount":data.totalprice,
						"currency":"INR",
						"order_id":data.rzorderid,
						"handler": function (response){
							axios.post("https://wiredapi.herokuapp.com/orders/updatepayment",
							{

								"orderid":data.id,
								"rzorderid" : data.rzorderid,
								"paymentid":response.razorpay_payment_id,
								"signature":response.razorpay_signature

							})
							.then(result=>{
								console.log(result.data)
							})
							.catch(err =>{
								alert("Error")
							})
							console.log(`Payment Id: ${response.razorpay_payment_id},
								Order Id: ${response.razorpay_order_id},
								Signature: ${response.razorpay_signature}`)
						},
						"prefill": {
							"name": data.name,
							"email": data.email,
							"contact":this.address.contact,
						}
					}
					var rzpay = new Razorpay(options);
					rzpay.on('payment.failed', function (response){
						Alert("Payment Failed")
						console.log(`Code: ${response.error.code}, 
							Description ${response.error.description}
							source : ${response.error.source} step ${response.error.step}
							Reason ${response.error.reason}
							Metadata ${response.error.metadata}`)
						alert('Payment Failed');
					});
					rzpay.open();
					this.loading = !this.loading
				}
				else{
					alert("Error, Input Data was Invalidated")
				}
			}
		},
		computed:{
			products(){
				let checkout = []
				let a = this.$store.getters["data/getcart"]
				a.map(item =>{
					console.log(item)
					let i ={
						id:item._id,
						quantity:item.quantity
					}
					checkout.push(i)
				})
				return checkout
					// return this.$store.getters["data/getcart"]
				},
				totalprice(){
					let total = 0
					this.$store.getters["data/getcart"].forEach(item =>{
						total += parseInt((item.productprice * item.quantity))
					})
					return total
				},
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
