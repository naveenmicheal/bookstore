<template>
	<div class="root columns">

		<div class=" left column">
			<section>
				<b-carousel
				:indicator="indicator"
				:indicator-background="indicatorBackground"
				:indicator-inside="indicatorInside"
				:indicator-mode="indicatorMode"
				:indicator-position="indicatorPosition"
				:indicator-style="indicatorStyle">
				<b-carousel-item  v-for="(carousel, i) in product.img" :key="i">
					<section :class="`hero is-medium is-${carousel.color}`">
						<div class="hero-body has-text-centered">

							<img class="" :src="carousel">
						<!-- 	<a @click="isImageModalActive = !isImageModalActive">view</a>
							<b-modal :active.sync="isImageModalActive">
								<p class="image is-4by3">
									<img :src="carousel">
								</p>
							</b-modal> -->
						</div>
					</section>
				</b-carousel-item>
			</b-carousel>
		</section>

	</div>
	<div class=" right column">
		<!-- {{product}} -->
		<h1 class="title">{{product.name}}</h1>
		<h3 class="title">{{product.price}}  &#8377;</h3>
		<p class="subtitle">{{product.info}}</p>
		<b-button v-if="!iscart" class="buybutton" type="is-info" @click="addtocart">Add to Cart</b-button>
		<b-button v-if="iscart" tag="nuxt-link" to="/cart" class="buybutton" type="is-success">Go To cart</b-button>

<!-- <b-button class="buybutton" type="is-primary"
		 @click="buynow">Buy Now
		</b-button> -->

	</div>
	<bottombar v-if="length >0" id="bbar"/>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				iscart : false,

				isImageModalActive: false,
				indicator: true,
				indicatorBackground: false,
				indicatorInside: true,
				indicatorMode: 'hover',
				indicatorPosition: 'is-bottom',
				indicatorStyle: 'is-lines',
			}
		},
		computed:{
			product(){
				return this.$store.getters["data/products"].find(item => item.id == this.$route.params.id)
			},
			length(){
				return this.$store.getters["data/getcart"].length
			},
		},
		methods:{
			addtocart(){	
				console.log("Add to Cart TRIGGERED")
				let cartbox = this.$store.getters["data/getcart"]
				if(cartbox.length != 0){
					let incart = false
					let result = cartbox.find(item =>{
						if(item.id == this.product.id){
							console.log('Positive')
							incart = true
						}
					})
					if(incart == false){
						this.$store.commit("data/addtocart",this.product)
						this.iscart = true

					}
					else{
						console.log("NO COMMIT ")
					}
				}
				else{
					console.log("Empty Cart Mutation")	
					this.$store.commit("data/addtocart",this.product)
					this.iscart = true
				}
			},
		},
		mounted(){
			console.log("mounted TRIGGERED")
			// this.$store.commit("data/clearcart")	
			setTimeout(()=>{
				let cartbox = this.$store.getters["data/getcart"]
				cartbox.find(item =>{
					if(item.id == this.product.id){
						console.log('Mounted[*] Item in Cart')
						this.iscart = true
					}
				})
			},100)
			
			

		},


	}
</script>


<style lang="css" scoped>
.left{
	/*background-color: blue*/
}
.right{
	padding-top: 5rem;
}
.right .title{
	padding-bottom: 0;
}
.buybutton {
	padding: 3px 30px 3px 30px;
	border-radius: 0;
}
/*MOBILE*/
@media only screen and (max-width: 768px){
	.right {
		padding: 30px;
	}
}

/*DESKTOP*/
@media screen and (min-width: 769px){
	.hero.is-medium .hero-body{
		padding-bottom: 1rem;
		padding-top: 3rem;
	}
}

#bbar{
    display: none;  
  }
  @media only screen and (max-width: 768px) {
    #bbar{
    display: block;
  } 
  }

</style>