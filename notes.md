	// payment: async function (e) {
			// 	this.loading = !this.loading
			// 	let data = await this.$axios.$post(
			// 		"https://wiredapi.herokuapp.com/payment/pay",{
			// 			amount: this.totalprice
			// 		})
			// 	console.log(data)
			// 	this.result = data
			// 	let options = {	
			// 		"key":"rzp_test_GrVH3IIHb1f13O",
			// 		"amount":data.amount,
			// 		"currency":data.currency,
			// 		"order_id":data.orderid,
			// 		"handler": function (response){
			// 			console.log(`Payment Id: ${response.razorpay_payment_id},
			// 			 Order Id: ${response.razorpay_order_id},
			// 			 Signature: ${response.razorpay_signature}`)
			// 			alert('Success')
			// 		},
			// 		"prefill": {
			// 			"name": this.address.name,
			// 			"email": this.address.email,
			// 			"contact": this.address.contact,
			// 			"location": this.address.location
			// 		}

			// 	}
			// 	var rzp1 = new Razorpay(options);
			// 	rzp1.on('payment.failed', function (response){
			// 		Alert("Payment Failed")
			// 		console.log(`Code: ${response.error.code}, 
			// 			Description ${response.error.description}
			// 			source : ${response.error.source} step ${response.error.step}
			// 			Reason ${response.error.reason}
			// 			Metadata ${response.error.metadata}`)
			// 		alert('Payment Failed');
			// 	});
			// 	rzp1.open();
			// 	this.loading = !this.loading
			// }