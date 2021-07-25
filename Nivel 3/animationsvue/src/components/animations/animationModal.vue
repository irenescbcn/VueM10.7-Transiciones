<template>
    <transition name="pop">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "pop"
}
</script>

<style>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>