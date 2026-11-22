import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. Interactive 3D Cyber Sphere (Mobile & Desktop)
// ==========================================
function CyberSphere({ isMobile, scrollProgress, touchRef }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  const baseScale = isMobile ? 0.95 : 1.55;

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Combine mouse and mobile touch inputs
    const inputX = (state.pointer.x || touchRef.current.x) * 0.4;
    const inputY = (state.pointer.y || touchRef.current.y) * 0.4;
    const scroll = scrollProgress.current;

    // Organic continuous floating motion so sphere is always alive on mobile
    const floatY = Math.sin(time * 1.2) * 0.12;
    const floatX = Math.cos(time * 0.9) * 0.08;
    const floatRotZ = Math.sin(time * 0.8) * 0.15;
    const floatRotX = Math.cos(time * 1.0) * 0.12;

    if (groupRef.current) {
      const currentScale = baseScale * (1 - scroll * 0.35);
      groupRef.current.scale.set(currentScale, currentScale, currentScale);

      const initialZ = isMobile ? -1.2 : 0;
      const initialY = isMobile ? 0.35 : 0;
      
      groupRef.current.position.z = initialZ - scroll * 4.5;
      groupRef.current.position.y = initialY + floatY - scroll * 1.8;
      groupRef.current.position.x = floatX;

      // Dynamic tilt responding to touch/mouse + organic breathing
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        inputY + floatRotX,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        inputX + time * 0.2,
        0.06
      );
      groupRef.current.rotation.z = floatRotZ;
    }

    // Core mesh continuous rotation & pulse
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (0.35 + scroll * 0.8);
      meshRef.current.rotation.x += delta * 0.15;
    }

    // Counter-rotating holographic wireframe shell
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * (0.25 + scroll * 0.5);
      wireframeRef.current.rotation.z += delta * 0.18;
    }

    // Dynamic gyroscopic rings in full motion
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.55;
      ring1Ref.current.rotation.y = time * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.45;
      ring2Ref.current.rotation.z = time * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = -time * 0.5;
      ring3Ref.current.rotation.z = -time * 0.25;
    }
  });

  return (
    <group ref={groupRef} scale={baseScale}>
      {/* Primary Cyber Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, isMobile ? 32 : 64, isMobile ? 32 : 64]} />
        <MeshDistortMaterial
          color={isMobile ? "#0c0418" : "#16082b"}
          emissive="#6b21a8"
          emissiveIntensity={isMobile ? 0.6 : 0.85}
          roughness={0.15}
          metalness={0.9}
          distort={isMobile ? 0.22 : 0.35}
          speed={1.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Holographic Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.18, isMobile ? 2 : 3]} />
        <meshBasicMaterial
          color="#c084fc"
          wireframe
          transparent
          opacity={isMobile ? 0.28 : 0.32}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.42, 0.014, 16, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#c084fc"
          emissiveIntensity={1.3}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.6, 0.011, 16, 64]} />
        <meshStandardMaterial
          color="#e879f9"
          emissive="#a855f7"
          emissiveIntensity={1.0}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Gyroscopic Ring 3 */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1.76, 0.009, 16, 64]} />
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
// 2. Swirling Floating Particle Vortex (Continuous Motion)
// ==========================================
function FloatingParticles({ count = 800, isMobile, scrollProgress, touchRef }) {
  const pointsRef = useRef();
  const materialRef = useRef();

  const [positions, colors] = useMemo(() => {
    const actualCount = isMobile ? Math.min(count, 320) : count;
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
      const radius = THREE.MathUtils.randFloat(2.5, 9.5);
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
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;

    if (pointsRef.current) {
      // Continuous organic vortex motion
      pointsRef.current.rotation.y += delta * (0.12 + scroll * 0.8);
      pointsRef.current.rotation.x = Math.sin(time * 0.6) * 0.15;
      pointsRef.current.position.y = Math.cos(time * 0.8) * 0.15;

      // Parallax with touch / mouse
      const inputX = (state.pointer.x || touchRef.current.x) * 0.3;
      const inputY = (state.pointer.y || touchRef.current.y) * 0.3;
      pointsRef.current.position.x = THREE.MathUtils.lerp(
        pointsRef.current.position.x,
        inputX,
        0.05
      );

      // Disperse and expand on scroll
      const spread = 1 + scroll * 1.3;
      pointsRef.current.scale.set(spread, spread, spread);
    }

    if (materialRef.current) {
      materialRef.current.opacity = Math.max(0.15, 0.85 - scroll * 0.8);
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
// 3. Camera Rig with Scroll & Motion Control
// ==========================================
function CameraController({ isMobile, scrollProgress, touchRef }) {
  const { camera } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const inputX = (state.pointer.x || touchRef.current.x) * 0.3;
    const inputY = (state.pointer.y || touchRef.current.y) * 0.3;
    const scroll = scrollProgress.current;

    // Organic breathing movement
    const floatY = Math.sin(time * 0.8) * 0.08;

    const baseZ = isMobile ? 6.6 : 6.2;
    const targetZ = baseZ + scroll * 3.8;
    const targetY = -scroll * 1.5 + inputY * 0.4 + floatY;
    const targetX = inputX * 0.5;

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
  const touchRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Track touch interactions on mobile so 3D scene moves on finger swipe
    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        touchRef.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
        touchRef.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });

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
      scrub: 0.6,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('touchmove', handleTouchMove);
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
        camera={{ position: [0, 0, isMobile ? 6.6 : 6.2], fov: isMobile ? 48 : 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#e9d5ff" />
        <pointLight position={[-6, -4, 2]} intensity={2.4} color="#7e22ce" />
        <pointLight position={[6, 4, 3]} intensity={3.4} color="#c084fc" />
        <pointLight position={[0, -5, -4]} intensity={1.8} color="#9333ea" />

        <CameraController isMobile={isMobile} scrollProgress={scrollProgress} touchRef={touchRef} />

        <Float speed={2.0} rotationIntensity={0.8} floatIntensity={1.0}>
          <CyberSphere isMobile={isMobile} scrollProgress={scrollProgress} touchRef={touchRef} />
        </Float>

        <FloatingParticles
          count={isMobile ? 320 : 800}
          isMobile={isMobile}
          scrollProgress={scrollProgress}
          touchRef={touchRef}
        />
      </Canvas>
    </div>
  );
}
