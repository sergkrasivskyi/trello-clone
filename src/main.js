import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


import './assets/main.css'
import './index.css'

import components from "@/components";
import componentsUI from "@/components/UI";
import componentsIcons from "@/components/icons/";

const app = createApp(App)

// register components
componentsIcons.forEach((element) => app.component(element.name, element));
componentsUI.forEach((element) => app.component(element.name, element));
components.forEach((element) => app.component(element.name, element));
// --/

app.use(createPinia())
app.use(router)

app.mount('#app')
