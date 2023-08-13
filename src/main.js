import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';

import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import Button from 'primevue/button';

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('TabMenu', TabMenu)
app.component('Card', Card)
app.component('Button', Button)

app.mount('#app')
