import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";                           //icons
import Button from 'primevue/button';
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import i18n from "./locales/i18n";
//import { createI18n } from 'vue-i18n';


import 'primevue/resources/themes/saga-green/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

/*const i18n = createI18n({
    locale: "es",
    messages:{
      en:{
        "code":"Code"
      },
      es:{
        "code":"Código"
      }
    }
  }
)*/

const app= createApp(App);

app.use(PrimeVue);
app.use(i18n);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('InputMask', InputMask);
app.component('pv-dropdown', Dropdown);

app.mount('#app')
