import { ref } from 'vue'
import { defineStore } from 'pinia'

const useAuth = defineStore('counter', () => {
    const token = ref()
    const baseURL = 'http://notes.local/api'
    const register = async (name: string, email: string, password: string) => {
        const uri = `${baseURL}/auth/register`
        const response = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await response.json()
        if (data.status == false) {
            throw new Error(data.message)
        } else {
            token.value = data.token
        }
        return data
    }
    const login = async (email: string, password: string) => {
        const uri = `${baseURL}/auth/login`
        const response = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (data.status == false) {
            throw new Error(data.message)
        } else {
            token.value = data.token
        }
        return data
    }
    const getNotes = async () => {
        const uri = `${baseURL}/note`
        const response = await fetch(uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token.value}`
            }
        })
        const data = await response.json()
        return data
    }
    const createNote = async (content: string) => {
        const uri = `${baseURL}/note`
        const response = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token.value}`
            },
            body: JSON.stringify({
                content: content
            })
        })
        const data = await response.json()
        return data
    }
    const logout = () => {
        token.value = ''
    }

    return {
        token,
        register,
        login,
        getNotes,
        createNote,
        logout
    }
})

export default useAuth
