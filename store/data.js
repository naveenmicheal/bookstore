

let initialstate = []

export const state = ()=>({
	storedata:initialstate,
	cartproduct:[]
})

export const mutations ={
	addproducts(state,data){
		console.log("Product Adding")
		state.storedata = data
	},
	addtocart(state,data){
		console.log('AddtoCart Mutation Fired')
		data.quantity = 1
		state.cartproduct.push(data)
	},
	pluscountcart(state,data){
		console.log('+++')
		console.log(data)
		const result = state.cartproduct.find(item => item._id == data)
		result.quantity = result.quantity + 1
	},
	minuscountcart(state,data){
		console.log('---')
		const result = state.cartproduct.find(item => item._id == data)
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
// function fetchdata() {
	
// 		if(initialstate.length === 0){
// 			console.log("STore")
// 			axios.get("https://wiredapi.herokuapp.com/store/PRGgD6Mchkyf_Utkp2013YmLdcHtDY").then(data =>{
// 				console.log(data.data)
// 				commit("data/addproducts",data.data)
// 			})
// 		}
// }

// fetchdata()