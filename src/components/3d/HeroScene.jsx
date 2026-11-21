import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. Interactive 3D Cyber Sphere
// ==========================================
function CyberSphere({ isMobile, scrollProgress }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  const baseScale = isMobile ? 1.15 : 1.55;

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 0.35;
    const mouseY = state.pointer.y * 0.35;
    const scroll = scrollProgress.current;

    // Outer group scroll response: moves away, scales, and tilts on scroll
    if (groupRef.current) {
      const currentScale = baseScale * (1 - scroll * 0.35);
      groupRef.current.scale.set(currentScale, currentScale, currentScale);
      groupRef.current.position.z = -scroll * 4.5;
      groupRef.current.position.y = -scroll * 1.8;

      // Mouse parallax tilt on group
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY * 0.4,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.4,
        0.05
      );
    }

    // Core mesh rotation: accelerates on scroll
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (0.25 + scroll * 0.8);
      meshRef.current.rotation.x += delta * 0.1;
    }

    // Counter-rotating holographic wireframe shell
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * (0.2 + scroll * 0.5);
      wireframeRef.current.rotation.z += delta * 0.15;
    }

    // Gyroscopic energy rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.45;
      ring1Ref.current.rotation.y = time * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.35;
      ring2Ref.current.rotation.z = time * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = -time * 0.4;
      ring3Ref.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={baseScale} position={[0, 0, 0]}>
      {/* Primary Cyber Core - Deep Obsidian with Neon Violet Emissive */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, isMobile ? 32 : 64, isMobile ? 32 : 64]} />
        <MeshDistortMaterial
          color="#16082b"
          emissive="#6b21a8"
          emissiveIntensity={0.8}
          roughness={0.12}
          metalness={0.92}
          distort={isMobile ? 0.18 : 0.32}
          speed={1.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Holographic Geometric Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.18, isMobile ? 2 : 3]} />
        <meshBasicMaterial
          color="#c084fc"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.42, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#c084fc"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.6, 0.01, 16, 64]} />
        <meshStandardMaterial
          color="#e879f9"
          emissive="#a855f7"
          emissiveIntensity={1.1}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 3 */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1.76, 0.008, 16, 64]} />
        <meshBasicMaterial
          color="#d8b4fe"
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

// ==========================================
// 2. Swirling Floating Particle Field
// ==========================================
function FloatingParticles({ count = 800, isMobile, scrollProgress }) {
  const pointsRef = useRef();
  const materialRef = useRef();

  const [positions, colors] = useMemo(() => {
    const actualCount = isMobile ? Math.min(count, 300) : count;
    const pos = new Float32Array(actualCount * 3);
    const col = new Float32Array(actualCount * 3);

    const colorPalette = [
      new THREE.Color('#c084fc'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#e9d5ff'),
      new THREE.Color('#9333ea'),
      new THREE.Color('#ffffff'),
    ];

    for (let i = 0; i < actualCount; i++) {
      const radius = THREE.MathUtils.randFloat(2.6, 9.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-Math.PI / 2, Math.PI / 2);

      pos[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count, isMobile]);

  useFrame((state, delta) => {
    const scroll = scrollProgress.current;

    if (pointsRef.current) {
      const scrollSpeed = 1 + scroll * 2.2;
      pointsRef.current.rotation.y += delta * 0.08 * scrollSpeed;
      pointsRef.current.rotation.x += delta * 0.04 * scrollSpeed;

      // Mouse parallax
      const mouseX = state.pointer.x * 0.35;
      const mouseY = state.pointer.y * 0.35;
      pointsRef.current.position.x = THREE.MathUtils.lerp(
        pointsRef.current.position.x,
        mouseX,
        0.05
      );
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        mouseY,
        0.05
      );

      // Particles disperse and spread outwards as user scrolls
      const spread = 1 + scroll * 1.4;
      pointsRef.current.scale.set(spread, spread, spread);
    }

    // Particles fade as user scrolls
    if (materialRef.current) {
      materialRef.current.opacity = Math.max(0.12, 0.85 - scroll * 0.8);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={isMobile ? 0.045 : 0.065}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ==========================================
// 3. Camera Rig with Scroll & Mouse Control
// ==========================================
function CameraController({ scrollProgress }) {
  const { camera } = useThree();

  useFrame((state) => {
    const mouseX = state.pointer.x * 0.35;
    const mouseY = state.pointer.y * 0.35;
    const scroll = scrollProgress.current;

    // As user scrolls, camera smoothly pulls back and tracks
    const targetZ = 6.2 + scroll * 4.0;
    const targetY = -scroll * 1.5 + mouseY * 0.4;
    const targetX = mouseX * 0.6;

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);

    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ==========================================
// 4. Main Exported Canvas Wrapper
// ==========================================
export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const scrollProgress = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }

    const trigger = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      trigger.kill();
    };
  }, []);

  if (!webGLSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="fallback-orb" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} color="#e9d5ff" />
        <pointLight position={[-6, -4, 2]} intensity={2.2} color="#7e22ce" />
        <pointLight position={[6, 4, 3]} intensity={3.2} color="#c084fc" />
        <pointLight position={[0, -5, -4]} intensity={1.6} color="#9333ea" />

        <CameraController scrollProgress={scrollProgress} />

        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
          <CyberSphere isMobile={isMobile} scrollProgress={scrollProgress} />
        </Float>

        <FloatingParticles
          count={isMobile ? 320 : 800}
          isMobile={isMobile}
          scrollProgress={scrollProgress}
        />
      </Canvas>
    </div>
  );
}
