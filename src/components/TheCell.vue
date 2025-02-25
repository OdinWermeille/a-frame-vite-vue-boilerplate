<script setup>

import BaseCandleLight from './BaseCandleLight.vue';

</script>

<template>
  <a-entity>
    <a-gltf-model src="#jail" scale="0.86 0.73 0.9" rotation="0 180 0" position="-5.031 0 42.8"></a-gltf-model>
    <a-box position="0.1 1.984 26.02" depth="2.500" height="0.1" width="2.4" color="#393939"></a-box>
    <a-gltf-model src="#one-wall" scale="0.01 0.01 0.01" rotation="0 180 0" position="-4.063 0 24.787"></a-gltf-model>
    <a-entity position="-0.69 0.47 26.45" simple-grab>
      <a-gltf-model src="#candle" scale="25 25 25" clickable></a-gltf-model>
      <BaseCandleLight from="0.05" to="0.1" position="0.007 0.218 0"></BaseCandleLight>
    </a-entity>
    <a-entity rotation="-90 0 -90" scale="0.8 0.4 1" position="0.9 0.467 26">
      <!--when light level on a-plane above threshold, trigger an event-->
      <a-plane ></a-plane>
      <a-text color="#21213d" position="-0.24 0 0" scale="0.2 0.4 1" value="It's been two weeks.
      I don't know how to get out. 
      The only way seems to be 
      that teleportation portal."></a-text>
    </a-entity>
  </a-entity>
</template>