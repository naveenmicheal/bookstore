import storedata from '~/static/storedata.json'

export const state = ()=>({
	storedata : storedata
})
// export const state = () => ({
//   counter: 0
// })

// export const getter = {
// 	storeproducts : state => state.storedata
// }
export const getters = {
  get (state) {
    return state.storedata
  }
}
export const mutations ={}

export const actions ={}