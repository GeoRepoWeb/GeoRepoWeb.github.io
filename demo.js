
var model = new xeogl.GLTFModel({

    src: "https://dl.dropboxusercontent.com/s/upe75hdekjmeqrd/scene.gltf"
});

var camera = model.scene.camera;
camera.eye = [-56.885494232177734,89.39167022705078,-76.09777069091797];
camera.look = [-0.5958967804908752,6.973697662353516,6.130361080169678];
camera.up = [0.3600173890590668,0.7705879807472229,0.5259142518043518];

new xeogl.CameraControl();

function DebugCameras() {

    console.log("Camera Eye: " + camera.eye);
    console.log("Camera Look: " + camera.look);
    console.log("Camera Up: " + camera.up);
}
