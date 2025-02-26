<script setup>

import VibratingText from './VibratingText.vue';

let currentTimeout;
let hasRead = false;

function manageRead() {
  if (hasRead) return;
  currentTimeout = setTimeout(function()  {
    const cellCandle = document.querySelector('#cell-candle');
    const purpleCellCandle = document.querySelector('#purple-cell-candle');
    const candleLight = document.querySelector('#candlelight');
    const textFront = document.querySelector('#text-front2');
    cellCandle.setAttribute('visible', false);
    purpleCellCandle.setAttribute('visible', true);
    candleLight.setAttribute('color', '#cf00cf');
    textFront.setAttribute('visible', true);
    const leftHand = document.querySelector('#hand-left');
    leftHand.setAttribute('blink-controls', 'curveShootingSpeed', 20); 
    hasRead = true;
  }
  , 9000);
  setTimeout(function() {
    const textFull = document.querySelector('#text-full2');
    const textHoles = document.querySelector('#text-holes2');
    const portal = document.querySelector('#text-portal');
    const up = document.querySelector('#text-up');
    textFull.setAttribute('visible', false);
    textHoles.setAttribute('visible', true);
    portal.setAttribute('visible', true);
    up.setAttribute('visible', true);
  }, 4000);
}

function manageStopRead() {
  const cellCandle = document.querySelector('#cell-candle');
  const purpleCellCandle = document.querySelector('#purple-cell-candle');
  const candleLight = document.querySelector('#candlelight');
  const textFront = document.querySelector('#text-front2');
  cellCandle.setAttribute('visible', true);
  purpleCellCandle.setAttribute('visible', false);
  candleLight.setAttribute('color', '#ffc006');
  textFront.setAttribute('visible', false);
  const textFull = document.querySelector('#text-full2');
  const textHoles = document.querySelector('#text-holes2');
  const portal = document.querySelector('#text-portal');
  const up = document.querySelector('#text-up');
  textFull.setAttribute('visible', true);
  textHoles.setAttribute('visible', false);
  portal.setAttribute('visible', false);
  up.setAttribute('visible', false);
  clearTimeout(currentTimeout);
}

</script>

<template>
  <a-entity rotation="0 -90 0" position="0.85 -0.150 17" scale="0.2 0.2 0.2">
    <a-gltf-model src="#portal"></a-gltf-model>
    <a-entity id="magic&light" visible="false">
      <a-gltf-model src="#portal-magic"></a-gltf-model>
      <a-light type="point" intensity="1" position="-13.61 6.79 4.370" ></a-light>
    </a-entity>
    <a-entity position="-13.72 6.993 12.745" rotation="-0.03 0 0">
      <a-plane 
        id="note2" 
        height="2"
        width="2"
        emit-when-near="target : #candlelight; distance : 0.7; event : readnote2; eventFar : stopreadnote2"
        @readnote2="manageRead"
        @stopreadnote2="manageStopRead">
      </a-plane>
      <a-entity position="-0.94 0 0" scale="0.4 0.4 1">
        <a-text color="#21213d" id="text-full2" 
        value="The portal is not to be lit when not in use. 
        The stairs up the portal tower are to be 
        manned to prevent escape by teleportation.">
        </a-text>
        <a-text color="#21213d" id="text-holes2" position="0.007 0 0" visible="false" 
        value="The            is not to be lit when not in use.
        The stairs      the portal tower are to be
        manned to prevent escape by teleportation.">
        </a-text>
        <VibratingText 
          color="#21213d" 
          position="0.415 0.235 0" 
          id="text-portal" 
          visible="false" 
          value="portal"
          from="0.39 0.235 0"
          to="0.44 0.235 0">
        </VibratingText>
        <VibratingText 
          color="#21213d" 
          position="1 -0.005 0" 
          id="text-up" 
          visible="false" 
          value="up"
          from="0.975 -0.005 0"
          to="1.025 -0.005 0">
        </VibratingText>
      </a-entity>
    </a-entity>
  </a-entity>

  <a-entity
      geometry="primitive: plane; height: 1.6; width: 2"
      position="0 0.04 14.3"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: green"
      visible="true"
  ></a-entity>
</template>