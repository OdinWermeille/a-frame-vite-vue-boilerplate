<script setup>

import BaseCandleLight from './BaseCandleLight.vue';
import VibratingText from './VibratingText.vue';

let currentTimeout;
let hasRead = false;

function manageRead() {
  if (hasRead) return;
  currentTimeout = setTimeout(function()  {
    const cellCandle = document.querySelector('#cell-candle');
    const purpleCellCandle = document.querySelector('#purple-cell-candle');
    const candleLight = document.querySelector('#candlelight');
    const textFront = document.querySelector('#text-front1');
    cellCandle.setAttribute('visible', false);
    purpleCellCandle.setAttribute('visible', true);
    candleLight.setAttribute('color', '#cf00cf');
    textFront.setAttribute('visible', true);
    const leftHand = document.querySelector('#hand-left');
    leftHand.setAttribute('blink-controls', 'enable', true);
    leftHand.setAttribute('blink-controls', 'curveShootingSpeed', 17);  
    hasRead = true;
  }
  , 7000);
  setTimeout(function() {
    const textFull = document.querySelector('#text-full');
    const textHoles = document.querySelector('#text-holes');
    const teleport = document.querySelector('#text-teleport');
    const out = document.querySelector('#text-out');
    textFull.setAttribute('visible', false);
    textHoles.setAttribute('visible', true);
    teleport.setAttribute('visible', true);
    out.setAttribute('visible', true);
  }, 3000);
}

function manageStopRead() {
  const cellCandle = document.querySelector('#cell-candle');
  const purpleCellCandle = document.querySelector('#purple-cell-candle');
  const candleLight = document.querySelector('#candlelight');
  const textFront = document.querySelector('#text-front1');
  cellCandle.setAttribute('visible', true);
  purpleCellCandle.setAttribute('visible', false);
  candleLight.setAttribute('color', '#ffc006');
  textFront.setAttribute('visible', false);
  const textFull = document.querySelector('#text-full');
  const textHoles = document.querySelector('#text-holes');
  const teleport = document.querySelector('#text-teleport');
  const out = document.querySelector('#text-out');
  textFull.setAttribute('visible', true);
  textHoles.setAttribute('visible', false);
  teleport.setAttribute('visible', false);
  out.setAttribute('visible', false);
  clearTimeout(currentTimeout);
}

</script>

<template>
  <a-entity>
    <a-gltf-model src="#jail" scale="0.86 0.73 0.9" rotation="0 180 0" position="-5.031 0 42.8"></a-gltf-model>
    <a-box position="0.1 1.984 26.02" depth="2.500" height="0.1" width="2.4" color="#393939"></a-box>
    <a-gltf-model src="#one-wall" scale="0.01 0.01 0.01" rotation="0 180 0" position="-4.063 0 24.787"></a-gltf-model>
    <a-entity rotation="90 45 0" position="-0.69 0.428 26.45" simple-grab>
      <a-entity 
        rotation="170 90 -90"
        position="0.065 -0.065 -0.042"
        listen-to__start="target : #note1; event : readnote1; emit : readnote1"
        listen-to__stop="target : #note1; event : stopreadnote1; emit : stopreadnote1"
        @readnote1="manageRead"
        @stopreadnote1="manageStopRead">
        <a-gltf-model id="purple-cell-candle" src="#purple-candle" scale="25 25 25" visible="false"></a-gltf-model>
        <a-gltf-model id="cell-candle" src="#candle" scale="25 25 25" clickable outline-on-event @click="$event.target.removeAttribute('clickable')"></a-gltf-model>
        <BaseCandleLight id="candlelight" :from="0.05" :to="0.1" position="0.007 0.218 0"></BaseCandleLight>
      </a-entity>
    </a-entity>
    <a-entity rotation="-90 0 -90" scale="0.8 0.4 1" position="0.9 0.467 26">
      <a-plane 
        id="note1" 
        emit-when-near="target : #candlelight; distance : 0.88; event : readnote1; eventFar : stopreadnote1">
      </a-plane>
      <a-entity position="-0.24 0 0" scale="0.2 0.4 1">
        <a-text id="text-full" color="#21213d" value="It's been two weeks.
        I don't know how to get out. 
        The only way seems to be 
        that teleportation portal."></a-text>
        <a-text id="text-holes" color="#21213d" visible="false"
        value="It's been two weeks.
        I don't know how to get       . 
        The only way seems to be 
        that               ation portal."></a-text>
        <VibratingText 
          id="text-teleport"
          from="0.475 -0.34 0"
          to="0.425 -0.34 0"
          color="#21213d" 
          position="0.45 -0.34 0"
          visible="false" 
          value="teleport">
        </VibratingText>
        <VibratingText 
          id="text-out"
          from="2.335 0.12 0"
          to="2.285 0.12 0"
          color="#21213d" 
          position="2.31 0.12 0"
          visible="false" 
          value="out">
        </VibratingText>
      </a-entity>
    </a-entity>
  </a-entity>

  <a-entity
      geometry="primitive: plane; height: 1.8; width: 0.7"
      position="0 0.070 25.9"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: green"
      visible="false"
  ></a-entity>
</template>