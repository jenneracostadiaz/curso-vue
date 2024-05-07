<template>
  <ChildComponent ref="percentageComponent" />
  <button @click="banco">Añadir cuenta bancaria</button>

  <p><br /></p>
  <hr />
  <p><br /></p>
  <img v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: 500 }" alt="" />
</template>

<script setup lang="ts">
import { ref, type VNode } from 'vue'
import ChildComponent from './ChildComponent.vue'

const percentageComponent = ref(null)

const banco = () => {
  percentageComponent.value.recalculate()
}

const lazyOptions = ref({
  src: 'https://picsum.photos/seed/picsum/1800',
  lifecycle: {
    loading: (el: VNode) => {
      console.log('Cargando imagen...', el)
    },
    error: (el: VNode) => {
      console.log('Error al cargar la imagen...', el)
    },
    loaded: (el: VNode) => {
      console.log('Imagen cargada...', el)
    }
  }
})
</script>

<style scoped>
img {
  width: 400px;
  height: 400px;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #f5f5f5;
  transition: background 0.3s;
  border: 1px solid #ccc;
}
img[lazy='loading'] {
  background: #f5f5f5;
  border: 1px solid #1d10db;
}
img[lazy='error'] {
  background: #f00;
  border: 1px solid #f00;
}
img[lazy='loaded'] {
  background: #0f0;
  border: 1px solid #0f0;
}
</style>
