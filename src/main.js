import {createApp, VueElement} from 'vue';
import App from './App.vue';
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { MaterialIcon } from 'material-icons';

const app = createApp(App);
app.use(router);
app.use(VueSidebarMenu);
app.use(MaterialIcon);
app.mount('#app');
