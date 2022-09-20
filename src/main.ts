import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from './components/Button.vue'

const app = createApp(App)

app.component('Button', Button)

app.mount('#app')
