<script setup>
    import { showPortal, portalBrightness } from '../store/progress';

    import BaseCandleLight from './BaseCandleLight.vue';

    const openPortal = () => {
        showPortal.value = true;
    }

    const lowerBrightness = () => {
        portalBrightness.value = 1;
    }

    const increaseBrightness = () => {
        portalBrightness.value = 2;
    }
</script>

<template>
    <a-entity>
        <a-gltf-model src="#tower" scale="0.6 0.6 0.6" rotation="0 -15 0" position="10.496 -0.639 2.4"></a-gltf-model>
        <BaseCandleLight position="10.026 3.739 3.654"></BaseCandleLight>
        <BaseCandleLight position="12.184 3.739 3.654"></BaseCandleLight>
        <BaseCandleLight position="12.184 3.739 1.424"></BaseCandleLight>
        <BaseCandleLight position="9.884 3.739 1.424"></BaseCandleLight>
        <a-gltf-model src="#lever-base" scale="0.5 0.5 0.5" rotation="0 -43.3 0" position="10.52 13.351 2.08"></a-gltf-model>
        <a-gltf-model src="#lever-arm" scale="0.5 0.5 0.5" rotation="-60 -43.3 0" position="10.6 13.79 2.08" obb-collider animation="property: rotation; to : 60 -43.3 0; startEvents : obbcollisionstarted" @animationcomplete="openPortal"></a-gltf-model>
    </a-entity>
    <a-entity
        geometry="primitive: circle; radius: 0.9"
        position="11.5 13.63 2.8"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: green"
        visible="false"
        emit-when-near="target: #head; distance: 3; event: increaseBrightness; eventFar: lowerBrightness"
        @increaseBrightness="increaseBrightness"
        @lowerBrightness="lowerBrightness"
    ></a-entity>
</template>