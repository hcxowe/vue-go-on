<template>
    <button @click="show = !show">Toggle</button>
    <Transition>
        <p v-show="show">dataType: {{ appData.type }}</p>
    </Transition>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

const show = ref(true)
const appData = inject('appData')
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
