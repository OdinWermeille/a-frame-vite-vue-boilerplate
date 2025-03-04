<p align="center">
    <img src="./logo.svg" alt="VAV Logo" align="center"/>
</p>
<h1 align="center">Amnesiac Wizard</h1>

> A project built using A-Frame 1.7, Vue 3.5 and Vite 5.4

![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![A-Frame](https://img.shields.io/badge/A%E2%80%93Frame-1.7-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

> Based on a boilerplate created for a course at School of Business and Engineering Vaud by Chabloz Nicolas

## Included in this project

### Libs and components

- [aframe-extras](https://github.com/c-frame/aframe-extras) (MIT License)
- [aframe physx](https://github.com/c-frame/physx) (MIT License)
- [aframe-blink-controls](https://github.com/jure/aframe-blink-controls) (MIT License)
- [aframe-multi-camera](https://github.com/diarmidmackenzie/aframe-multi-camera/) (MIT License)
- [simple-navmesh-constraint](https://github.com/AdaRoseCannon/aframe-xr-boilerplate) (MIT Licence)

### Movement modes support

- **VR** – walk + Teleport (Grip for grab and laser for click)

### 3D models

- **Portal** – [Magic Portal](https://sketchfab.com/3d-models/magic-portal-88a7c64fa3d3431b8cd22e8fedc71e78) by [Valerii_Melnychenko](https://sketchfab.com/Valerii_Melnychenko) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Iron Gate** – [Iron Gate](https://sketchfab.com/3d-models/iron-gate-eefe5c295e8342e088e27735dc5c9f71) by [YG3D](https://sketchfab.com/YGMax) is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
- **Walls and ground** – [Wall with Gates](https://sketchfab.com/3d-models/wall-with-gates-e87f42b2534d4e53967a7da22c9fcf58) by [Gunnar Correa](https://sketchfab.com/gunnarcorrea) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Cell** – [jail (Cell)](https://sketchfab.com/3d-models/jail-cell-ddc41a6835374fd7aa4574e93e0590ca) by [Pieter Ferreira](https://sketchfab.com/Badboy17Aiden) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) the author asks for this model not to be used in datasets for, in the development of, or as inputs to generative AI programs.
- **Moon** – [PS1 style low poly Moon](https://sketchfab.com/3d-models/ps1-style-low-poly-moon-a0800eda5580488092cbb48c415180a9) by [albert_buscio](https://sketchfab.com/albert_buscio) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Candle** – [Low-poly Gravity Falls themed candle](https://sketchfab.com/3d-models/low-poly-gravity-falls-themed-candle-b56cc6ebea1441f0aab1c1cc36299ecc) by [Kanna-Nakajima](https://sketchfab.com/Kanna-nakajima) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Towers** – [Kickelhahn Tower](https://sketchfab.com/3d-models/kickelhahn-tower-weyeuTkdMADFF53EZq4U38mmx3P) by [3DHaupt](https://sketchfab.com/dennish2010) is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) the author asks for this model not to be used in datasets for, in the development of, or as inputs to generative AI programs.
- **Lever** – [Lever](https://sketchfab.com/3d-models/lever-711403ceebb94b77a6eca5c0e631d3b6) by [cmyer29](https://sketchfab.com/cmyer29) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Teleport Sound** – [energy](https://pixabay.com/sound-effects/energy-90321/) by [Leszek_Szary (Freesound)](https://pixabay.com/fr/users/freesound_community-46691455/) is licensed under [Pixabay Content License](https://pixabay.com/service/license-summary/)
---

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/OdinWermeille/a-frame-vite-vue-boilerplate.git .
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)