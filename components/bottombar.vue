<template>
    <div class="">
        <b-navbar v-if="cartproducts.length >0" id="navbar" shadow fixed-bottom :mobile-burger=bar>
            <template slot="brand">  
             <b-button tag="nuxt-link" to="/checkout" @click="" type="is-link is-light" size="is-    " icon-right="cart" expanded style="border-radius: 0" >
                Go to Cart
            </b-button>
        </template>
    </b-navbar>
</div>

</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                bar:false
            }
        },
        computed:{
            cartproducts(){
                return this.$store.getters["data/getcart"]
            }
        }
    }
</script>

<style lang="css" scoped>
#navbar{
    padding: 10px;
}
</style>

