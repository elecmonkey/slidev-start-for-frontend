<template>
  <div 
    class="agent-logo"
    :style="{
      position: 'absolute',
      left: position.left ? `${position.left}px` : 'auto',
      right: position.right ? `${position.right}px` : 'auto',
      top: position.top ? `${position.top}px` : 'auto',
      bottom: position.bottom ? `${position.bottom}px` : 'auto',
      transform: 'translate(-50%)',
    }"
  >
    <div class="logo-container">
      <img 
        :src="imagePath" 
        :alt="name"
        class="logo-image"
      />
      <span class="logo-name">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Position {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

interface Props {
  imagePath: string
  name: string
  position: Position
}

withDefaults(defineProps<Props>(), {
  name: 'Agent'
})
</script>

<style scoped>
.agent-logo {
  z-index: 10;
  user-select: none;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.logo-image {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
}

.logo-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}
</style>