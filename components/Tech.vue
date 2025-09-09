<template>
<!-- 装饰性技术栈图标 -->
<img src="https://images.elecmonkey.com/pages/about/vuejs-original.svg" :style="`position: absolute; top: 15%; left: 8%; width: 60px; height: 60px; opacity: ${scattered ? 0.5 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/react-original.svg" :style="`position: absolute; top: 25%; right: 12%; width: 55px; height: 55px; opacity: ${scattered ? 0.48 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/solidjs-original.svg" :style="`position: absolute; bottom: 13%; right: 30%; width: 50px; height: 50px; opacity: ${scattered ? 0.45 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/svelte-original.svg" :style="`position: absolute; top: 10%; right: 25%; width: 52px; height: 52px; opacity: ${scattered ? 0.47 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/qwik.svg" :style="`position: absolute; bottom: 20%; right: 20%; width: 48px; height: 48px; opacity: ${scattered ? 0.46 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/nextjs-original.svg" :style="`position: absolute; top: 70%; left: 25%; width: 58px; height: 58px; opacity: ${scattered ? 0.49 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/nuxtjs-original.svg" :style="`position: absolute; top: 35%; left: 5%; width: 53px; height: 53px; opacity: ${scattered ? 0.47 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/angularjs-original.svg" :style="`position: absolute; bottom: 40%; right: 25%; width: 56px; height: 56px; opacity: ${scattered ? 0.44 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/astro-original.svg" :style="`position: absolute; top: 20%; left: 25%; width: 54px; height: 54px; opacity: ${scattered ? 0.48 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/nodejs-original.svg" :style="`position: absolute; bottom: 15%; left: 10%; width: 62px; height: 62px; opacity: ${scattered ? 0.5 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/vitejs-original.svg" :style="`position: absolute; top: 50%; right: 15%; width: 51px; height: 51px; opacity: ${scattered ? 0.47 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/webpack-original.svg" :style="`position: absolute; bottom: 35%; left: 30%; width: 49px; height: 49px; opacity: ${scattered ? 0.46 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/esbuild.svg" :style="`position: absolute; top: 40%; left: 20%; width: 57px; height: 57px; opacity: ${scattered ? 0.48 : 1}; z-index: -1;`" />
<img src="https://vitest.dev/logo.svg" :style="`position: absolute; bottom: 25%; right: 10%; width: 55px; height: 55px; opacity: ${scattered ? 0.49 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/rollup-original.svg" :style="`position: absolute; top: 30%; right: 30%; width: 53px; height: 53px; opacity: ${scattered ? 0.47 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/babel-original.svg" :style="`position: absolute; bottom: 45%; right: 5%; width: 59px; height: 59px; opacity: ${scattered ? 0.48 : 1}; z-index: -1;`" />
<img src="https://images.elecmonkey.com/pages/about/postcss-original.svg" :style="`position: absolute; top: 55%; left: 8%; width: 52px; height: 52px; opacity: ${scattered ? 0.47 : 1}; z-index: -1;`" />
</template>

<script setup lang="ts">
interface Props {
  scattered?: boolean
}

withDefaults(defineProps<Props>(), {
  scattered: true
})
</script>