AFRAME.registerComponent('tiling-square', {
  schema: {
    width: {type: 'number', default: 10},
    depth: {type: 'number', default: 10},
    size: {type: 'number', default: 1},
    gap: {type: 'number', default: 0},
    baseColor: {type: 'color', default: '#d0d0d0'},
  },
  init: function () {
    console.log('tiling-square component initialized');
  },
  update: function () {
    this.el.innerHTML = '';
    const totalWidth = this.data.width * (this.data.size + this.data.gap);
    const totalDepth = this.data.depth * (this.data.size + this.data.gap);
    const box = document.createElement('a-box');
    box.setAttribute('width', this.data.size);
    box.setAttribute('depth', this.data.size);
    box.setAttribute('height', 0.2);
    for (let x = 0; x < this.data.width; x++) {
      for (let z = 0; z < this.data.depth; z++) {
        const clone = box.cloneNode();
        clone.setAttribute('position', `${x * (this.data.size + this.data.gap) - totalWidth/2} 0 ${z * (this.data.size + this.data.gap) - totalDepth/2}`);
        const colorVariation = Math.random() * 47;
        const newcolor = new THREE.Color(this.data.baseColor);
        // apply variation to the base color
        newcolor.r = newcolor.r*255 + colorVariation;
        newcolor.g = newcolor.g*255 + colorVariation;
        newcolor.b = newcolor.b*255 + colorVariation;
        console.log(newcolor);
        clone.setAttribute('color', `rgb(${Math.round(newcolor.r)}, ${Math.round(newcolor.g)}, ${Math.round(newcolor.b)})`);
        this.el.appendChild(clone);
      }
    }
  },
  tick: function () {

  }
});