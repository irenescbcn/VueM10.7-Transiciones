<template>
    <transition name="switch" mode="out-in">
        <slot></slot>
    </transition>
</template>

<style>
.switch-enter-from, 
.switch-leave-to{
    opacity: 0;
    transform: translateY(20px)
}
.switch-enter-to,
.switch-leave-from{
    opacity: 1;
    transform: translateY(0)
}
.switch-enter-active, 
.switch-leave-active{
    transition: all 0.5s ease;
}
</style>