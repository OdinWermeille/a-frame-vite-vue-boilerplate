<script setup>
  import { ref, watchEffect } from 'vue';

  const props = defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  const showBtn = ref(false);

  watchEffect(() => {
    if (!props.loaded) return;
    setTimeout(() => {showBtn.value = true}, 4000);
  });

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }

</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Amnesiac Wizard</h1>
      <p v-if="!showBtn">loading...</p>
      <button v-if="showBtn" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              VR – walk + Teleport (Grip for grab and laser for
              click)
            </li>
          </ul>
        </section>
        <section>
          <h4>Source code</h4>
          <blockquote><a href="https://github.com/OdinWermeille/a-frame-vite-vue-boilerplate">Github repo</a></blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/magic-portal-88a7c64fa3d3431b8cd22e8fedc71e78" target="_blank">Portal</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Valerii_Melnychenko" target="_blank">Valerii_Melnychenko</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/iron-gate-eefe5c295e8342e088e27735dc5c9f71" target="_blank">Iron Gate</a>
          </dt><dd>
            by <a href="https://sketchfab.com/YGMax" target="_blank">YG3D</a>
            under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/wall-with-gates-e87f42b2534d4e53967a7da22c9fcf58" target="_blank">Walls and ground</a>
          </dt><dd>
            by <a href="https://sketchfab.com/gunnarcorrea" target="_blank">Gunnar Correa</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/jail-cell-ddc41a6835374fd7aa4574e93e0590ca" target="_blank">Cell</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Badboy17Aiden" target="_blank">Pieter Ferreira</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
            the author asks for this model not to be used in datasets for, in the development of, or as inputs to generative AI programs.
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/ps1-style-low-poly-moon-a0800eda5580488092cbb48c415180a9" target="_blank">Moon</a>
          </dt><dd>
            by <a href="https://sketchfab.com/albert_buscio" target="_blank">albert_buscio</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-gravity-falls-themed-candle-b56cc6ebea1441f0aab1c1cc36299ecc" target="_blank">Candle</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Kanna-nakajima" target="_blank">Kanna-Nakajima</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
            the author asks for this model not to be used in datasets for, in the development of, or as inputs to generative AI programs.
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/kickelhahn-tower-weyeuTkdMADFF53EZq4U38mmx3P" target="_blank">Towers</a>
          </dt><dd>
            by <a href="https://sketchfab.com/dennish2010" target="_blank">3DHaupt</a>
            under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a>
            the author asks for this model not to be used in datasets for, in the development of, or as inputs to generative AI programs.
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lever-711403ceebb94b77a6eca5c0e631d3b6" target="_blank">Lever</a>
          </dt><dd>
            by <a href="https://sketchfab.com/cmyer29" target="_blank">cmyer29</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://pixabay.com/fr/sound-effects/energy-90321/" target="_blank">Teleport Sound</a>
          </dt><dd>
            by <a href="https://pixabay.com/sound-effects/energy-90321/" target="_blank">Leszek_Szary (Freesound)</a>
            under <a href="https://pixabay.com/service/license-summary/" target="_blank">Pixabay Content License</a>
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>
