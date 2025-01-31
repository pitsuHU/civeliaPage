﻿window.addEventListener('load', init);
 
function init(){
    
    //サイズを指定   
    const width = 960;
    const height = 540;

    //レンダラーを作成
    const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#myCanvas')});
    renderer.setSize(width, height);

    //シーンを作成
    const scene = new THREE.Scene();

    //カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    //カメラの初期座標を設定
    camera.position.set(0,0, 1000);

    //カメラコントローラを作成
    const controls = new THREE.OrbitControls(camera);


    //形状とマテリアルからメッシュを作成
    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(300, 300, 300),
        new THREE.MeshNormalMaterial()
    );
    scene.add(mesh);

    tick();

    //毎フレーム時に実行されるループイベント
    function tick(){

        //レンダリング
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
    
}

