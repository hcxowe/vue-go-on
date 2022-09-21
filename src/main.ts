import { createApp, version } from 'vue'
import './style.css'
import App from './App.vue'
import Button from './components/Button.vue'
import i18nPlugin from './plugins/i18n'

const app = createApp(App, { title: 'test vue' + version })

app.component('Button', Button)

app.provide('appData', { type: 'app' })

app.directive('focus', {
    // 在绑定元素的 attribute 前 或事件监听器应用前调用
    created(el, binding, vnode, prevVnode) {},
    // 在元素被插入到 DOM 前调用
    beforeMount(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
    mounted: (el) => el.focus(),
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, prevVnode) {},
})

app.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!',
    },
})

app.config.errorHandler = (err) => {
    console.log(err)
}

app.config.warnHandler = (msg) => {
    console.log(msg)
}

app.config.performance = true

app.config.compilerOptions.whitespace = 'preserve'

app.config.globalProperties.$globalName = 'my test project'

app.mount('#app')
