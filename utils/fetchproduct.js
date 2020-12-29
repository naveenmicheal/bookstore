const fetchproduct = () =>{
	fetch("https://wiredapi.herokuapp.com/store/PRGgD6Mchkyf_Utkp2013YmLdcHtDY")
	.then(data => data.json().then(r => console.log(r)))
}

export default fetchproduct