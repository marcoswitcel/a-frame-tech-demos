
var flowersContainer = document.querySelector('#flowers-container');

var flowers = {
    x : 20,
    y: 35,
    loadingAtTime: 10,
}
var entity = null;
for (var y = 0; y < flowers.x; y++) {
    for (var x = 0; x < flowers.y; x++) {
        (function(x, y) {
            var delayForThisFlower = 350 * Math.floor( (x * y)/flowers.loadingAtTime );
            
            setTimeout(function() {
                var type = Math.floor(Math.random()*5);
                var modelIdentifier = [ '#white-flower-model', '#single-rose-model',  '#white-flower-model', '#single-rose-model', '#ivy-model' ][type];
                var scaleParameter = [ '0.003 0.003 0.003', '0.3 0.3 0.3', '0.003 0.003 0.003', '0.3 0.3 0.3', '0.3 0.3 0.3' ][type];
                
                entity = document.createElement('a-entity');

                entity.setAttribute('gltf-model', modelIdentifier);
                entity.setAttribute('scale', scaleParameter);
                entity.setAttribute('position', Math.floor(Math.random()*150-75) + ' 0 ' + Math.floor(Math.random()*150-75));
                entity.setAttribute('rotation', '0 ' + Math.floor(Math.random() * 360 - 180) +' 0');
                entity.setAttribute('shadow', {receive: false, cast: true});

                flowersContainer.appendChild(entity);

            }, delayForThisFlower);
            
        })(x, y);
    }
}

//setTimeout(function() {
//    
//    document.querySelector('#wind-sound-entity').components.sound.playSound();
//    
//}, 3000);
