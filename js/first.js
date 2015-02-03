var PI = Math.PI;
var mouseX = 0;
var mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 0, 11);

var light1 = new THREE.DirectionalLight( 0xffffff );
//var light2 = new THREE.DirectionalLight( 0xffffff );
var light3 = new THREE.AmbientLight( 0x222222 );
light1.position.set( 0, PI, 1 );
//light2.position.set( 0, -PI, 1 );
scene.add( light1 );
//scene.add( light2 );
scene.add( light3 );

var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 100000 );

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setClearColor( 0xffffff, 1);
document.body.appendChild( renderer.domElement );


// var sineArr = [[0, 0, 0], [PI / 2, 1, 0], [PI, 0, 0], [(4/3) * PI, -1, 0], [2 * PI, 0, 0]];
// var sineWave = THREE.Spline.initFromArray();

camera.position.z = 5

var sinPoints = []
for(var x = 0; x < 8 * PI; x += .1){
    sinPoints.push(new THREE.Vector3(x, Math.sin(x), 0));
}
var numSinPoints = sinPoints.length;
var sinSpline = new THREE.SplineCurve3(sinPoints);
var sinGeo = new THREE.TubeGeometry(sinSpline, numSinPoints, .02, 8, false);
var sinMat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
var sinTube = new THREE.Mesh(sinGeo, sinMat);
scene.add(sinTube);

// var sinMat = new THREE.LineBasicMaterial(
//   { color: 0x660000 }
// );
// var sinGeo = new THREE.Geometry();
// var sinSplinePoints = sinSpline.getPoints(numSinPoints);
// for(var i = 0; i < sinSplinePoints.length; i++){
//     sinGeo.vertices.push(sinSplinePoints[i]);
// }
// var sinLine = new THREE.Line(sinGeo, sinMat);
// scene.add( sinLine );


var cosPoints = []
for(var x = 0; x < 8 * PI; x += .1){
    cosPoints.push(new THREE.Vector3(x, 0, -Math.cos(x)));
}
var numCosPoints = cosPoints.length;
var cosSpline = new THREE.SplineCurve3(cosPoints);
var cosGeo = new THREE.TubeGeometry(cosSpline, numCosPoints, .02, 8, false);
var cosMat = new THREE.MeshLambertMaterial({ color: 0x0000ff });
var cosTube = new THREE.Mesh(cosGeo, cosMat);
scene.add(cosTube);

// var cosMat = new THREE.LineBasicMaterial(
//   { color: 0x000066 }
// );
// var cosGeo = new THREE.Geometry();
// var cosSplinePoints = cosSpline.getPoints(numCosPoints);
// for(var i = 0; i < cosSplinePoints.length; i++){
//     cosGeo.vertices.push(cosSplinePoints[i]);
// }
// var cosLine = new THREE.Line(cosGeo, cosMat);
// scene.add( cosLine );

var helixPoints = []
for(var x = 0; x < 8 * PI; x += .1){
    helixPoints.push(new THREE.Vector3(x, Math.sin(x), -Math.cos(x)));
}
var numHelixPoints = helixPoints.length;
var helixSpline = new THREE.SplineCurve3(helixPoints);
var helixGeo = new THREE.TubeGeometry(helixSpline, numHelixPoints, .02, 8, false);
var helixMat = new THREE.MeshLambertMaterial({ color: 0xff00ff });
var helixTube = new THREE.Mesh(helixGeo, helixMat);
scene.add(helixTube);

// var helixMat = new THREE.LineBasicMaterial(
//   { color: 0xff00ff }
// );
// var helixGeo = new THREE.Geometry();
// var helixSplinePoints = helixSpline.getPoints(numhelixPoints);
// for(var i = 0; i < helixSplinePoints.length; i++){
//     helixGeo.vertices.push(helixSplinePoints[i]);
// }
// var helixLine = new THREE.Line(helixGeo, helixMat);
// scene.add( helixLine );


var xgeo = new THREE.Geometry();
xgeo.vertices.push(
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(8*PI, 0, 0)
);
var xmat = new THREE.LineBasicMaterial({ color: 0x333333 });
var xaxis = new THREE.Line(xgeo, xmat);
scene.add(xaxis);

var ygeo = new THREE.Geometry();
ygeo.vertices.push(
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 1, 0)
);
var ymat = new THREE.LineBasicMaterial({ color: 0x333333 });
var yaxis = new THREE.Line(ygeo, ymat);
scene.add(yaxis);

var zgeo = new THREE.Geometry();
zgeo.vertices.push(
  new THREE.Vector3(0, 0, -1),
  new THREE.Vector3(0, 0, 1)
);
var zmat = new THREE.LineBasicMaterial({ color: 0x333333 });
var zaxis = new THREE.Line(zgeo, zmat);
scene.add(zaxis);



var onDocumentMouseMove = function (event) {
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
}

var animate = function () {
  requestAnimationFrame( animate );
  render();
}

var render = function () {
  camera.position.x = PI + (mouseX / windowHalfX) * 5;
  camera.position.y = (- mouseY / windowHalfY) * 5;
  camera.lookAt( new THREE.Vector3(PI, 0, 0) );

  renderer.render(scene, camera);
}

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

animate();
