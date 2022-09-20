<template>
    <HelloWorld />
    <hr />
    <Button
        title="button"
        v-model:count="count"
        @my-click="onButtonClick"
        class="my-button"
        >My Button</Button
    >
    {{ 'click count: ' + count }}
    <hr />
    <div>{{ `mouseposition: x: ${x}, y: ${y}` }}</div>
    <hr />

    <input v-focus />

    <hr />
</template>

<script setup lang="ts">
import { ref, provide, mounted } from 'vue'
import useMouse from './utils/mouse.ts'

import HelloWorld from './components/HelloWorld.vue'

const count = ref(0)
const onButtonClick = (count1) => {
    console.log('button click ' + count1)
}

const privateName = ref('hcxowe')

provide('privateName', privateName)

const { x, y } = useMouse()

const vFocus1 = {
    mounted: (el) => el.focus(),
}
</script>

<style scoped></style>
