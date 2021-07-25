<template>
    <transition-group tag="div" name="fadeGroup" appear>
        <slot></slot>
    </transition-group>
</template>

<style>
.fadeGroup-enter-from{
    opacity: 0;
    transform: scale(0.6); 
}
.fadeGroup-enter-to{
    opacity: 1;
    transform: scale(1)
}
.fadeGroup-enter-active{
    transition: all 0.5s ease;
}
.fadeGroup-leave-from{
    opacity: 1;
    transform: scale(1)
}
.fadeGroup-leave-to{
    opacity: 0;
    transform: scale(0.6); 
}
.fadeGroup-leave-active{
    transition: all 0.5s ease;
}
.fadeGroup-move{
    transition: all 0.3s ease
}
</style>
