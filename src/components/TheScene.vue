<script setup>
  import { ref } from 'vue';

  import { backgroundColor } from '../store/progress.js';

  import TheCameraRig from './TheCameraRig.vue';
  import TheCell from './TheCell.vue';
  import ThePortal from './ThePortal.vue';
  import ThePortalTower from './ThePortalTower.vue';

  import '../aframe/tiling-square.js';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/emit-when-near.js';
  import '../aframe/listen-to.js';
  import '../aframe/outline.js';

  const allAssetsLoaded = ref(false);

  const startIntro = () => {
    setTimeout(() => {
      document.getElementById('intro-text').setAttribute('visible', false);
      document.getElementById('intro-text-2').setAttribute('visible', true);
      setTimeout(() => {
        document.getElementById('intro').setAttribute('visible', false);
      }, 3000);
    }, 3000);
  };

</script>

<template>
  <a-scene
    :background="backgroundColor"
    simple-grab
    outline
    @enter-scene="startIntro"
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title : Magic Portal
        Source : https://sketchfab.com/3d-models/magic-portal-88a7c64fa3d3431b8cd22e8fedc71e78
        Auteur : https://sketchfab.com/Valerii_Melnychenko (Valerii_Melnychenko)
        Licence : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="portal" src="./assets/models/magic_portal_off.glb"></a-asset-item>
      <!--
        Original asset : Magic Portal, only using the magic
      -->
      <a-asset-item id="portal-magic" src="./assets/models/portal_magic.glb"></a-asset-item>
      <!--
        Title : Iron Gate
        Source : https://sketchfab.com/3d-models/iron-gate-eefe5c295e8342e088e27735dc5c9f71
        Auteur : https://sketchfab.com/YGMax (YG3D)
        Licence : CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/)
      -->
      <a-asset-item id="iron-gate" src="./assets/models/iron_gate_dark.glb"></a-asset-item>
      <!-- 
        Title : Wall with Gates 
        Source : https://sketchfab.com/3d-models/wall-with-gates-e87f42b2534d4e53967a7da22c9fcf58
        Auteur : https://sketchfab.com/gunnarcorrea (Gunnar Correa)
        Licence : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="wall" src="./assets/models/wall_with_gates.glb"></a-asset-item>
      <!--
        Original asset : Wall with Gates, only using the ground 
      -->
      <a-asset-item id="ground" src="./assets/models/ground.glb"></a-asset-item>
      <!--
        Original asset : Wall with Gates, only using one wall
      -->
      <a-asset-item id="one-wall" src="./assets/models/one_wall.glb"></a-asset-item>
      <!--
        Title : jail (Cell)
        Source : https://sketchfab.com/3d-models/jail-cell-ddc41a6835374fd7aa4574e93e0590ca
        Auteur : https://sketchfab.com/Badboy17Aiden (Pieter Ferreira)
        License : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
        Additionnal Info : NoAI: This model may not be used in datasets for, in the development of, or as inputs to generative AI programs.
      -->
      <a-asset-item id="jail" src="./assets/models/jail_cell.glb"></a-asset-item>
      <!--
        Title : PS1 style low poly Moon
        Source : https://sketchfab.com/3d-models/ps1-style-low-poly-moon-a0800eda5580488092cbb48c415180a9
        Auteur : https://sketchfab.com/albert_buscio (albert_buscio)
        License : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="moon" src="./assets/models/the_moon.glb"></a-asset-item>
      <!--
        Title : Low-poly Gravity Falls themed candle
        Source : https://sketchfab.com/3d-models/low-poly-gravity-falls-themed-candle-b56cc6ebea1441f0aab1c1cc36299ecc
        Author : https://sketchfab.com/Kanna-nakajima (Kanna-Nakajima)
        License : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="candle" src="./assets/models/candle.glb"></a-asset-item>
      <a-asset-item id="purple-candle" src="./assets/models/candle_purple.glb"></a-asset-item>
      <!--
        Title : Kickelhahn Tower
        Source : https://sketchfab.com/3d-models/kickelhahn-tower-weyeuTkdMADFF53EZq4U38mmx3P
        Author : https://sketchfab.com/dennish2010 (3DHaupt)
        License : CC BY-NC-ND 4.0 (https://creativecommons.org/licenses/by-nc-nd/4.0/)
        Additionnal Info : NoAI: This model may not be used in datasets for, in the development of, or as inputs to generative AI programs.
      -->
      <a-asset-item id="tower" src="./assets/models/tower.glb"></a-asset-item>
      <!--
        Title : Lever
        Source : https://sketchfab.com/3d-models/lever-711403ceebb94b77a6eca5c0e631d3b6
        Author : https://sketchfab.com/cmyer29 (cmyer29 )
        License : CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="lever-base" src="./assets/models/lever_base_dark.glb"></a-asset-item>
      <a-asset-item id="lever-arm" src="./assets/models/lever_arm_dark.glb"></a-asset-item>
      <a-asset-item id="teleport-sound" response-type="arraybuffer" src="assets/teleport-sound.mp3" preload="auto"></a-asset-item>
    </a-assets>

    
    <!-- <a-entity tiling-square="width: 30; depth: 30"></a-entity> -->

    <template v-if="allAssetsLoaded">
      <a-entity position="0 0 -25.5" scale="1 1.1 1">
        <a-entity scale="1 0.9 1">  
          <a-gltf-model src="#iron-gate" scale="0.5 0.5 0.5" position="0 -0.1 -0.01"></a-gltf-model>
          <a-gltf-model src="#iron-gate" scale="0.5 0.5 0.5" position="0 -0.1 2.4"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 180 0" position="-11.54 -0.001 0"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" position="11.53 0 2.4"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 -90 0" position="11.220 0 12.710"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 -90 0" position="-13.650 0 12.710"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 90 0" position="13.640 0 14.58"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 -90 0" position="-13.650 0 22.710"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" rotation="0 180 0" position="-11.565 0 24.778"></a-gltf-model>
          <a-gltf-model src="#wall" scale="0.01 0.01 0.01" position="11.540 0 27.280"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0.001 2.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0.001 4.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0 4.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0.001 6.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0 6.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0.001 8.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0 8.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0.001 10.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0 10.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 12.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 12.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 14.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 14.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 16.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 16.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 18.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 18.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 20.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 20.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 22.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 22.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 24.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 24.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="0.520 0 26.395"></a-gltf-model>
          <a-gltf-model src="#ground" scale="0.01 0.01 0.01" position="9.520 0.001 26.395"></a-gltf-model>
          <a-gltf-model src="#tower" scale="0.6 0.6 0.6" rotation="0 75 0" position="-11.374 -0.639 3.163"></a-gltf-model>
          <ThePortalTower></ThePortalTower>
        </a-entity>
        <ThePortal></ThePortal>
        <a-gltf-model id="the-moon" src="#moon" scale="50 50 50" position="-1000 1000 -1000" rotation="30 40 20"></a-gltf-model>
        <a-light id="moonlight" type="spot" position="-800 800 -800" target="#directionaltarget" intensity="400">
          <a-entity id="directionaltarget" position="-10000 30000 -1000"></a-entity>
        </a-light>
        <a-light id="ambiant-blue" type="ambient" color="#40406f" intensity="0.65"></a-light>
        <a-light id="sunlight" type="ambient" color="#ffffff" intensity="2" visible="false"></a-light>
        <TheCell></TheCell>
      </a-entity>
      

      <a-entity
        geometry="primitive: plane; height: 10; width: 17"
        position="0 0.14 -17"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: green"
        visible="false"
      ></a-entity>

      <a-entity
        geometry="primitive: plane; height: 9; width: 21"
        position="0 0.14 -5.9"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: green"
        visible="false"
      ></a-entity>

      <a-entity
        geometry="primitive: plane; height: 10; width: 8.5"
        position="6.25 0.14 -15"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: green"
        visible="false"
      ></a-entity>
      
      <a-entity
        geometry="primitive: plane; height: 10; width: 8.5"
        position="-6.25 0.14 -15"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: green"
        visible="false"
      ></a-entity>
      <a-entity id="teleport-sound-el" sound="src: #teleport-sound; on: play-sound; rolloffFactor: 0; volume: 0.8"></a-entity>
    </template>

    <TheCameraRig/>


  </a-scene>
</template>