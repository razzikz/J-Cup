import React from "react"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

class Model3D extends React.Component {

    render() {
        return (<canvas className="webgl">
        </canvas>
        )
    }

    componentDidMount() {
        this.Scene()
    }

    Scene() {
        const scene = new THREE.Scene();

        window.innerWidth = window.innerWidth - window.innerWidth * 0.25
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8
        camera.position.x = 5
        camera.position.y = 5

        function visualisation(points) {
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0x111111 });

            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            const line = new THREE.Line(geometry, lineMaterial)
            scene.add(line)
        }
        
        const points_left_edge = [
            new THREE.Vector3(-4, 0, 0),
            new THREE.Vector3(-4, 0, -3),
            new THREE.Vector3(-6, 3, -3),
            new THREE.Vector3(-6, 3, 0)
        ]
        visualisation(points_left_edge)

        const points_right_edge = [
            new THREE.Vector3(4, 0, 0),
            new THREE.Vector3(4, 0, -3),
            new THREE.Vector3(6, 3, -3),
            new THREE.Vector3(6, 3, 0)
        ]
        visualisation(points_right_edge)

        const points_down_edge = [
            new THREE.Vector3(-4, 0, 0),
            new THREE.Vector3(4, 0, 0),
            new THREE.Vector3(4, 0, -3),
            new THREE.Vector3(-4, 0, -3)
        ]

        visualisation(points_down_edge)

        const points_ahead_edge = [
            new THREE.Vector3(-4, 0, 0),
            new THREE.Vector3(-6, 3, 0),
            new THREE.Vector3(6, 3, 0),
            new THREE.Vector3(4, 0, 0)
        ]

        visualisation(points_ahead_edge)

        const points_behind_edge = [
            new THREE.Vector3(-4, 0, -3),
            new THREE.Vector3(-6, 3, -3),
            new THREE.Vector3(6, 3, -3),
            new THREE.Vector3(4, 0, -3)
        ]

        visualisation(points_behind_edge)

        const canvas = document.querySelector("canvas")
        const renderer = new THREE.WebGLRenderer({canvas: canvas})
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor( 0xffffff )
        renderer.render(scene, camera)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05


        function rotate() {
            requestAnimationFrame(rotate)
            controls.update()
            renderer.render(scene, camera)
        }

        rotate()
    }
}

export default Model3D