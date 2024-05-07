<script setup>
import { useAuthStore } from '../stores/auth';
import { RouterLink } from 'vue-router';
const authStore = useAuthStore();
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success px-4">
    <a class="navbar-brand text-white" href="#">Company</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      style="display: flex; justify-content: space-between"
      v-if="authStore.user"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink to="/departments" class="nav-link"
            >Departments</RouterLink
          >
        </li>
        <li class="nav-item active">
          <RouterLink to="/employees" class="nav-link">Employees</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/graphic" class="nav-link">Graphic</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/reports" class="nav-link">Reports</RouterLink>
        </li>
      </ul>
      <ul class="navbar-nav form-inline my-2 my-lg-0">
        <li class="nav-item active">
          <div class="nav-link">
            {{ authStore.user?.name }}
          </div>
        </li>
        <li class="nav-item active">
          <button @click="($event) => authStore.logout" class="btn btn-success">
            Salir
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
