import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';

import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Paginator from 'primevue/paginator';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';


const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Paginator', Paginator)
app.component('Textarea', Textarea)
app.component('FileUpload', FileUpload)
app.component('Dropdown', Dropdown)

app.mount('#app')
