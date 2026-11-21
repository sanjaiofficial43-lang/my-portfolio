/**
 * PORTFOLIO DATA CONFIGURATION
 * All data is structured cleanly for easy personal customization.
 * Placeholders are maintained according to instructions without invented claims.
 */

export const PERSONAL_INFO = {
  name: "Sanjay",
  displayTag: "AI AUTOMATION & AGENTIC AI DEVELOPER",
  roleHeadline: "BUILDING THE FUTURE WITH AI AUTOMATION & AGENTIC AI.",
  subtitle: "Agentic AI | AI Automation | Web Developer | Creative Technologist",
  bioShort: "Pioneering the intersection of AI automation, autonomous agentic systems, and interactive 3D digital realities.",
  status: "OPEN TO COLLABORATION & INQUIRIES",
  location: "GLOBAL // DIGITAL REALM",
  email: "sanjay.dev@intelligence.build",
  linkedin: "https://linkedin.com/in/sanjay-ai",
  github: "https://github.com/sanjay-ai",
  xTwitter: "https://x.com/sanjay_ai",
};

export const ABOUT_DATA = {
  heading: "Beyond Code. Building Intelligence.",
  subheading: "// 01. PHILOSOPHY & ARCHITECTURE",
  paragraphs: [
    "I believe software is transitioning from static deterministic tools into living, intelligent cognitive partners. My mission is to engineer high-velocity systems at the convergence of autonomous AI and immersive web interfaces.",
    "Rather than treating AI as an external API or web design as a decorative skin, I synthesize neural reasoning architectures directly with fluid, reactive digital canvases—delivering experiences that feel effortless, intuitive, and deeply powerful.",
  ],
  pillars: [
    {
      id: "ai-systems",
      title: "Artificial Intelligence",
      description: "Designing neural architectures, agentic task orchestration, retrieval-augmented intelligence, and contextual reasoning pipelines.",
      tag: "CORE FOCUS",
      metric: "99.8%",
      metricLabel: "Pipeline Precision",
    },
    {
      id: "web-engineering",
      title: "Next-Gen Web Architecture",
      description: "Building resilient distributed systems, sub-second latency web apps, reactive interfaces, and scalable full-stack applications.",
      tag: "FULL-STACK",
      metric: "<15ms",
      metricLabel: "Perceived Latency",
    },
    {
      id: "creative-3d",
      title: "Interactive 3D & Shaders",
      description: "Pushing browser frontiers using Three.js, WebGL, custom GLSL shaders, and physics-driven micro-interactions.",
      tag: "EXPERIENCE",
      metric: "60 FPS",
      metricLabel: "Target Render Rate",
    },
    {
      id: "methodology",
      title: "First-Principles Engineering",
      description: "Deconstructing complex problems down to fundamental truths, eliminating bloated abstraction, and prioritizing user agency.",
      tag: "PHILOSOPHY",
      metric: "100%",
      metricLabel: "Deterministic Clarity",
    },
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    iconName: "Cpu",
    description: "Architectures, neural workflows, and cognitive automation systems.",
    skills: [
      { name: "Large Language Models", level: "Specialized", detail: "Orchestration, Prompt Engineering & Function Calling" },
      { name: "Agentic Workflows", level: "Specialized", detail: "Autonomous Multi-Agent Loops & Tool Execution" },
      { name: "RAG Pipelines", level: "Proficient", detail: "Vector Search, Hybrid Embeddings & Context Windows" },
      { name: "Neural Networks", level: "Foundational", detail: "Deep Learning Foundations, Transformers & Attention" },
      { name: "Model Evaluation", level: "Proficient", detail: "Benchmarking, Hallucination Mitigation & Alignment" },
      { name: "Local Inference", level: "Proficient", detail: "Quantized Local LLM Deployment & Edge Execution" },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    iconName: "Globe",
    description: "Modern full-stack platforms, reactive runtimes, and scalable APIs.",
    skills: [
      { name: "React Ecosystem", level: "Specialized", detail: "Server Components, Hooks, State Engines & Concurrent Mode" },
      { name: "Next.js & SSR", level: "Specialized", detail: "Hybrid Rendering, Edge Middleware & Route Handlers" },
      { name: "TypeScript", level: "Specialized", detail: "Strict Typing, Generics & Domain Modeling" },
      { name: "Modern Node.js / Bun", level: "Proficient", detail: "High-Throughput Asynchronous Backend Services" },
      { name: "REST & GraphQL", level: "Proficient", detail: "Type-Safe Schema Design & Realtime Streaming" },
      { name: "State & Data Cache", level: "Proficient", detail: "Zustand, TanStack Query & Optimistic UI" },
    ],
  },
  {
    id: "automation",
    name: "AI Automation",
    iconName: "Bot",
    description: "Autonomous task pipelines, vector storage, and workflow engines.",
    skills: [
      { name: "Workflow Orchestration", level: "Specialized", detail: "Event-driven AI pipeline triggers and fallback loops" },
      { name: "Vector Databases", level: "Proficient", detail: "Pinecone, ChromaDB, Weaviate & Qdrant" },
      { name: "API Synthesis", level: "Proficient", detail: "Inter-service integrations & autonomous web hooks" },
      { name: "Data Extraction", level: "Proficient", detail: "Structured JSON schema output extraction from LLMs" },
      { name: "Automated QA & Evals", level: "Proficient", detail: "Continuous prompt testing and regression assertions" },
    ],
  },
  {
    id: "creative",
    name: "Creative Development",
    iconName: "Sparkles",
    description: "3D graphics, procedural visuals, and cinematic motion design.",
    skills: [
      { name: "Three.js & R3F", level: "Specialized", detail: "Scene Graphs, Lighting, Materials & React Three Fiber" },
      { name: "GSAP & ScrollTrigger", level: "Specialized", detail: "Scroll-Driven Timelines & Kinetic Choreography" },
      { name: "Shader Development (GLSL)", level: "Proficient", detail: "Vertex Displacement, Noise & Fragment Shaders" },
      { name: "Physics & Particles", level: "Proficient", detail: "Instanced Meshes, BufferGeometries & Particle Fields" },
      { name: "Spatial UX & Micro-interactions", level: "Specialized", detail: "Responsive 3D Viewports & Smooth Physics" },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: "neural-canvas-3d",
    title: "NeuroMesh 3D Engine",
    subtitle: "Real-time AI Procedural Geometry & Shader Lab",
    description: "A futuristic browser-based 3D workspace where users generate, morph, and visualize procedural 3D topologies driven by natural language prompts and real-time GPU shaders.",
    tags: ["Three.js", "React Three Fiber", "GLSL Shaders", "Web Audio", "Vite"],
    imageType: "cyber-sphere",
    metrics: "Sub-16ms GPU Draw",
    demoUrl: "#",
    githubUrl: "https://github.com/sanjay-ai/neuromesh-3d",
    featured: true,
  },
  {
    id: "agent-matrix-core",
    title: "AgentMatrix Orchestrator",
    subtitle: "Autonomous Multi-Agent Cognitive Platform",
    description: "An orchestration dashboard for autonomous AI agents collaborating on complex engineering tasks with dynamic tool synthesis, memory recall, and live timeline visualization.",
    tags: ["React", "TypeScript", "Node.js", "Vector DB", "Tailwind CSS"],
    imageType: "network-graph",
    metrics: "Multi-Agent Protocol",
    demoUrl: "#",
    githubUrl: "https://github.com/sanjay-ai/agent-matrix-core",
    featured: true,
  },
  {
    id: "synapse-stream",
    title: "SynapseStream AI",
    subtitle: "Low-Latency Multimodal Reasoning Interface",
    description: "A streaming conversational intelligence workstation supporting instant audio-to-text token projection, live Markdown execution, and speculative reasoning trees.",
    tags: ["React", "WebSocket", "WebRTC", "LLM Streaming", "Lenis"],
    imageType: "waveform-pulse",
    metrics: "<80ms First Token",
    demoUrl: "#",
    githubUrl: "https://github.com/sanjay-ai/synapse-stream",
    featured: true,
  },
  {
    id: "quantum-viewport",
    title: "QuantumVibe Visualizer",
    subtitle: "Spatial Audio & Reactive WebGL Particles",
    description: "An immersive audio-visual canvas converting acoustic frequency spectra into multi-layered 3D particle nebulas with chromatic aberration and camera physics.",
    tags: ["Three.js", "Web Audio API", "GSAP ScrollTrigger", "GLSL", "React"],
    imageType: "quantum-particle",
    metrics: "10,000+ Instanced Points",
    demoUrl: "#",
    githubUrl: "https://github.com/sanjay-ai/quantum-viewport",
    featured: true,
  },
];

export const JOURNEY_TIMELINE = [
  {
    phase: "PHASE 01",
    title: "Foundations of Modern Web & Interactive Systems",
    focus: "Modern Web Foundations",
    description: "Began with modern web engineering, reactive user interfaces, and component architectures. Developed deep fluency in web standards, clean code principles, and responsive design systems.",
    milestones: [
      "Building responsive and scalable state-driven UI applications",
      "Mastering modern JavaScript and component-driven architecture",
      "Crafting high-performance web interfaces",
    ],
  },
  {
    phase: "PHASE 02",
    title: "The Creative Dimension: 3D & WebGL",
    focus: "Visual Computing & Kinetic Web",
    description: "Expanded beyond flat 2D interfaces into spatial web computing. Experimented with Three.js, React Three Fiber, GLSL fragment shaders, and GSAP scroll choreography to create cinematic web experiences.",
    milestones: [
      "Mastering WebGL scene graphs, cameras, and procedural materials",
      "Scroll-driven storytelling with GSAP ScrollTrigger & Lenis",
      "Hardware-accelerated performance profiling and 60fps optimization",
    ],
  },
  {
    phase: "PHASE 03",
    title: "The Neural Pivot: Generative AI & LLMs",
    focus: "Cognitive Intelligence Systems",
    description: "Immersed in modern Artificial Intelligence. Explored transformer architectures, contextual embeddings, retrieval-augmented generation (RAG), and prompt engineering paradigms.",
    milestones: [
      "Integrating state-of-the-art LLMs into real-time web workflows",
      "Vector database indexing and semantic hybrid search",
      "Designing resilient fallback loops and prompt governance",
    ],
  },
  {
    phase: "PHASE 04",
    title: "Autonomous Agents & Full-Stack Intelligence",
    focus: "Convergence of AI & Immersive Web",
    description: "Synthesized autonomous multi-agent task execution with high-performance 3D frontends. Focused on building self-directing pipelines that automate engineering and data synthesis workflows.",
    milestones: [
      "Architecting tool-using autonomous agent loops",
      "Low-latency streaming interfaces and speculative decoding UX",
      "Building production-ready AI applications with resilient error handling",
    ],
  },
  {
    phase: "PHASE 05",
    title: "The Next Horizon: Multimodal & Spatial Intelligence",
    focus: "Continuous Evolution",
    description: "Currently researching and crafting the next paradigm: continuous multimodal perception, edge-computed neural models, and spatial 3D user interfaces that evolve with user intent.",
    milestones: [
      "Real-time voice and vision agent integrations",
      "Spatial computing and browser-based WebGPU graphics",
      "Pushing the frontiers of human-machine symbiosis",
    ],
  },
];
