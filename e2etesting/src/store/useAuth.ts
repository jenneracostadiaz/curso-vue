import {defineStore} from "pinia";
import {ref} from 'vue'

export const useAuth = defineStore({
    state: () => {
        return {
            is_auth: ref(false),
        }
    },
    actions: {
        login(email: string, password: string):boolean {
            if(email === 'admin@admin.com' && password === 'admin') {
                this.is_auth = true
                return true
            }
        }
    }
})