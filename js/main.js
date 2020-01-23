
var flowersContainer = document.querySelector('#flowers-container');

var entity = null;
for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 25; x++) {
        entity = document.createElement('a-entity');

        entity.setAttribute('gltf-model', '#white-flower-model');
        entity.setAttribute('scale', '0.003 0.003 0.003');
        entity.setAttribute('position', (-x) + ' 0 ' + (-y));
        entity.setAttribute('rotation', '0 0 0');

        flowersContainer.appendChild(entity);
    }
}
