<template>
    <button @click="show = !show">Toggle</button>
    <Transition>
        <p v-show="show">sdfasdf</p>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
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
