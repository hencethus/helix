var t = 0;

var mouseX = 0;
var mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 1, 75);
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 100000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.SphereGeometry( .5, 32, 32 );
// var mat1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
// var mat2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// var mat3 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
// var sphere1 = new THREE.Mesh( geometry, mat1 );
// var sphere2 = new THREE.Mesh( geometry, mat2 );
// var sphere3 = new THREE.Mesh( geometry, mat3 );
// scene.add( sphere1 );
// scene.add( sphere2 );
// scene.add( sphere3 );

camera.position.z = 30;

var onDocumentMouseMove = function (event) {
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
}

var animate = function () {
  requestAnimationFrame( animate );
  render();
}

var render = function () {
  t += 1/60;

  // camera.position.x += ( mouseX - camera.position.x);
  // camera.position.y += ( - mouseY - camera.position.y);

  var geometry = new THREE.SphereGeometry( .5, 32, 32 );
  var mat1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
  var mat2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  var mat3 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
  var sphere1 = new THREE.Mesh( geometry, mat1 );
  var sphere2 = new THREE.Mesh( geometry, mat2 );
  var sphere3 = new THREE.Mesh( geometry, mat3 );
  scene.add( sphere1 );
  scene.add( sphere2 );
  scene.add( sphere3 );

  sphere1.position.y = 10 * Math.sin(5*t);
  sphere2.position.z = 10 * Math.cos(5*t);

  sphere3.position.y = sphere1.position.y
  sphere3.position.z = sphere2.position.z

  sphere1.position.x = 10 * t;
  sphere2.position.x = 10 * t;
  sphere3.position.x = 10 * t;

  camera.position.x = 10 * t + (mouseX / windowHalfX) * 30;
  camera.position.y = (- mouseY / windowHalfY) * 30;
  camera.lookAt( new THREE.Vector3(10 * t, 0, 0) );

  renderer.render(scene, camera);
};

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

animate();
