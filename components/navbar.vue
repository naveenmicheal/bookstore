<template>
    <b-navbar id="navbar" shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Wired Store
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
         <!--    <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </template>

    </b-navbar>
</template>

<style lang="css" scoped>
    #navbar{
        padding: 10px;
    }
</style>
