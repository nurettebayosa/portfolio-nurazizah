# Nur Azizah — Portfolio Website

Website portofolio pribadi dengan desain dark futuristic blue light contrast.

---

## 📁 Struktur File

```
portfolio/
├── index.html       ← Halaman utama
├── style.css        ← Semua styling
├── script.js        ← Animasi & interaksi
├── images/          ← Folder untuk gambar proyek (kosong, isi sendiri)
│   ├── absensi-1.jpg
│   ├── absensi-2.jpg
│   ├── absensi-3.jpg
│   ├── sitpa-1.jpg
│   ├── sitpa-2.jpg
│   ├── sitpa-3.jpg
│   ├── nutrilog-1.jpg
│   ├── nutrilog-2.jpg
│   └── iot-1.jpg
└── CV-NurAzizah.pdf ← Letakkan CV di sini agar tombol Download CV berfungsi
```

---

## 🖼️ Cara Menambahkan Gambar Project

1. Buat folder `images/` di dalam folder portfolio
2. Masukkan gambar ke folder tersebut
3. Di `index.html`, cari baris yang ada komentar `<!-- <img src="images/...` 
4. Uncomment dan hapus blok `<div class="carousel-placeholder">` yang ada di bawahnya
5. Contoh sebelum:
   ```html
   <!-- <img src="images/absensi-1.jpg" alt="Dashboard Absensi" /> -->
   <div class="carousel-placeholder">...</div>
   ```
6. Contoh sesudah:
   ```html
   <img src="images/absensi-1.jpg" alt="Dashboard Absensi" />
   ```

---

## 🚀 Deploy ke Vercel

### Cara 1 — Drag & Drop (paling mudah)
1. Buka [vercel.com](https://vercel.com) → Login
2. Klik **Add New → Project**
3. Klik **"Deploy from template"** atau upload folder langsung
4. Atau: drag folder `portfolio/` ke area deploy Vercel

### Cara 2 — Via GitHub
1. Push folder ini ke GitHub repo baru
2. Buka [vercel.com](https://vercel.com) → Import Git Repository
3. Pilih repo → klik Deploy
4. Vercel otomatis detect static site

### Cara 3 — Netlify (alternatif)
1. Buka [netlify.com](https://netlify.com) → Login
2. Drag & drop folder `portfolio/` ke dashboard Netlify
3. Selesai! URL langsung tersedia

---

## ✏️ Kustomisasi

### Ganti Info Kontak
Cari di `index.html` dan edit:
- `nurazizah.college@gmail.com`
- `(+62) 881-0236-10333`
- `linkedin.com/in/nurazizah-304356248`

### Tambah/Ganti Warna Aksen
Di `style.css`, cari bagian `:root` dan ubah:
```css
--accent: #0ea5e9;        /* Biru utama */
--accent-2: #22d3ee;      /* Cyan */
```

### Ganti Font
Di `index.html`, ganti link Google Fonts.
Di `style.css`, ganti `--font-display`, `--font-heading`, `--font-body`.

---

## ✅ Fitur

- [x] Dark futuristic design dengan blue light contrast
- [x] Animated particle canvas background
- [x] Typewriter effect untuk subtitle hero
- [x] Sticky navbar dengan active section detection
- [x] Scroll reveal animations
- [x] Image carousel untuk setiap project (siap tambah gambar)
- [x] Project filter (All / Automation / Web / Academic)
- [x] Timeline organisasi & pengalaman
- [x] Publication card dengan link jurnal
- [x] Achievement badges
- [x] Responsive (Desktop, Tablet, Mobile)
- [x] Download CV button
- [x] Back to top button
- [x] Zero dependencies — pure HTML/CSS/JS

---

Made with ♥ by Nur Azizah — Politeknik Negeri Subang
