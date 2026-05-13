// All portfolio data

export const SKILLS = [
  {
    category: "Analysis and Design",
    skills: ["Power Designer", "Star UML", "Draw.io", "System Requirements Mapping"],
    iconName: "Layout" as const,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Data and Analytics",
    skills: ["Power BI", "SPSS 25", "Microsoft Excel VBA", "Macros"],
    iconName: "Database" as const,
    color: "from-cyan-500/20 to-teal-500/20"
  },
  {
    category: "Tools",
    skills: ["MySQL", "phpMyAdmin", "XAMPP", "VS Code", "Microsoft Office"],
    iconName: "ShieldCheck" as const,
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    category: "Programming Basic",
    skills: ["PHP", "HTML", "CSS", "JavaScript"],
    iconName: "Code" as const,
    color: "from-sky-500/20 to-blue-500/20"
  }
];

export const PROJECTS = [
  {
    id: "absensi-digital",
    title: "Absensi Digital SDN Sukajaya Dawuan Kidul",
    subtitle: "Berbasis QR Code dan Otomatisasi VBA",
    role: "Programmer and Data Automation",
    description: "Sistem absensi modern yang mengubah proses manual menjadi digital. Menggunakan QR Code untuk identifikasi cepat dan integrasi VBA Excel untuk rekap data otomatis, secara signifikan mengurangi human error dan waktu pemrosesan.",
    highlights: [
      "Absensi berbasis QR Code",
      "Otomatisasi rekap data dengan VBA",
      "Efisiensi pencatatan harian",
      "Pengurangan proses manual hingga 80%"
    ],
    tags: ["VBA", "Excel", "QR Code", "Automation"],
    images: [
      "/images/absensi/3-Dashboard.jpg",
      "/images/absensi/1-Login.jpg",
      "/images/absensi/2-Register.jpg",
      "/images/absensi/4-TabelDataSiswa.jpg",
      "/images/absensi/5-TambahDataSiswa.jpg",
      "/images/absensi/6-EditDataSiswa.jpg",
      "/images/absensi/7-DataWaliKelas.jpg",
      "/images/absensi/8-TambahDataWaliKelas.jpg",
      "/images/absensi/9-EditDataWaliKelas.jpg",
      "/images/absensi/10-DataUser.jpg",
      "/images/absensi/11-RekapAbsensiKelas(SatuSekolah).jpg",
      "/images/absensi/12-CetakRekapAbsensi(SatuSekolah).jpg",
      "/images/absensi/13-RekapAbsensi(SatuKelas).jpg",
      "/images/absensi/14-CetakRekapAbsensi(SatuKelas).jpg",
      "/images/absensi/15-ImporDataAbsensi.jpg"
    ],
    type: "Automation",
    links: [
      { label: "Lihat Project", url: "https://drive.google.com/drive/folders/1MgZRQLnqoRt37cZtY_au8Oy_6NZqo6W3?usp=sharing" }
    ]
  },
  {
    id: "sitpa",
    title: "SITPA - Sistem Informasi Terpadu Perlindungan Anak",
    subtitle: "KPAD Kabupaten Subang",
    role: "System Logic and Developer",
    description: "Platform manajemen kasus perlindungan anak yang mensentralisasi data pelaporan, verifikasi, dan monitoring. Proyek ini juga telah dipublikasikan dalam jurnal ilmiah sebagai inovasi digital untuk pelayanan publik.",
    highlights: [
      "Alur pelaporan terverifikasi",
      "Monitoring kasus real-time",
      "Dashboard analitik data kasus",
      "Mendukung pengambilan keputusan berbasis data"
    ],
    links: [
      { label: "Baca Jurnal", url: "https://ejournal.imbima.org/index.php/expertnet/article/view/643" },
      { label: "DOI Link", url: "https://doi.org/10.59923/expertnet.v2i2.643" }
    ],
    tags: ["System Logic", "Web Dev", "Research", "Public Service"],
    images: [
      "/images/sitpa/1-Dashboard.png"
    ],
    type: "Web"
  },
  {
    id: "nutri-log",
    title: "Nutri-Log",
    subtitle: "IoT Monitoring & Otomasi Nutrisi Pakcoy — PT. Prodaya Anugerah Selaras",
    role: "System Analyst & Programmer",
    description: "Sistem monitoring nutrisi berbasis IoT untuk otomasi pemberian nutrisi pada tanaman pakcoy. Dilengkapi dashboard interaktif, sensor real-time, dan pencatatan data konsumsi harian.",
    highlights: [
      "Monitoring nutrisi harian terstruktur",
      "Dashboard visualisasi data interaktif",
      "Sistem login multi-user",
      "Kontrol pompa & sensor IoT real-time"
    ],
    github: "https://github.com/nurettebayosa/nutri-log",
    demoAccount: "Demo: owner@prodayaanugerahselaras.id / password123",
    tags: ["IoT", "Web", "Monitoring", "Automation"],
    images: [
      "/images/nutri-log/4-Dashboard(1).png",
      "/images/nutri-log/4-Dashboard(2).png",
      "/images/nutri-log/4-Dashboard(3).png",
      "/images/nutri-log/1-SplashScreen.png",
      "/images/nutri-log/2-Login.png",
      "/images/nutri-log/3-PermintaanAkses.png",
      "/images/nutri-log/5-RiwayatSensor(1).png",
      "/images/nutri-log/6-RiwayatSensor(2).png",
      "/images/nutri-log/7-Laporan(1).png",
      "/images/nutri-log/8-Laporan(2).png",
      "/images/nutri-log/9-Laporan(3).png",
      "/images/nutri-log/10-CetakPDF(1).png",
      "/images/nutri-log/11-CetakPDF(2).png",
      "/images/nutri-log/12-CetakPDF(3).png",
      "/images/nutri-log/13-CetakPDF(4).png",
      "/images/nutri-log/14-ManajemenBlok.png",
      "/images/nutri-log/15-DetailBlok.png",
      "/images/nutri-log/16-JadwalFertigasi.png",
      "/images/nutri-log/17-KalenderPertumbuhan.png",
      "/images/nutri-log/18-KontrolPompa.png",
      "/images/nutri-log/19-MaintenanceJournal.png",
      "/images/nutri-log/20-Notifikasi&Alert.png",
      "/images/nutri-log/21-TresholdSensor.png",
      "/images/nutri-log/22-Tampilan.png"
    ],
    type: "Web"
  }
];

export const PUBLICATIONS = [
  {
    title: "Inovasi Digital untuk Pelayanan Perlindungan Anak di Kabupaten Subang melalui Sistem Informasi Terpadu",
    journal: "EXPERTNET: Exploration Journal of Technological Education Trends",
    year: "2025",
    description: "Penelitian ini membahas tentang perancangan dan implementasi SITPA untuk meningkatkan efisiensi penanganan kasus anak di KPAD Subang.",
    link: "https://ejournal.imbima.org/index.php/expertnet/article/view/643"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Juara Ide Inovatif",
    org: "Bootcamp Technopreneurship JTIK Politeknik Negeri Subang",
    year: "2024",
    category: "Technopreneurship",
    medal: "gold" as const
  },
  {
    title: "Juara 1 Kelas F Putri",
    org: "Kategori Tanding Tingkat SLTP Walikota Banjar Cup V",
    year: "",
    category: "Tarung Bela Diri",
    medal: "gold" as const
  },
  {
    title: "Juara 3 Solospel Putri",
    org: "Tingkat SLTP Walikota Banjar Cup V",
    year: "",
    category: "Seni Bela Diri",
    medal: "bronze" as const
  },
  {
    title: "Juara 3 Kelas E Putri",
    org: "Kategori Tanding Tingkat SLTP Jawara Banjar Patroman Championship",
    year: "",
    category: "Tarung Bela Diri",
    medal: "bronze" as const
  }
];

export const EXPERIENCES = [
  {
    title: "Mentor PKKMB 2025",
    role: "Mentor Kelompok 10 — Bhavana",
    period: "2025",
    description: "Mentor PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) Jurusan Teknologi Informasi dan Komputer Politeknik Negeri Subang.",
    type: "mentoring" as const
  },
  {
    title: "Mentor MABIM HIMATIKOM 2025",
    role: "Mentor Kelompok 8 — DevOps",
    period: "2025",
    description: "Mentor MABIM (Masa Bimbingan) HIMATIKOM POLSUB Jurusan Teknologi Informasi dan Komputer Politeknik Negeri Subang.",
    type: "mentoring" as const
  },
  {
    title: "HIMATIKOM Politeknik Negeri Subang",
    role: "Sekretaris Departemen Riset dan Teknologi",
    period: "2024 - 2025",
    description: "Mengelola administrasi departemen dan mendukung kegiatan penelitian serta pengembangan teknologi mahasiswa.",
    type: "organization" as const
  },
  {
    title: "SMAN 1 Banjar",
    role: "Sekretaris Komisi B",
    period: "2023 - 2024",
    description: "Menyusun dokumentasi rapat dan mengoordinasikan alur kerja organisasi internal.",
    type: "organization" as const
  },
  {
    title: "ESMA (Entrepreneurship Smansaban)",
    role: "Anggota Ekstrakurikuler",
    period: "2023 - 2024",
    description: "Aktif dalam kegiatan kewirausahaan dan pengembangan ide bisnis inovatif di lingkungan sekolah.",
    type: "extracurricular" as const
  },
  {
    title: "Seni Kriya",
    role: "Anggota Ekstrakurikuler",
    period: "2023 - 2024",
    description: "Mengembangkan kreativitas melalui kegiatan seni kriya dan kerajinan tangan.",
    type: "extracurricular" as const
  },
  {
    title: "SMAN 1 Banjar",
    role: "Sekretaris Komisi C",
    period: "2022 - 2023",
    description: "Bertanggung jawab atas pengarsipan data dan korespondensi organisasi.",
    type: "organization" as const
  }
];
