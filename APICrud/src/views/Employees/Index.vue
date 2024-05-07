<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { confirmation, sendRequest } from '../../functions';
import { useAuthStore } from '../../stores/auth';
import Modal from '../../components/Modal.vue';
import SelectInput from '../../components/SelectInput.vue';
import Paginate from 'vuejs-paginate-next';

const authStore = useAuthStore();
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${authStore.authToken}`;
onMounted(() => {
  getDepartments(), getEmployees(1);
});

const departments = ref([]);
const employees = ref([]);

const load = ref(false);
const rows = ref(0);
const form = ref({ name: '', email: '', phone: '', department_id: '' });

const title = ref('');
const nameInput = ref('');
const operation = ref('');
const id = ref(0);
const close = ref('');

const getDepartments = async () => {
  await axios
    .get('/api/departments')
    .then((response) => (departments.value = response.data));
  load.value = true;
};

const getEmployees = async (page) => {
  await axios
    .get('/api/employees?page=' + page)
    .then(
      (response) => (
        (employees.value = response.data), (rows.value = response.data)
      )
    );
  load.value = true;
};

const deleteEmployees = (id, name) => {
  confirmation(name, '/api/employees/' + id, '/employees');
};

const openModal = (op, name, email, phone, department, employee) => {
  clear();
  setTimeout(() => nextTick(() => nameInput.value.focus()), 600);
  operation.value = op;
  id.value = employee;
  if (op == 1) {
    title.value = 'Add Employee';
  } else {
    title.value = 'Edit Employee';
    form.value.name = name;
    form.value.email = email;
    form.value.phone = phone;
    form.value.department_id = department;
  }
};

const clear = () => {
  form.value.name = '';
  form.value.email = '';
  form.value.phone = '';
  form.value.department_id = '';
};

const save = async () => {
  let res;
  if (operation.value == 1) {
    res = await sendRequest('POST', form.value, '/api/employees', '');
    if (res == true) {
      clear();
      nextTick(() => nameInput.value.focus());
      getEmployees(1);
    }
  } else {
    res = await sendRequest(
      'PUT',
      form.value,
      '/api/employees/' + id.value,
      ''
    );
    if (res == true) {
      nextTick(() => close.value.click());
      getEmployees(1);
    }
  }
};
</script>
<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="d-grid col-10 mx-auto">
        <button
          class="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          @click="($event) => openModal(1)"
        >
          <i class="fas fa-plus"></i> Add Employee
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-md-10 offset-md-1">
      <div class="card border border-white text-center" v-if="!load">
        <div class="card-body">
          <img src="/giphy.gif" alt="Loading..." class="img-fluid" />
        </div>
      </div>
      <div class="table-responsive" v-else>
        <table class="table table-border table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(emp, i) in employees.data" :key="emp.id">
              <td>{{ emp.id + 1 }}</td>
              <td>{{ emp.name }}</td>
              <td>{{ emp.email }}</td>
              <td>{{ emp.phone }}</td>
              <td>{{ emp.department }}</td>
              <td>
                <button
                  class="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  @click="
                    ($event) =>
                      openModal(
                        2,
                        emp.name,
                        emp.email,
                        emp.phone,
                        emp.department_id,
                        emp.id
                      )
                  "
                >
                  <i class="fas fa-edit"></i>
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="deleteEmployees(emp.id, emp.name)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <Paginate
          :page-count="rows"
          :click-handler="getEmployees"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
        ></Paginate>
      </div>
    </div>
  </div>

  <Modal :id="'modal'" :title="title">
    <div class="modal-body">
      <form @submit.prevent="save">
        <div class="form-group mt-3">
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
          <label for="email">Email</label>
          <input
            autofocus
            type="text"
            class="form-control"
            id="email"
            v-model="form.email"
            ref="emailInput"
            required
          />
        </div>
        <div class="form-group mt-3">
          <label for="phone">Phone</label>
          <input
            autofocus
            type="text"
            class="form-control"
            id="phone"
            v-model="form.phone"
            ref="phoneInput"
            required
          />
        </div>
        <div class="form-group mt-3">
          <label for="departments">Department</label>
          <SelectInput
            v-model="form.department_id"
            :options="departments"
            class="form-select"
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
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        ref="close"
      >
        Close
      </button>
    </div>
  </Modal>
</template>
