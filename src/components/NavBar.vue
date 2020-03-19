<template>
        <b-card-header header-tag="nav">
            <b-nav vertical card-header pills class = "w-25">
                <b-nav-item id= "item-1"><router-link class="nav-text" to="/RawMaterial">Manage and view raw material stock</router-link></b-nav-item>
                <b-nav-item id = "item-2"><router-link class="nav-text" to="/CosmeticFormula">Cosmetic formulas</router-link></b-nav-item>
                <b-nav-item id = "item-3"><router-link class="nav-text" to="/InventoryReport">Reports</router-link></b-nav-item>
                <b-nav-item id = "item-4"><router-link class="nav-text item-3" to="/InventoryReport">Inventory reports</router-link></b-nav-item>
                <b-nav-item id = "item-5"><router-link class="nav-text item-3" to="/UsageReport">Usage report</router-link></b-nav-item>
                <b-nav-item id = "item-6"><router-link class="nav-text item-3" to="/CosmeticFormulaReport">Cosmetic formula report</router-link></b-nav-item>
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
        font-size: 100%;
        text-align: left;
    }
    #item-2{
        position: absolute;
        top: 110px;
        font-size: 100%;
        text-align: left;
    }
     #item-3{
        position: absolute;
        top: 170px;
        /* left: 30px; */
        font-size: 100%;
        text-align: left;
    }
    #item-4{
        position: absolute;
        top: 205px;
        /* left: 30px; */
        font-size: 90%;
        text-align: left;
    }
    #item-5{
        position: absolute;
        top: 235px;
        /* left: 30px; */
        font-size: 90%;
        text-align: left;
    }
    #item-6{
        position: absolute;
        top: 265px;
        /* left: 14.2px; */
        font-size: 90%;
        text-align: left;
    }
    .nav-text{
        color: black;
    }
    p{
        position: absolute;
        top: 530px;
        /* left: 80px; */
        font-size: 80%;
        margin: 0%;
        padding: 0%;
    }
</style>
