<template>
	<div>
		<div class="container pt-5 px-3 root">
			<div class="columns">
				<div class="column">
					<h1 class="title is-3 has-text-centered">
						Your Order Succesfully Placed
					</h1>				
					<h1 class="subtitle is-4 has-text-centered pt-1">Payment of <strong>{{totalamount}} &#8377;</strong> has been successfully paid</h1>
					<h1 class="subtitle is-5 has-text-centered">Your Payment Id: <strong>{{paymentid}}</strong></h1>
					<h1 class="subtitle is-6 has-text-centered">Please save the Payment ID or take screenshot now</h1>
					<h1 class="subtitle is-5 has-text-centered pb-6">We will contact you shortly the given Number</h1>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default{

		data(){
			return{
				totalamount : '',
				paymentid:''
			}
		},
		mounted(){
			let data = JSON.parse(localStorage.getItem("Data"))
			console.log(data.data)
			this.totalamount = data.data.totalprice
			this.paymentid = data.data.paymentid
		}
	}
</script>

<style lang="css" scoped>
.container.pt-5{
	background-color: lightcyan;

}
</style>