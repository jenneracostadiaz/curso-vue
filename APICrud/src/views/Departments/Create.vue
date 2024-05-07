<script setup>
import { ref, nextTick } from 'vue';
import { sendRequest } from '../../functions';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${authStore.authToken}`;

const form = ref({ name: '' });
const nameInput = ref('');
const save = () => {
  sendRequest('POST', form.value, '/api/departments', '');
  form.value.name = '';
  nextTick(() => nameInput.value.focus());
};
</script>
<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="card border border-success">
        <div class="card-header bg-success border-success text-white"></div>
        <div class="card-body">
          <form @submit.prevent="save">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                autofocus
                type="text"
                class="form-control"
                id="name"
                v-model="form.name"
                ref="nameInput"
                required
              />
            </div>

            <div class="form-group mt-3">
              <button type="submit" class="btn btn-success mt-3 d-block">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
