<script setup>

let currentTimeout;
let hasRead = false;

function manageRead() {
  if (hasRead) return;
  currentTimeout = setTimeout(function()  {
    const cellCandle = document.querySelector('#cell-candle');
    const purpleCellCandle = document.querySelector('#purple-cell-candle');
    const candleLight = document.querySelector('#candlelight');
    const textFront = document.querySelector('#text-front');
    cellCandle.setAttribute('visible', false);
    purpleCellCandle.setAttribute('visible', true);
    candleLight.setAttribute('color', '#cf00cf');
    textFront.setAttribute('visible', true);
    const leftHand = document.querySelector('#hand-left');
    leftHand.setAttribute('blink-controls', 'enable', true);  
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
  console.log('stop reading');
  const cellCandle = document.querySelector('#cell-candle');
  const purpleCellCandle = document.querySelector('#purple-cell-candle');
  const candleLight = document.querySelector('#candlelight');
  const textFront = document.querySelector('#text-front');
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
  <a-entity rotation="0 -90 0" position="0.9 -0.150 17" scale="0.2 0.2 0.2">
    <a-gltf-model src="#portal"></a-gltf-model>
    <a-entity id="magic&light" visible="false">
      <a-gltf-model src="#portal-magic"></a-gltf-model>
      <a-light type="point" intensity="1" position="-13.61 6.79 4.370" ></a-light>
    </a-entity>
    <a-entity>
      <a-plane 
        id="note2" 
        height="2"
        width="2"
        emit-when-near="target : #candlelight; distance : 0.88; event : readnote2; eventFar : stopreadnote2">
      </a-plane>
      <a-text id="text-note2" color="#21213d" position="-0.94 0 0" scale="0.4 0.4 1" value="The portal is not to be lit when not in use. 
      The stairs to the top of the portal tower are to be 
      manned to prevent escape by teleportation.">
      </a-text>
    </a-entity>
  </a-entity>
</template>