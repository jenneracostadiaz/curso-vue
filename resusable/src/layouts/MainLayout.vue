<template>
    <div class="container">
        <div class="auxbar">
            <Auxbar />
        </div>
        <div class="main-content-container">
            <div class="menu">
                <MenuSidebar />
            </div>
            <div class="main-content">
                <slot name="main"></slot>
            </div>
            <div class="aux-content">
                <slot name="aux"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Auxbar from '@/components/AuxBar.vue'
import MenuSidebar from '@/components/MenuSidebar.vue'
</script>

<style>
.container {
    max-width: 1200px;
    width: 90%;
    margin: 4rem auto;
}
</style>
