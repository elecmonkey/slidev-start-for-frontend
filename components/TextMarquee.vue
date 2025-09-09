<template>
  <div class="marquee-wrapper font-medium leading-tight text-5xl my-5 text-white flex items-center">
    <div class="slogan center translate-x-36" :title="staticText">
      {{ staticText }}
    </div>
    <ul class="language-marquee inline-block align-top relative z-0 whitespace-nowrap translate-x-20">
      <li
        v-for="(item, i) in items"
        :key="i"
        :style="{ animation: itemAnim(i) }"
      >
        <span :class="['word', item.colorClass]">{{ item.text }}</span>
      </li>
      <li class="placeholder" aria-hidden="true"><span class="word">.</span></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'

interface MarqueeItem {
  text: string
  colorClass: string
}

interface Props {
  staticText: string
  items: MarqueeItem[]
  animationInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  staticText: 'Welcome to ',
  animationInterval: 2000,
  items: () => [
    { text: 'the web world', colorClass: 'dark:text-green-500 text-green-700' },  
    { text: '- JavaScript -', colorClass: 'dark:text-cyan-500 text-cyan-700' },
    { text: 'Front-end dev', colorClass: 'dark:text-rose-500 text-rose-700' },
    { text: 'Herald Studio', colorClass: 'dark:text-yellow-500 text-yellow-700' }
  ]
})

const intervalMs = computed(() => `${props.animationInterval}ms`)
// Transition windows: shorter than step to extend dwell
const uid = Math.random().toString(36).slice(2, 8)

// Timing: shorter transitions, longer dwell per step
const fadeInMs = computed(() => Math.min(120, Math.max(60, Math.round(props.animationInterval * 0.06))))
const fadeOutMs = computed(() => Math.min(120, Math.max(60, Math.round(props.animationInterval * 0.06))))
const stepMs = computed(() => props.animationInterval + fadeInMs.value + fadeOutMs.value)
const totalMs = computed(() => props.items.length * stepMs.value)
const durationMs = computed(() => totalMs.value)
// Keyframe stops over the full cycle
const pInEnd = computed(() => (fadeInMs.value / totalMs.value) * 100)
const pVisibleEnd = computed(() => ((fadeInMs.value + (props.animationInterval - fadeOutMs.value)) / totalMs.value) * 100)
const pOutEnd = computed(() => ((fadeInMs.value + props.animationInterval) / totalMs.value) * 100)

let styleEl: HTMLStyleElement | null = null
onMounted(() => {
  const kf = `@keyframes fade-up-${uid} {\n` +
    `  0% { opacity: 0; transform: translateY(100%); }\n` +
    `  ${pInEnd.value.toFixed(4)}% { opacity: 1; transform: translateY(0); }\n` +
    `  ${pVisibleEnd.value.toFixed(4)}% { opacity: 1; transform: translateY(0); }\n` +
    `  ${pOutEnd.value.toFixed(4)}% { opacity: 0; transform: translateY(-100%); }\n` +
    `  100% { opacity: 0; transform: translateY(-100%); }\n` +
    `}\n` +
    `@keyframes fade-up-first-${uid} {\n` +
    `  0%, ${pVisibleEnd.value.toFixed(4)}% { opacity: 1; transform: translateY(0); }\n` +
    `  ${pOutEnd.value.toFixed(4)}% { opacity: 0; transform: translateY(-100%); }\n` +
    `  100% { opacity: 0; transform: translateY(-100%); }\n` +
    `}`

  if (typeof document !== 'undefined') {
    styleEl = document.createElement('style')
    styleEl.id = `tmq-${uid}`
    styleEl.textContent = kf
    document.head.appendChild(styleEl)
  }
})

onUnmounted(() => {
  if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl)
})

const itemAnim = (i: number) => {
  const delay = i * stepMs.value
  return `${durationMs.value}ms fade-up-${uid} ${delay}ms linear infinite`
}
</script>

<style scoped>
.marquee-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.slogan {
  white-space: nowrap;
  background-image: linear-gradient(-10deg, #4EC5D4 40%, #146b8c 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  /* Outline + shadow for readability */
  /* -webkit-text-stroke: 0.6px rgba(0, 0, 0, 0.45); */
  /* text-stroke: 0.6px rgba(0, 0, 0, 0.45); */
  paint-order: stroke fill;
  text-shadow:
    0 1px 1px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.05);
}

.language-marquee {
  position: relative;
}

.language-marquee li {
  position: absolute;
  display: inline;
  will-change: opacity, transform;
  opacity: 0;
  transform: translateY(100%);
  z-index: -1;
}

.language-marquee li.placeholder {
  position: static;
  visibility: hidden;
}

.word {
  display: inline-block;
  white-space: nowrap;
  /* Outline + shadow for colored words */
  -webkit-text-stroke: 0.6px rgba(0, 0, 0, 0.35);
  text-stroke: 0.6px rgba(0, 0, 0, 0.35);
  paint-order: stroke fill;
  text-shadow:
    0 1px 1px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  0.25%, 4.1% {
    opacity: 1;
    transform: translateY(0);
  }
  4.35%, 100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes fade-up-first {
  0%, 4.1% {
    opacity: 1;
    transform: translateY(0);
  }
  4.35%, 100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
