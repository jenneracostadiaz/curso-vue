<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const form = ref({
  name: '',
  email: '',
  password: '',
});
</script>
<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="card border border-success">
        <div class="card-header bg-success border-success text-white">
          Register
        </div>
        <div class="card-body">
          <form @submit.prevent="($event) => authStore.register(form)">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                autofocus
                type="text"
                class="form-control"
                id="name"
                v-model="form.name"
                placeholder="ex: Joe Done"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                autofocus
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                placeholder="ex: joe.done@email"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="form.password"
              />
            </div>
            <div class="form-group mt-3">
              <button
                type="submit"
                class="btn btn-success mt-3 d-block"
                @click="($event) => authStore.register(form)"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
