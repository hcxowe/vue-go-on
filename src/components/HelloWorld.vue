<template>
    <div>1.绑定多个属性值</div>
    <div v-bind="objectAttr">hello world 1</div>
    <div>2.可写计算属性</div>
    <div>
        <input v-model="firstName" /> - <input v-model="lastName" /> =>
        <input v-model="fullName" />
    </div>

    <div>3.trim修饰符</div>
    <input v-model.trim="msg" />{{ msg }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const objectAttr = {
    id: 'helloWorld',
    class: 'wrapper',
    order: '1',
    dataColor: '#fff',
}

const firstName = ref('')
const lastName = ref('')
const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },
    set(name) {
        if (!name) {
            firstName.value = ''
            lastName.value = ''
            return
        }

        name = name.split(' ')
        if (name.length != 2) {
            firstName.value = ''
            lastName.value = ''
            return
        }

        firstName.value = name[0]
        lastName.value = name[1]
    },
})

const msg = ref('')
</script>

<style scoped>
.wrapper {
    padding: 5px;
}
</style>
