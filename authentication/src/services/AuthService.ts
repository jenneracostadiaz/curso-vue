import { type Ref, ref } from 'vue'

class AuthService {
    private jwt: Ref<string>
    private error: Ref<string>

    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<string> {
        return this.jwt
    }

    getError(): Ref<string> {
        return this.error
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            const res = await fetch('http://projects.local/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })

            const response = await res.json()

            if (response.status) {
                this.jwt.value = response.data.token
                return true
            } else {
                this.error.value = 'Login failed!'
                return false
            }
        } catch (error) {
            console.log(error)
            this.error.value = 'Login failed!'
            return false
        }
    }
}

export default AuthService
