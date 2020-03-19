import Vue from 'vue'
import VueRouter from 'vue-router'
import RawMaterial from '../components/RawMaterial.vue'
import CosmeticFormula from '../components/CosmeticFormula.vue'
import InventoryReport from '../components/InventoryReport.vue'
import UsageReport from '../components/UsageReport.vue'
import CosmeticFormulaReport from '../components/CosmeticFormulaReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/RawMaterial',
    name: 'Raw Material',
    component: RawMaterial
  },
  {
    path: '/CosmeticFormula',
    name: 'Cosmetic Formula',
    component: CosmeticFormula
  },
  {
    path: '/InventoryReport',
    name: 'Inventory Report',
    component: InventoryReport
  },
  {
    path: '/UsageReport',
    name: 'Usage Report',
    component: UsageReport
  },
  {
    path: '/CosmeticFormulaReport',
    name: 'Cosmetic Formula Report',
    component: CosmeticFormulaReport
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
