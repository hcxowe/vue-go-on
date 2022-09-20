import { ref, onMounted, onUnmounted } from 'vue'

export default function useMouse() {
    const x = ref(0)
    const y = ref(0)

    const onUpdate = function (evt: MouseEvent) {
        x.value = evt.pageX
        y.value = evt.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', onUpdate)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', onUpdate)
    })

    return {
        x,
        y,
    }
}
