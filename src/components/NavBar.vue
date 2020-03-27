<template>
        <b-card-header header-tag="nav">
            <b-nav vertical card-header pills class = "w-25" variant ="dark">
                <b-nav-item id= "item-1" class="nav-text" to="/RawMaterial" ><h5>Manage and view raw material stock</h5></b-nav-item>
                <b-nav-item id = "item-2" class="nav-text" to="/CosmeticFormula"><h5>Cosmetic formula</h5></b-nav-item>
                <b-nav-item id = "item-3" class="nav-text" to="/InventoryReport"><h5>Reports</h5></b-nav-item>
                <b-nav-item id = "item-4" class="nav-text item-3" to="/InventoryReport"><h6>Inventory report</h6></b-nav-item>
                <b-nav-item id = "item-5" class="nav-text item-3" to="/UsageReport"><h6>Usage report</h6></b-nav-item>
                <b-nav-item id = "item-6" class="nav-text item-3" to="/CosmeticFormulaReport"><h6>Cosmetic formula report</h6></b-nav-item>
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
        color: black;
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
    h5,h6{
        color: black;
    }
    h5:hover , h6:hover{
        font-weight: bold;
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
