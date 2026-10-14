import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Eye, EyeOff, RotateCcw } from "lucide-react";

interface Scene3DProps {
  className?: string;
}

export const Scene3D: React.FC<Scene3DProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isInteractive, setIsInteractive] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Verify WebGL capability
    try {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090F, 0.035);

    // Setup PMREM procedural environment for studio reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTexture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Reusable objects group
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Central Core: High-end Icosahedron with dual layered geometry
    // Inner glowing technical wireframe
    const innerGeom = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x48e6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    sceneGroup.add(innerCore);

    // Outer physical glass/metal faceted shell
    const outerGeom = new THREE.IcosahedronGeometry(1.4, 0);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.18,
      reflectivity: 0.9,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.45,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const outerCore = new THREE.Mesh(outerGeom, outerMat);
    sceneGroup.add(outerCore);

    // Fine wireframe overlay on the outer shell edges
    const wireframeGeom = new THREE.WireframeGeometry(outerGeom);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x4388ff,
      transparent: true,
      opacity: 0.7,
      linewidth: 1,
    });
    const wireframeLines = new THREE.LineSegments(wireframeGeom, wireframeMat);
    outerCore.add(wireframeLines);

    // 2. Orbital Rings
    const ring1Geom = new THREE.TorusGeometry(2.3, 0.018, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x48e6ff,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x003366,
      emissiveIntensity: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    sceneGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.7, 0.014, 16, 140);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0x220044,
      emissiveIntensity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    sceneGroup.add(ring2);

    // 3. Floating Satellite Nodes (3 to 5 nodes)
    const satellites: THREE.Mesh[] = [];
    const satelliteGeoms = [
      new THREE.OctahedronGeometry(0.24),
      new THREE.TetrahedronGeometry(0.22),
      new THREE.BoxGeometry(0.3, 0.3, 0.3),
      new THREE.DodecahedronGeometry(0.2),
    ];

    satelliteGeoms.forEach((geom, i) => {
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x48e6ff : 0x4388ff,
        metalness: 0.9,
        roughness: 0.15,
        wireframe: i === 1,
      });
      const satMesh = new THREE.Mesh(geom, satMat);
      satellites.push(satMesh);
      sceneGroup.add(satMesh);
    });

    // 4. Subtle drifting technical particle field
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x48e6ff,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // 5. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const cyanPointLight = new THREE.PointLight(0x48e6ff, 3.5, 12, 1.8);
    cyanPointLight.position.set(-3, 2, 2);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x4388ff, 3.0, 12, 1.8);
    bluePointLight.position.set(3, -2, 2);
    scene.add(bluePointLight);

    const violetRimLight = new THREE.PointLight(0x8b5cf6, 2.5, 10, 2);
    violetRimLight.position.set(0, -3, -2);
    scene.add(violetRimLight);

    // 6. Ground coordinate grid
    const gridHelper = new THREE.GridHelper(16, 24, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -3.2;
    scene.add(gridHelper);

    // Smooth Pointer Parallax tracking with clamped damping
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      if (!isInteractive || prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      // Normalized coordinates (-1 to 1)
      targetMouse.x = (clientX / rect.width) * 2 - 1;
      targetMouse.y = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Clock and loop
    const clock = new THREE.Clock();
    let isTabVisible = true;

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      if (!isTabVisible || !renderer) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Exponential damping on pointer parallax (clamped so camera never disorients)
      if (!prefersReducedMotion && isInteractive) {
        currentMouse.x = THREE.MathUtils.damp(currentMouse.x, targetMouse.x, 3.5, delta);
        currentMouse.y = THREE.MathUtils.damp(currentMouse.y, targetMouse.y, 3.5, delta);

        camera.position.x = currentMouse.x * 0.85;
        camera.position.y = currentMouse.y * 0.65;
        camera.lookAt(0, 0, 0);
      }

      // Smooth central object rotation (approx 1 rev per 40 seconds)
      const rotationRate = prefersReducedMotion ? 0.03 : 0.12;
      outerCore.rotation.y += delta * rotationRate;
      outerCore.rotation.x = Math.sin(elapsed * 0.25) * 0.15;

      innerCore.rotation.y -= delta * (rotationRate * 1.5);
      innerCore.rotation.z += delta * (rotationRate * 0.8);

      // Orbital rings rotation
      ring1.rotation.z += delta * 0.18;
      ring2.rotation.z -= delta * 0.12;
      ring2.rotation.x = -Math.PI / 4 + Math.sin(elapsed * 0.4) * 0.08;

      // Orbiting satellites calculation
      satellites.forEach((sat, i) => {
        const speed = 0.5 + i * 0.22;
        const radius = 2.1 + i * 0.35;
        const angle = elapsed * speed + (i * Math.PI) / 2;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.z = Math.sin(angle) * (radius * 0.85);
        sat.position.y = Math.sin(elapsed * 1.2 + i * 1.5) * 0.5;
        sat.rotation.x += delta * 0.8;
        sat.rotation.y += delta * 1.2;
      });

      // Drifting particles subtle oscillation
      particleSystem.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    renderLoop();

    // Context loss recovery
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };
    canvas.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Resource disposal
      innerGeom.dispose();
      innerMat.dispose();
      outerGeom.dispose();
      outerMat.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      ring1Geom.dispose();
      ringMat1.dispose();
      ring2Geom.dispose();
      ringMat2.dispose();
      satelliteGeoms.forEach((g) => g.dispose());
      particleGeom.dispose();
      particleMat.dispose();
      envTexture.dispose();
      renderer?.dispose();
    };
  }, [prefersReducedMotion, isInteractive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] lg:min-h-[560px] flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Interactive 3D Universe Visualizer representing computational problem-solving"
    >
      {/* Background ambient lighting vignette */}
      <div className="absolute inset-0 bg-radial from-[#4388FF]/10 via-[#07090F]/60 to-[#07090F] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"
        />
      ) : (
        /* Graceful CSS / SVG Fallback if WebGL unavailable */
        <div className="w-full h-full flex items-center justify-center p-8 text-center bg-[#0B1220]/50 border border-slate-800 rounded-2xl">
          <div className="max-w-md">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#4388FF] to-[#48E6FF] flex items-center justify-center opacity-80 shadow-lg shadow-cyan-500/20">
              <RotateCcw className="w-8 h-8 text-white animate-spin" />
            </div>
            <p className="text-sm font-medium text-slate-300">
              Computational Universe Visualizer
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Optimized fallback active for your device environment
            </p>
          </div>
        </div>
      )}

      {/* Discreet 3D Viewport Controls (Bottom Dock - Collapsible & Non-Occluding) */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-[#0B1220]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800/80 text-xs text-slate-400">
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
          3D Core Engine
        </span>
        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title={isInteractive ? "Pause pointer parallax" : "Resume pointer parallax"}
          aria-label={isInteractive ? "Pause 3D pointer parallax" : "Resume 3D pointer parallax"}
        >
          {isInteractive ? (
            <>
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-slate-500" />
              <span>Static</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
