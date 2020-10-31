
export const state = ()=>({
	storedata:[
	{
		"id" :"pa1",
		"name":"Product A",
		"price" :"10",
		"info" :"Black bracelet style, stainless steel strap with a foldover closure",
		"img":["https://res.cloudinary.com/wiredmarketspace/image/upload/v1601572032/uohgy4qchlrnajyzhsff.jpg"],
		"featured":true
	},
	{
		"id" :"pb1",
		"name":"Product BA",
		"price" :"20",
		"info" :"Black bracelet style, stainless steel strap with a foldover closure",
		"img":["https://res.cloudinary.com/wiredmarketspace/image/upload/v1601572032/uohgy4qchlrnajyzhsff.jpg"],
		"featured":true
	},
	{
		"id" :"pc1",
		"name":"Product C",
		"price" :"30",
		"info" :"Black bracelet style, stainless steel strap with a foldover closure",
		"img":["https://res.cloudinary.com/wiredmarketspace/image/upload/v1601572032/uohgy4qchlrnajyzhsff.jpg"],
		"featured":true
	},
	{
		"id" :"pd1",
		"name":"Product D",
		"price" :"40",
		"info" :"Black bracelet style, stainless steel strap with a foldover closure",
		"img":["https://res.cloudinary.com/wiredmarketspace/image/upload/v1601572032/uohgy4qchlrnajyzhsff.jpg"],
		"featured":false
	}

],
	cartproduct:[]
})
export const mutations ={

	addtocart(state,data){
		console.log('AddtoCart Mutation Fired')
		data.quantity = 1
		state.cartproduct.push(data)
	},
	pluscountcart(state,data){
		console.log('+++')
		console.log(data)
		const result = state.cartproduct.find(item => item.id == data)
		result.quantity = result.quantity + 1
	},
	minuscountcart(state,data){
		console.log('---')
		const result = state.cartproduct.find(item => item.id == data)
		result.quantity = result.quantity - 1
	},
	removecartitem(state,data){
		console.log('Remove Item Cart Mutation Fired')
		state.cartproduct.splice(data,1)
	},
	clearcart(state){
		console.log('ClearCart Mutation Fired')
		state.cartproduct=[]
	}
}

export const getters = {
	homeproducts(state){
		let result = state.storedata.filter(item => item.featured == true)
		return result
	},
	products (state) {
		return state.storedata
	},
	getcart (state) {
		return state.cartproduct
	}
}
