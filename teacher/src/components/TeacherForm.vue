<template>
	<section>
		<h3>Añadir Profesor</h3>
		<div>
			<label for="name">Nombre:</label>
			<input type="text" id="name" v-model="teacher.teacherName" />
		</div>
		<div>
			<label for="lastname">Apellidos:</label>
			<input type="text" id="lastname" v-model="teacher.surname" />
		</div>
		<div>
			<label for="dni">DNI:</label>
			<input type="text" id="dni" v-model="teacher.dni" />
		</div>
		<div>
			<label for="materias">Materias:</label>
			<input type="text" id="materias" v-model="subject" />
			<button @click="handleSubject()">Agregar</button>
		</div>
		<div>
			<ul>
				<li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
			</ul>
		</div>
		<div>
			<input type="checkbox" id="docs" v-model="teacher.doc" />
			<label for="docs">Documentación Entregada</label>
		</div>
		<div><button @click="handleAddTeacher()">Agregar</button></div>
	</section>

	<section>
		<h3>Listado de profesores</h3>
		<table>
			<tr>
				<th>Nombre</th>
				<th>Apellidos</th>
				<th>DNI</th>
				<th>Materias</th>
				<th>Documentación Entregada</th>
			</tr>
			<tr v-for="elm in teachers" :key="elm.dni">
				<td>{{ elm.teacherName }}</td>
				<td>{{ elm.surname }}</td>
				<td>{{ elm.dni }}</td>
				<td>
					<ul>
						<li v-for="(subject, index) in elm.subjects" :key="index">
							{{ subject }}
						</li>
					</ul>
				</td>
				<td v-if="elm.doc">Entregado</td>
				<td v-else>No Entregado</td>
			</tr>
		</table>
	</section>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

interface ITeacher {
	teacherName: string;
	surname: string;
	dni: string;
	subjects: Array<string>;
	doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
	teacherName: '',
	surname: '',
	dni: '',
	subjects: [],
	doc: false,
});

let teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<string> = ref('');

const handleSubject = () => {
	teacher.value.subjects.push(subject.value);
	subject.value = '';
};

const handleAddTeacher = () => {
	teachers.value.push({
		teacherName: teacher.value.teacherName,
		surname: teacher.value.surname,
		dni: teacher.value.dni,
		subjects: teacher.value.subjects,
		doc: teacher.value.doc,
	});
	teacher.value.teacherName = '';
	teacher.value.surname = '';
	teacher.value.dni = '';
	teacher.value.subjects = [];
	teacher.value.doc = false;
};
</script>

<style scoped>
table {
	border-collapse: collapse;
	border: 1px solid #000;
}
th,
td {
	border: 1px solid #000;
	padding: 0.5rem;
}
label {
	display: block;
}
input {
	display: block;
	margin-bottom: 0.5rem;
	padding: 10px;
	border: 0;
	border-bottom: 1px solid #ccc;
	width: 100%;
}
</style>
