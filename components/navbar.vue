<template>
    <b-navbar id="navbar" shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            WIRED STORE
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/products' }">
                Products
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/cart' }">
                Cart
                <b-tag v-if="cartproducts.length > 0" type="is-primary ml-3">{{cartproducts.length}}</b-tag>
            </b-navbar-item>
        </template>

    </b-navbar>
</template>

<script type="text/javascript">
    export default{
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

