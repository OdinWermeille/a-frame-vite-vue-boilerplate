<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({    
    from: {type: Number, default: 1},
    to: {type: Number, default: 2},        
    color: {type: String, default: "#ffc006"},        
  });

const candle = ref(null);



onMounted(() => {    
    setTimeout(() => {
        candle.value.emit('animationcomplete__next');
    }, 1000);
});
</script>

<template>
    <a-light
        ref="candle"
        type="point"
        :intensity="from"
        :color="color"
        :animation__start="`property: intensity; to : ${to}; startEvents : animationcomplete__next`"
        :animation__next="`property: intensity; to : ${from}; startEvents : animationcomplete__start`"
    ></a-light>
</template>