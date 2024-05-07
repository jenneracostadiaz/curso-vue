import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount: (el, binding) => {
        switch (binding.arg) {
            case 'small':
                el.style.fontSize = '12px'
                break
            case 'large':
                el.style.fontSize = '24px'
                break
            default:
                el.style.fontSize = '16px'
        }
    }
})

app.mount('#app')
