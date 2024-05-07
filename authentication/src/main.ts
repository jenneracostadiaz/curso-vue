import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyCpOYQct4OYmPeq2RzZRNN9eLw645IkWb4',
    authDomain: 'test-vue-33d8f.firebaseapp.com',
    projectId: 'test-vue-33d8f',
    storageBucket: 'test-vue-33d8f.appspot.com',
    messagingSenderId: '37284847191',
    appId: '1:37284847191:web:5039396481a0ee05a5cd12'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)
app.mount('#app')
