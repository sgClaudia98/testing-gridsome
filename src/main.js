// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import DashboardLayout from '~/layouts/dashboard/DashboardLayout.vue'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
Vue.use(PaperDashboard);
 // Vue.component('Layout', DashboardLayout)
}
