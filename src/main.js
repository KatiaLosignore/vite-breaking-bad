import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/open-sans";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCircle);

import App from './App.vue'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
