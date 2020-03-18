<template>
        <b-card-header header-tag="nav">
            <b-nav vertical card-header pills class = "w-25">
                <b-nav-item><router-link to="/Img1">Img1</router-link></b-nav-item>
                <br>
                <b-nav-item><router-link to="/Img2">Img2</router-link></b-nav-item>
            </b-nav>
        </b-card-header>
</template>
<style scoped>
    .card-header{
        height: 100%;
        width: 100%;
        background-color: #c4c4c4;
        position: static;
    }
</style>
