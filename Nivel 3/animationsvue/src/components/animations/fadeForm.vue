<template>
    <transition name="fade" appear>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "fade"
}
</script>

<style>
.fade-enter-active{
    animation: fadeIn 0.5s ease
}

.fade-leave-from{
    opacity: 1;
}
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
    transition: all .5s ease;
}

@keyframes fadeIn {
    0% {opacity: 0;}
    50% {opacity: 1;}
}
</style>