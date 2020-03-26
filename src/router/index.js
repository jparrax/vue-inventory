import Vue from 'vue'
import VueRouter from 'vue-router'
import RawMaterial from '../components/RawMaterial.vue'
import AddRawMaterial from '../components/AddRawMaterial.vue'
import UpdateRawMaterial from '../components/UpdateRawMaterial.vue'
import DiscardRawMaterial from '../components/DiscardRawMaterial.vue'
import CosmeticFormula from '../components/CosmeticFormula.vue'
import AddCosmeticFormula from '../components/AddCosmeticFormula.vue'
import UpdateCosmeticFormula from '../components/UpdateCosmeticFormula.vue'
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
    path: '/AddRawMaterial',
    name: 'Add Raw Material',
    component: AddRawMaterial
  },
  {
    path: '/UpdateRawMaterial',
    name: 'Update Raw Material',
    component: UpdateRawMaterial
  },
  {
    path: '/DiscardRawMaterial',
    name: 'Discard Raw Material',
    component: DiscardRawMaterial
  },
  {
    path: '/CosmeticFormula',
    name: 'Cosmetic Formula',
    component: CosmeticFormula
  },
  {
    path: '/AddCosmeticFormula',
    name: 'Add Cosmetic Formula',
    component: AddCosmeticFormula
  },
  {
    path: '/UpdateCosmeticFormula',
    name: 'Update Cosmetic Formula',
    component: UpdateCosmeticFormula
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
