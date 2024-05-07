<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { Bar, Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from 'chart.js';

const authStore = useAuthStore();
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${authStore.authToken}`;

const departments = ref([]);
const employees = ref([]);
const chartData = ref({});
const chartOptions = ref({});
const colors = ref([]);
const loaded = ref(false);

const random = () => Math.floor(Math.random() * 255);

onMounted(async () => {
  const info = await axios.get('/api/employeesbydepartment');
  info.data.map(
    (row) => (
      departments.value.push(row.name),
      employees.value.push(row.count),
      colors.value.push(`rgba(${random()}, ${random()}, ${random()}, 0.6)`)
    )
  );
  chartOptions.value = { responsive: true };
  chartData.value = {
    labels: departments.value,
    dataset: [
      { label: 'Employees', data: employees.value, backgroundColor: colors },
    ],
  };
  loaded.value = true;
});
</script>
<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <pre>{{ chartData }}</pre>
      <pre>{{ chartOptions }}</pre>
      <!-- <Pie v-if="loaded" :data="chartData" :options="chartOptions"></Pie> -->
      <!-- <Bar v-if="loaded" :data="chartData" :options="chartOptions"></Bar> -->
    </div>
  </div>
</template>
