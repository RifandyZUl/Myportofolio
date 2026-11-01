// src/data/projects.tsx

export interface Project {
  id: number;
  number: string;
  title: string;
  subtitle?: string;
  category: 'ai' | 'software' | 'both';
  categoryLabel: string;
  badge: string;
  metrics?: string;
  description: string;
  techstack: string[];
  tags?: string[];
  imageSrc: string;
  link: string;
  demoLink?: string;
  githubLink?: string;
  size?: 'large' | 'medium';
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Optimisasi CKD-TransBTS untuk Segmentasi Tumor Otak 3D',
    subtitle: 'Proyek Skripsi • Penelitian Deep Learning & Computer Vision',
    category: 'ai',
    categoryLabel: 'AI Engineering & Research',
    badge: 'Skripsi Research • Submitted IJCCS Sinta 2',
    metrics: '79x Parameter Reduction • 86x Faster Inference',
    description:
      'Modifikasi arsitektur hybrid CNN-Transformer CKD-TransBTS (basis U-Net, flattened encoder, eliminasi windowed attention) dengan optimasi hyperparameter Taguchi L9 orthogonal array. Mereduksi parameter dari 82.28M menjadi 1.04M (79x lebih ringkas) dan mempercepat inferensi 86x dengan Dice score hanya selisih 1.6% dibanding model rujukan. Evaluasi 6-region & 3-region BraTS.',
    techstack: [
      '/techstack/python.svg',
      '/techstack/pytorch.svg',
    ],
    tags: ['PyTorch', 'CNN-Transformer', 'Taguchi L9', 'BraTS 2021', 'Medical 3D'],
    imageSrc: '/proj/tumor_otak.jpg',
    link: 'https://github.com/RifandyZUl/Efficient-CKD-TransBTS',
    githubLink: 'https://github.com/RifandyZUl/Efficient-CKD-TransBTS',
    size: 'large',
  },
  {
    id: 2,
    number: '02',
    title: 'BrainScan AI — Platform Medical Web & Segmentasi 3D MRI',
    subtitle: 'Proyek Mandiri • Medical AI Web Platform End-to-End',
    category: 'both',
    categoryLabel: 'AI + Software Engineering',
    badge: 'Production Medical Platform • VPS Deployed',
    metrics: 'End-to-End Clinical Web • Dockerized Architecture',
    description:
      'Platform web medis end-to-end untuk rekam medis pasien dan segmentasi tumor otak 3D MRI (.nii.gz). Dashboard responsif Flutter Web + GetX bertema korporat medis, backend FastAPI + PostgreSQL 15 + SQLAlchemy ORM, autentikasi multi-role JWT (Admin, Dokter, Radiolog), Algoritma Dynamic Slice Selection otomatis, dan deployment VPS Hostinger via Docker Compose & Nginx.',
    techstack: [
      '/techstack/fastapi.svg',
      '/techstack/flutter.svg',
      '/techstack/python.svg',
      '/techstack/postgresql.svg',
      '/techstack/docker.svg',
    ],
    tags: ['FastAPI', 'Flutter Web', 'PostgreSQL', 'Docker', 'JWT Auth'],
    imageSrc: '/proj/brainscan_laptop_mockup.png',
    link: 'https://github.com/RifandyZUl/BrainScanAI',
    githubLink: 'https://github.com/RifandyZUl/BrainScanAI',
    size: 'large',
  },
  {
    id: 3,
    number: '03',
    title: 'RAG Fact-Checking System',
    subtitle: 'Proyek Mandiri • Retrieval-Augmented Generation & Generative AI',
    category: 'both',
    categoryLabel: 'AI Engineering & GenAI / RAG',
    badge: 'Hugging Face Spaces • ZeroGPU & 600+ Tests',
    metrics: 'ChromaDB HNSW • BAAI/bge-m3 • Gemini API • Wilson Score',
    description:
      'Sistem verifikasi klaim dan pesan hoaks berbahasa Indonesia berbasis Retrieval-Augmented Generation (RAG) dengan pencarian semantik arsip TurnBackHoax.id dan penalaran Google Gemini LLM. Mengintegrasikan ChromaDB (persistent HNSW indexing), embedding BAAI/bge-m3, UI Streamlit & Gradio, web scraping TurnBackHoax, serta 600+ pengujian unit Pytest di Hugging Face Spaces.',
    techstack: [
      '/techstack/python.svg',
      '/techstack/gemini.svg',
      '/techstack/streamlit.svg',
      '/techstack/huggingface.svg',
    ],
    tags: ['Gemini API', 'ChromaDB', 'BAAI/bge-m3', 'Streamlit', 'Pytest'],
    imageSrc: '/proj/RAG-FactChecking.png',
    link: 'https://github.com/RifandyZUl/RAG_FactChecking',
    githubLink: 'https://github.com/RifandyZUl/RAG_FactChecking',
    demoLink: 'https://ipan23-rag-factchecking.hf.space',
    size: 'large',
  },
  {
    id: 4,
    number: '04',
    title: 'E-Commerce Toko Usaha Anda',
    subtitle: 'Aplikasi Toko Online • Full Stack E-Commerce Platform',
    category: 'software',
    categoryLabel: 'Software Engineering & Full Stack',
    badge: 'Production E-Commerce • Midtrans & RajaOngkir',
    metrics: 'Dynamic Variant Matrix • Cross-Tab Zustand • Instant Midtrans',
    description:
      'Aplikasi web toko online pelanggan dengan matriks varian produk dinamis (stok, harga, dan berat realtime), sinkronisasi keranjang belanja lintas tab via Zustand, checkout adaptif berbasis kodepos, serta pembayaran instan (QRIS, VA Bank, E-Wallet) via Midtrans.',
    techstack: [
      '/techstack/react.svg',
      '/techstack/vite.svg',
      '/techstack/tailwind.svg',
      '/techstack/nodejs.svg',
      '/techstack/express.svg',
      '/techstack/postgresql.svg',
      '/techstack/prisma.svg',
      '/techstack/supabase.svg',
    ],
    tags: [
      'React 18',
      'Vite',
      'Zustand',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Midtrans Snap',
      'RajaOngkir API',
      'Supabase Storage',
    ],
    imageSrc: '/proj/TokoUsahaAnda.jpg',
    link: 'https://github.com/RifandyZUl/Toko-Usaha-Anda',
    githubLink: 'https://github.com/RifandyZUl/Toko-Usaha-Anda',
    demoLink: 'https://toko-usaha-anda-qkaq.vercel.app/shop',
    size: 'large',
  },
  {
    id: 5,
    number: '05',
    title: 'Landing Page Toko Usaha Anda',
    subtitle: 'Proyek Promosi • Modern Scandinavian Brand Landing Page',
    category: 'software',
    categoryLabel: 'Software Engineering & Modern Web',
    badge: 'Modern Scandinavian • High Engagement',
    metrics: 'Dynamic Hero • Direct Catalog Deep-Link • Inquiry DB',
    description:
      'Landing page promosi modern dengan estetika minimalis scandinavian. Mengutamakan user engagement tinggi melalui hero section dinamis, grid produk terlaris, deep-link langsung ke katalog toko, formulir inquiry pelanggan terintegrasi database, serta peta lokasi interaktif yang responsif di seluruh perangkat.',
    techstack: [
      '/techstack/react.svg',
      '/techstack/vite.svg',
      '/techstack/tailwind.svg',
      '/techstack/nodejs.svg',
      '/techstack/express.svg',
      '/techstack/postgresql.svg',
      '/techstack/prisma.svg',
    ],
    tags: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Zustand',
      'Lucide React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
    ],
    imageSrc: '/proj/LandingPageTokoUSahaAnda.jpg',
    link: 'https://github.com/RifandyZUl/Toko-Usaha-Anda',
    githubLink: 'https://github.com/RifandyZUl/Toko-Usaha-Anda',
    demoLink: 'https://landing-page-toko-usaha-anda.vercel.app/',
    size: 'large',
  },
  {
    id: 6,
    number: '06',
    title: 'Optimisasi Konfigurasi RSU2-Net Berbasis Attention via Taguchi',
    subtitle: 'Proyek Mandiri • Deep Learning & Hyperparameter Tuning',
    category: 'ai',
    categoryLabel: 'AI Engineering & Deep Learning',
    badge: 'Experimental Research • BraTS 2023',
    metrics: 'Dice 0.7665 • Mean IoU 0.6895 • Specificity >0.99',
    description:
      'Merancang eksperimen Taguchi L16 orthogonal array untuk menentukan kombinasi optimal LR, optimizer (Adamax), dan mekanisme attention (CBAM vs Feature Attention) pada arsitektur RSU2-Net untuk segmentasi tumor 3D BraTS 2023. Mencapai Dice 0.7665 dan mean IoU 0.6895 pada full dataset dengan spesifisitas >0.99 di seluruh kelas tumor (Edema, ET, NET).',
    techstack: [
      '/techstack/python.svg',
      '/techstack/pytorch.svg',
    ],
    tags: ['PyTorch', 'RSU2-Net', 'Attention CBAM', 'Taguchi L16'],
    imageSrc: '/proj/RSU2net.png',
    link: 'https://github.com/RifandyZUl/rsu2net-attention-brats2023',
    githubLink: 'https://github.com/RifandyZUl/rsu2net-attention-brats2023',
    size: 'medium',
  },
  {
    id: 7,
    number: '07',
    title: 'Web-Based News Portal & Content Management System',
    subtitle: 'PT Winnicode Garuda Teknologi • Full Stack Developer Intern',
    category: 'software',
    categoryLabel: 'Software Engineering & Full Stack',
    badge: 'Industry Internship • Full Stack CMS',
    metrics: 'PostgreSQL Relational DB • Jest & Supertest Suite',
    description:
      'Mengembangkan sistem portal berita berbasis React.js (frontend) dan Node.js/Express.js (backend). Mendesain database PostgreSQL (Sequelize ORM), autentikasi admin JWT + bcrypt, integrasi upload Cloudinary, fitur pencarian berita, filter kategori, pagination, serta pengujian white-box (Jest + Supertest) dan black-box (Postman).',
    techstack: [
      '/techstack/react.svg',
      '/techstack/javascript.svg',
      '/techstack/postgresql.svg',
      '/techstack/css.svg',
    ],
    tags: ['React.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'Jest'],
    imageSrc: '/proj/winniC.jpeg',
    link: 'https://github.com/RifandyZUl/PortalBerita',
    githubLink: 'https://github.com/RifandyZUl/PortalBerita',
    demoLink: 'https://winnicode-berita.vercel.app/',
    size: 'medium',
  },
];