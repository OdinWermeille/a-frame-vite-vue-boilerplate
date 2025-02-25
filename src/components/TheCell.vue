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
    cellCandle.setAttribute('visible', false);
    purpleCellCandle.setAttribute('visible', true);
    candleLight.setAttribute('color', '#cf00cf');
    const leftHand = document.querySelector('#hand-left');
    leftHand.setAttribute('blink-controls', 'enable', true);  
    hasRead = true;
  }
  , 7000);
}

function manageStopRead() {
  console.log('stop reading');
  const cellCandle = document.querySelector('#cell-candle');
  const purpleCellCandle = document.querySelector('#purple-cell-candle');
  const candleLight = document.querySelector('#candlelight');
  cellCandle.setAttribute('visible', true);
  purpleCellCandle.setAttribute('visible', false);
  candleLight.setAttribute('color', '#ffc006');
  clearTimeout(currentTimeout);
}

</script>

<template>
  <a-entity>
    <a-gltf-model src="#jail" scale="0.86 0.73 0.9" rotation="0 180 0" position="-5.031 0 42.8"></a-gltf-model>
    <a-box position="0.1 1.984 26.02" depth="2.500" height="0.1" width="2.4" color="#393939"></a-box>
    <a-gltf-model src="#one-wall" scale="0.01 0.01 0.01" rotation="0 180 0" position="-4.063 0 24.787"></a-gltf-model>
    <a-entity 
      position="-0.69 0.47 26.45"
      listen-to__start="target : #note1; event : readnote1; emit : readnote1"
      listen-to__stop="target : #note1; event : stopreadnote1; emit : stopreadnote1"
      @readnote1="manageRead"
      @stopreadnote1="manageStopRead"
      simple-grab>
      <a-gltf-model id="purple-cell-candle" src="#purple-candle" scale="25 25 25" visible="false"></a-gltf-model>
      <a-gltf-model id="cell-candle" src="#candle" scale="25 25 25" clickable outline-on-event></a-gltf-model>
      <BaseCandleLight id="candlelight" from="0.05" to="0.1" position="0.007 0.218 0"></BaseCandleLight>
    </a-entity>
    <a-entity rotation="-90 0 -90" scale="0.8 0.4 1" position="0.9 0.467 26">
      <!--when light level on a-plane above threshold, trigger an event-->
      <a-plane 
        id="note1" 
        emit-when-near="target : #candlelight; distance : 0.85; event : readnote1; eventFar : stopreadnote1">
      </a-plane>
      <a-text id="text-full" color="#21213d" position="-0.24 0 0" scale="0.2 0.4 1" value="It's been two weeks.
      I don't know how to get out. 
      The only way seems to be 
      that teleportation portal."></a-text>
      <a-text id="text_holes" color="#21213d" position="-0.24 0 0" scale="0.2 0.4 1" visible="false"
      value="It's been two weeks.
      I don't know how to get    . 
      The only way seems to be 
      that               ation portal."></a-text>
      <VibratingText 
        from="-0.145 -0.14 0"
        to="-0.155 -0.14 0"
        color="#21213d" 
        position="-0.15 -0.14 0" 
        scale="0.2 0.4 1" 
        visible="false" 
        value="teleport">
      </VibratingText>
      <VibratingText 
        from="0.225 0.05 0"
        to="0.215 0.05 0"
        color="#21213d" 
        position="0.22 0.05 0" 
        scale="0.2 0.4 1" 
        visible="false" 
        value="out">
      </VibratingText>
    </a-entity>
  </a-entity>
</template>