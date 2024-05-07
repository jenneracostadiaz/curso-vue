<script setup>
import { ref, onMounted } from 'vue';
import { sendRequest } from '../../functions';
import { useAuthStore } from '../../stores/auth';
import { useRoute } from 'vue-router';

const route = useRoute();
const authStore = useAuthStore();
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${authStore.authToken}`;

const form = ref({ id: '', name: '' });
const id = ref(route.params.id);

onMounted(() => {
  getDepartment();
});
const getDepartment = () => {
  axios
    .get('/api/departments/' + id.value)
    .then((response) => (form.value.name = response.data.data.name));
};

const save = () => {
  sendRequest(
    'PUT',
    form.value,
    '/api/departments/' + id.value,
    '/departments'
  );
};
</script>
<template>
  <div class="row mt-5">
    <pre>{{ id }}</pre>
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
