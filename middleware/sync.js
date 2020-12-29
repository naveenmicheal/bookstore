
export default function (context){
	console.log('From Middleware')
	if((context.store.state.data.storedata).length === 0){
		console.log("Store is Empty")
		if (!process.server) {
			fetch("https://wiredapi.herokuapp.com/store/PRGgD6Mchkyf_Utkp2013YmLdcHtDY").then(data => data.json().then(r => console.log(r)))
		}

		

	}

}