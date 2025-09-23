import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'vuetify/dist/vuetify.min.css' // Import Vuetify CSS
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')