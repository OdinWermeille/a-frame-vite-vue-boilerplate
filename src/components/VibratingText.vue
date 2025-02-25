<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    textContent: {type: String},
    from: {type: Number},
    to: {type: Number},  
});

const text = ref(null);

onMounted(() => {    
    setTimeout(() => {
        text.value.emit('animationcomplete__next');
    }, 1000);
});
</script>

<template>
    <a-text
        ref="text"
        :value="textContent"
        :position="from"
        :animation__start="`property: position; to: ${from}; startEvents: animationcomplete__next`"
        :animation__next="`property: position; to: ${to}; startEvents: animationcomplete__start`"
    ></a-text>
</template>