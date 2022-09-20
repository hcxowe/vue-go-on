<template>
    <button :title="title" @click="onClick" v-bind="$attrs">
        <slot /> {{ privateName }}
    </button>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { ref, useAttrs, inject } from 'vue'

interface Props {
    title?: string
    count?: number
}

const props = withDefaults(defineProps<Props>(), {
    title: 'hello',
    count: 0,
})

interface Emits {
    (e: 'my-click', count: number): void
    (e: 'update:count', count: number): void
}

const emit = defineEmits<Emits>()

const myCount = ref(props.count)

const onClick = () => {
    emit('my-click', myCount.value)
    emit('update:count', myCount.value)

    myCount.value++
}

// 获取参透的 Attributes
const attrs = useAttrs()

// 注入
const privateName = inject('privateName')
</script>
