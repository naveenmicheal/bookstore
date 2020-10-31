import storedata from '~/static/storedata.json'
export const state = ()=>({
	storedata:storedata,
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
