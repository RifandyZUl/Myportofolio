<div align="center">

# 🌐 Zul Tiandra Rifandy — Personal Portfolio Website
### AI Engineer & Software Engineer

[![Next.js](https://img.shields.io/badge/Next.js-15.5.25-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0+-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  Website portofolio interaktif dan modern yang menampilkan kapabilitas teknis, riset medis berbasis kecerdasan buatan (*AI/Deep Learning*), serta rekayasa sistem perangkat lunak berskala produksi (*Software Engineering*).
</p>

[Demo Langsung](https://github.com/RifandyZUl/Myportofolio) • [Lihat / Unduh CV](public/cv/CV_Zul_Tiandra_Rifandy.pdf) • [Hubungi Saya](https://mail.google.com/mail/?view=cm&fs=1&to=rzultiandra@gmail.com)

</div>

---

## Daftar Isi
1. [Tentang Portofolio](#-tentang-portofolio)
2. [Fitur Utama](#-fitur-utama)
3. [Teknologi & Tools](#-teknologi--tools)
4. [Proyek Unggulan](#-proyek-unggulan)
5. [Struktur Direktori](#-struktur-direktori)
6. [Panduan Menjalankan Project (Local Setup)](#-panduan-menjalankan-project-local-setup)
7. [Kontak & Kolaborasi](#-kontak--kolaborasi)

---

## Tentang Portofolio

Website ini dirancang secara khusus untuk merepresentasikan keahlian multidisiplin **Zul Tiandra Rifandy**:
* **Artificial Intelligence & Computer Vision**: Riset mendalam pada segmentasi citra medis 3D MRI (*BraTS 2020*), arsitektur hibrida *CNN-Transformer* (seperti *CKD-TransBTS* dan *RSU2-Net*), optimasi *hyperparameter* melalui metode *Taguchi Design of Experiment (DOE)*, hingga reduksi parameter dan akselerasi inferensi model untuk penerapan klinis.
* **Full Stack Software Engineering**: Pengembangan sistem backend terdistribusi berlatensi rendah menggunakan FastAPI dan Express.js, basis data relasional PostgreSQL dengan ORM (SQLAlchemy & Sequelize), autentikasi keamanan berbasis *Role-Based Access Control (RBAC)* dengan JWT & bcrypt, hingga arsitektur container Docker Compose dan Nginx reverse proxy.
* **Modern Web Experience**: Estetika antarmuka monokrom minimalis yang responsif, performa interaktif tinggi, animasi *smooth* dengan Framer Motion & React Bits, serta alur kontak profesional terintegrasi.

---

## Fitur Utama

- **Interactive Hero & TrueFocus Animations**: Animasi teks fokus dinamis yang mempertegas spesialisasi di bidang *AI-Engineer* dan *Software-Engineer*.
- **Integrated CV Access**: Tombol *Lihat CV Lengkap (PDF)* dan *Unduh File* pada section About Me serta Floating Dock yang terhubung langsung ke file resume PDF.
- **Categorized Projects Showcase**: Tampilan kartu proyek interaktif dengan mockup fotorealistik, ringkasan arsitektur teknis, serta tag kategori (*AI & Deep Learning* dan *Software Engineering*).
- **Skills & Frameworks Logo Grid**: Grid logo teknologi modern tanpa teks berlebih, mencakup ekosistem Python, PyTorch, FastAPI, Node.js, PostgreSQL, Docker, TypeScript, React, dan Next.js.
- **Pre-filled Professional Gmail Inquiry**: Integrasi link Gmail cerdas yang otomatis mengisi subjek dan draf pesan profesional untuk mempermudah rekruter atau klien mengirim penawaran kerja sama.
- **Responsive Sticky Dock**: Navigasi pintas melayang di sudut kanan bawah dengan akses cepat ke GitHub, LinkedIn, Gmail, dan CV.

---

## 🛠️ Teknologi & Tools

| Kategori | Teknologi |
|---|---|
| **Frontend Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling & UI** | Tailwind CSS, Lucide React, Custom SVG Icons, Gilroy Typography |
| **Animasi & Efek** | Framer Motion, React Bits (BlurText, TrueFocus, CircularText, Squares, Threads) |
| **AI / Machine Learning** | Python, PyTorch, MONAI, Taguchi DOE, OpenCV, Scikit-learn, CNN-Transformer |
| **Backend & Database** | Node.js, Express.js, FastAPI, PostgreSQL, SQLAlchemy, Sequelize |
| **DevOps & Testing** | Docker Compose, Nginx, Git & GitHub, Jest, Supertest |

---

## 🚀 Proyek Unggulan

Beberapa proyek dan riset teknis yang ditonjolkan pada portofolio:

1. **Optimisasi CKD-TransBTS untuk Segmentasi Tumor Otak 3D (BraTS)**
   * *Spesialisasi*: AI Engineering & Computer Vision (Skripsi / Riset Manuskrip Sinta 2 IJCCS UGM).
   * *Highlight*: Reduksi parameter model hingga **79×** lebih ringkas dan inferensi **86×** lebih cepat dengan mempertahankan kualitas segmentasi medis.
2. **BrainScan AI — Platform Medical Web & Segmentasi 3D MRI**
   * *Spesialisasi*: AI + Software Architecture.
   * *Highlight*: Platform klinis *end-to-end* berbasis Docker yang memproses volume tensor 3D MRI untuk deteksi dan visualisasi tumor secara interaktif.
3. **Optimisasi Konfigurasi RSU2-Net Berbasis Attention via Taguchi (L16)**
   * *Spesialisasi*: AI Engineering & Experimental Design.
   * *Highlight*: Peningkatan metrik *Dice Similarity Coefficient* ke **0.7665** dan *Mean IoU* ke **0.6895** pada irisan otak multimodal.
4. **Web-Based News Portal & Content Management System**
   * *Spesialisasi*: Full Stack Software Engineering (PT Winnicode Garuda Teknologi).
   * *Highlight*: Backend relasional PostgreSQL dengan validasi pengujian otomatis (*white-box & black-box*) via Jest & Supertest.

---

## 📁 Struktur Direktori

```text
├── public/
│   ├── cv/              # Berkas dokumen Curriculum Vitae (PDF)
│   ├── exp_logos/       # Logo instansi pendidikan & industri
│   ├── icons/           # Ikon SVG vektor (GitHub, LinkedIn, Gmail, CV)
│   ├── logo/            # Aset logo identitas website
│   ├── photos/          # Foto profil profesional
│   ├── proj/            # Mockup dan aset visual proyek unggulan
│   └── techstack/       # Logo resmi stack teknologi & tools
├── src/
│   ├── app/
│   │   ├── Contact/     # Halaman kontak & formulir pesan
│   │   ├── globals.css  # Konfigurasi Tailwind dan styling global
│   │   ├── layout.tsx   # Root layout, GooeyNav navbar, & floating dock
│   │   └── page.tsx     # Homepage (Hero, About, Skills, Projects, Experience)
│   ├── blocks/          # Komponen UI animasi visual (React Bits)
│   ├── components/      # Komponen modular (ProjectCard, ProfileCard, Timeline)
│   └── data/            # Data terpusat (daftar proyek, riwayat pengalaman)
├── next.config.ts       # Konfigurasi Next.js (optimasi SVG, modul compiler)
├── tailwind.config.js   # Konfigurasi tema dan utilitas Tailwind
└── tsconfig.json        # Konfigurasi TypeScript compiler
```

---

## 💻 Panduan Menjalankan Project (Local Setup)

Ikuti langkah-langkah berikut untuk menjalankan portofolio ini di lingkungan lokal Anda:

### 1. Prasyarat
Pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (versi 18.18.0 atau lebih baru)
* [npm](https://www.npmjs.com/) atau `yarn` / `pnpm`
* [Git](https://git-scm.com/)

### 2. Kloning Repositori
```bash
git clone https://github.com/RifandyZUl/Myportofolio.git
cd Myportofolio
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Menjalankan Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya secara langsung.

### 5. Melakukan Build Produksi
```bash
npm run build
npm run start
```

---

## 📬 Kontak & Kolaborasi

Saya terbuka untuk peluang karier, proyek kolaborasi, maupun riset di bidang **Artificial Intelligence** dan **Software Engineering**:

* **Email**: [rzultiandra@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=rzultiandra@gmail.com&su=Peluang%20Kolaborasi%20%2F%20Kerja%20Sama%20-%20Zul%20Tiandra%20Rifandy&body=Halo%20Zul%2C%0A%0ASaya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda%2C%20serta%20ingin%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20kerja%20sama%20atau%20proyek.%0A%0A-%20Perusahaan%20%2F%20Klien%3A%20%0A-%20Topik%20%2F%20Posisi%3A%20%0A-%20Pesan%3A%20%0A%0ATerima%20kasih%2C%0A)
* **LinkedIn**: [linkedin.com/in/zul-tiandra-rifandy](https://www.linkedin.com/in/zul-tiandra-rifandy/)
* **GitHub**: [github.com/RifandyZUl](https://github.com/RifandyZUl)
* **Lokasi**: Tangerang, Indonesia

---

<div align="center">
  <sub>Didesain dan dikembangkan dengan dedikasi oleh <b>Zul Tiandra Rifandy</b> © 2026.</sub>
</div>
