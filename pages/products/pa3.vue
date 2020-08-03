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
				<b-carousel-item  v-for="(carousel, i) in carousels" :key="i">
					<!-- <img class="has-text-centered" :src="carousel.imgurl"> -->
					<section :class="`hero is-medium is-${carousel.color}`">
						<div class="hero-body has-text-centered">

							<img class="" :src="carousel.imgurl">
							<b-modal :active.sync="isImageModalActive">
								<p class="image is-4by3">
									<img :src="carousel.imgurl">
								</p>
							</b-modal>
						</div>
					</section>
				</b-carousel-item>
			</b-carousel>
		</section>

	</div>

	<div class=" right column">
		<h1 class="title">{{productname}}</h1>
		<h3 class="title">{{price}}</h3>
		<p class="subtitle">{{info}}</p>
		<a target="_blank" :href="buylink"><b-button class="buybutton" type="is-primary">Buy Now</b-button></a>

	</div>
</div>
</template>	

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

</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				isImageModalActive: false,
				productname : "Product C",
				price :"73rs",
				points :['one','two','three'],
				info :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturrum.",
				buylink : 'https://rzp.io/l/EVY6mt3',
				image:['http://localhost:3000/products/img1.jpeg','http://localhost:3000/products/img2.jpeg'],
				indicator: true,
				indicatorBackground: false,
				indicatorInside: true,
				indicatorMode: 'hover',
				indicatorPosition: 'is-bottom',
				indicatorStyle: 'is-lines',
            // carousels: [
            //     { title: 'Slide 1', color: 'info' },
            //     { title: 'Slide 2', color: 'success' },

            // ]
            carousels :[
            {imgurl:"img1.jpeg"},
            {imgurl :"img2.jpeg"},
            {imgurl :"img3.jpeg"}
            ],
            
			

        }
    },
    methods :{
    }
}
</script>