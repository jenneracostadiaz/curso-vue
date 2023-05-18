<template>
	<section>
		<h3>Añadir Profesor</h3>
		<div><label for="name">Nombre:</label> <input type="text" id="name" /></div>
		<div>
			<label for="lastname">Apellidos:</label>
			<input type="text" id="lastname" />
		</div>
		<div><label for="dni">DNI:</label> <input type="text" id="dni" /></div>
		<div>
			<label for="materias">Materias:</label>
			<input type="text" id="materias" /> <button>Agregar</button>
		</div>
		<div>
			<input type="checkbox" id="docs" />
			<label for="docs">Documentación Entregada</label>
		</div>
		<div><button>Agregar</button></div>
	</section>

	<section>
		<h3>Listado de profesores</h3>
	</section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
