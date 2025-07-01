"# EventKampus" 
# Event Kampus Tirta Persada
Aplikasi web sederhana untuk menampilkan daftar event kampus, saya buat menggunakan React.js.
#📂 Struktur Folder:
EventKampus/
├── .vscode/
│   └── launch.json
│
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   ├── logo-removebg-preview (saya buat logo nya dengan bantuan chatgpt lalu saya remove backgroundnya)
│   │   │   └── pexels-irenelasus-88517 (image yang saya dapat dari sebuah website)
│   │   │ 
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── EventCard.js
│   │   │   ├── EventCard.css
│   │   │   ├── EventList.js
│   │   │   └── EventList.css
│   │   ├── data.js (file baru yang saya buat)
│   │   ├── data.json (file baru yang saya buat)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md  ← untuk repositori utama (opsional)


## 🚀 Cara Menjalankan Proyek

1. Masuk ke terminal lalu buat folder frontend kemudian install node.js,npm
    ```bash
    - install node.js di http://nodejs.org, kemudian klik LTS (Long-Term Support) untuk stabilitas terbaik
    - klik dan jalankan installer
    - klik “Next” terus sampai “Install”
    - setelah selesai, buka Command Prompt dan cek:
        - node -v jika jadi maka akan muncul v22.16.0
        - npm -v jika jadi maka akan muncul 10.9.2

2. **Masuk ke folder frontend**  
   Buka terminal dan jalankan:
   ```bash
   cd frontend atau bisa dengan cd C:/EventKampus/frontend
   - git status (optional)
   - git add .          # masukkan semua perubahan ke staging area
   - git commit -m "feat: menambahkan komponen EventCard"
   - git push origin main           # kirim ke GitHub
   - npm start

3. 🛠️ Teknologi yang Digunakan
    *React.js
    *HTML + CSS
    *File statis JSON / komponen dinamis

4. 📷 Fitur Utama
    *Menampilkan daftar event kampus
    *Fitur pencarian event
    *Tampilan background custom
    *Logo kampus dan desain modern

   


