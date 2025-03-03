<script setup>
  import '../aframe/disable-in-vr.js';
  import '../aframe/hide-in-vr.js';
  import '../aframe/simple-navmesh-constraint.js';
  import '../aframe/blink-controls.js';
  import '../aframe/physx-grab.js';
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
  >

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: true"
        camera
        position="0 1.65 0"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
        disable-in-vr="component: simple-navmesh-constraint;"
      >
        <a-text id="text-front1" position="0 0 -0.4" scale="0.2 0.2 0.2" align="center" visible="false"
        value="TELEPORT
        OUT" >
        </a-text>
        <a-text id="text-front2" position="0 0 -0.4" scale="0.2 0.2 0.2" align="center" visible="false"
        value="PORTAL
        UP" ></a-text>
        <a-text id="text-end" position="0 0 -0.4" scale="0.2 0.2 0.2" align="center" visible="false"
        value="You have
        escaped,
        well done !" ></a-text>
        <a-text id="text-end-2" position="0 0 -0.4" scale="0.2 0.2 0.2" align="center" visible="false"
        value="You may now
        explore
        outside
        the walls" ></a-text>
        <a-entity id="intro" position="0 0 -0.2">
          <a-plane color="#000000" position="0 0 -0.1"></a-plane>
          <a-text scale="0.2 0.2 0.2" id="intro-text" align="center"
          value="You are an 
          amnesiac 
          wizard."></a-text>
          <a-text scale="0.2 0.2 0.2" id="intro-text-2" align="center" visible="false"
          value="Try to
          remember
          your spells."></a-text>
        </a-entity>
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 4; objects: [clickable]; showLine: false;"
          position="0 0 -0.1"
          disable-in-vr="component: raycaster; disableInAR: false;"
          hide-in-vr="hideInAR: false"
        ></a-entity>
        <a-entity
          id="dummy-hand-right"
          position="0.3 -0.4 -0.5"
        ></a-entity>
        <a-entity
          id="dummy-hand-left"
          position="-0.3 -0.4 -0.5"
        ></a-entity>
      </a-entity>

      <a-entity
        id="hand-left"
        hand-controls="hand: left"
        blink-controls="
          enable: false;
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
        position="0 1.5 0"
        physx-grab
      >
        <a-sphere id="hand-left-collider"
          radius="0.06"
          visible="false"
          obb-collider>
        </a-sphere>
      </a-entity>

      <a-entity
        id="hand-right"
        hand-controls="hand: right"
        laser-controls="hand: right"
        raycaster="far: 4; objects: [clickable]; showLine: true;"
        position="0 1.5 0"
        physx-grab
      >
        <a-sphere id="hand-right-collider"
          radius="0.02"
          visible="false"
          physx-body="type: kinematic; emitCollisionEvents: true">
        </a-sphere>
      </a-entity>

  </a-entity>
</template>