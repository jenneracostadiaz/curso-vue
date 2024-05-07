<template>
    <div class="container">
        <h2>Products Invoices</h2>
        <h3>Añadir Producto</h3>
        <div class="new-product">
            <input
                type="text"
                v-model="newProduct.name"
                placeholder="Nombre del producto"
            />
            <input
                type="number"
                v-model="newProduct.price"
                placeholder="Precio del producto"
            />
            <button @click="addProduct">Añadir</button>
        </div>
        <h3>Report:</h3>
        <ul>
            <li
                v-for="product in products"
                :key="product.name"
            >
                {{ product.name }} - {{ currency }}
                {{ product.price.toFixed(2) }}
            </li>
        </ul>
        <hr />

        <table>
            <tr>
                <td width="100px">
                    <strong>Subtotal</strong>
                </td>
                <td>
                    {{ currency }} {{ subtotal.toFixed(2) }}
                </td>
            </tr>
            <tr>
                <td width="100px">
                    <strong>IGV (18%)</strong>
                </td>
                <td>{{ currency }} {{ igv.toFixed(2) }}</td>
            </tr>
            <tr>
                <td width="100px">
                    <strong>Total</strong>
                </td>
                <td>
                    {{ currency }} {{ total.toFixed(2) }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'

const currency = '$'

interface IProduct {
    name: string
    price: number
}

const newProduct: Ref<IProduct> = ref({
    name: '',
    price: 0
})

const products: Ref<IProduct[]> = ref([])

const addProduct = () => {
    products.value.push({ ...newProduct.value })
    newProduct.value = { name: '', price: 0 }
}

const subtotal = computed(() =>
    products.value.reduce(
        (acc, product) => acc + product.price,
        0
    )
)

const igv = computed(() => subtotal.value * 0.18)

const total = computed(() => subtotal.value + igv.value)
</script>

<style scoped>
.container {
    max-width: 450px;
    margin: 0 auto;
    padding: 20px;
}

h2 {
    font-size: 1.8rem;
    margin-top: 20px;
}

h3 {
    font-size: 1.4rem;
    margin-top: 10px;
}

p {
    margin: 10px 0;
}

strong {
    font-weight: 700;
}

.new-product {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 15px;
}

input {
    padding: 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 15px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
}
</style>
