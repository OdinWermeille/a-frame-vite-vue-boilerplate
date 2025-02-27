<script setup>
    import BaseCandleLight from './BaseCandleLight.vue';
</script>

<template>
    <a-entity>
        <a-gltf-model src="#tower" scale="0.6 0.6 0.6" rotation="0 -15 0" position="10.496 -0.639 2.4"></a-gltf-model>
        <BaseCandleLight position="10.026 3.739 3.654"></BaseCandleLight>
        <BaseCandleLight position="12.184 3.739 3.654"></BaseCandleLight>
        <BaseCandleLight position="12.184 3.739 1.424"></BaseCandleLight>
        <BaseCandleLight position="9.884 3.739 1.424"></BaseCandleLight>
    </a-entity>
    <a-entity
      geometry="primitive: circle; radius: 1.2"
      position="11.15 14.2 2.5"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: green"
      visible="true"
    ></a-entity>
</template>