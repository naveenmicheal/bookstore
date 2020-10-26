<template>
	<div>
		<h1 class="title is-3 has-text-centered mt-3">CheckOut</h1>
		<div class="container">
			<div class="columns">
				<div class="column">
					<div class="columns">
						<div class="column">
							<div class="card">	
								<div class="card-content">
									<div class="columns">
										<div class="column">
											<img :src="products[0].img">
										</div>
										<div class="column">
											<p class="title is-4">John Smith</p>
											<div class="content">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Phasellus nec iaculis mauris
											</div>
										</div>
									</div>

								</div>
							</div>
							<div class="card">	
								<div class="card-content">
									<div class="columns">
										<div class="column">
											<img :src="products[0].img">
										</div>
										<div class="column">
											<p class="title is-4">John Smith</p>
											<div class="content">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Phasellus nec iaculis mauris
											</div>
										</div>
									</div>

								</div>
							</div>
							<div class="card">	
								<div class="card-content">
									<div class="columns">
										<div class="column">
											<img :src="products[0].img">
										</div>
										<div class="column">
											<p class="title is-4">John Smith</p>
											<div class="content">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Phasellus nec iaculis mauris
											</div>
										</div>
									</div>

								</div>
							</div>

						</div>

					</div>
				</div>
				<div style="background-color: grey" class="column">
					<h1>Checkout Form</h1>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				hello:"world"
			}
		},
		computed:{
			products(){
				return this.$store.getters["data/getcart"]
			}
		}
	}
</script>

