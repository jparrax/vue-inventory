<template>
        <b-card-header header-tag="nav">
            <b-nav vertical card-header pills class = "w-25">
                <b-nav-item id= "item-1"><router-link class="nav-text" to="/Img1">Manage and view raw material stock</router-link></b-nav-item>
                <b-nav-item id = "item-2"><router-link class="nav-text" to="/Img2">Cosmetic formulas</router-link></b-nav-item>
                <b-nav-item id = "item-3"><router-link class="nav-text" to="/Img3">Reports</router-link></b-nav-item>
                <b-nav-item id = "item-4"><router-link class="nav-text item-3" to="/Img3">Inventory reports</router-link></b-nav-item>
                <b-nav-item id = "item-5"><router-link class="nav-text item-3" to="/Img3">Usage report</router-link></b-nav-item>
                <b-nav-item id = "item-6"><router-link class="nav-text item-3" to="/Img3">Cosmetic formula report</router-link></b-nav-item>
            </b-nav>
            <br>
            <p> ©2020 iDesci Laboratory</p>
        </b-card-header>
</template>
<style scoped>
    .card-header{
        height: 100%;
        width: 100%;
        background-color: #c4c4c4;
        position: static;
    }
    #item-1{
        position: absolute;
        top: 20px;
        font-size: 20px;
        text-align: left;
    }
    #item-2{
        position: absolute;
        top: 110px;
        font-size: 20px;
        text-align: left;
    }
     #item-3{
        position: absolute;
        top: 170px;
        /* left: 30px; */
        font-size: 20px;
        text-align: left;
    }
    #item-4{
        position: absolute;
        top: 205px;
        /* left: 30px; */
        font-size: 17px;
        text-align: left;
    }
    #item-5{
        position: absolute;
        top: 235px;
        /* left: 30px; */
        font-size: 17px;
        text-align: left;
    }
    #item-6{
        position: absolute;
        top: 265px;
        /* left: 14.2px; */
        font-size: 17px;
        text-align: left;
    }
    .nav-text{
        color: black;
    }
    p{
        position: absolute;
        top: 530px;
        /* left: 80px; */
        font-size: 100%;
        margin: 0%;
        padding: 0%;
    }
</style>
