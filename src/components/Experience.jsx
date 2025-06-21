// File: src/components/Experience.jsx

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block pb-1 mb-6">
          Experience
        </h2>

        <div className="space-y-10">
          {/* PT. IDE SOLUSI INTEGRASI */}
          <div>
            <h3 className="text-xl font-semibold">
              <i>IT Helpdesk</i> – PT. IDE Solusi Integrasi
            </h3>
            <p className="text-sm text-gray-400">Sep 2023 – Apr 2024</p>
            <p className="mt-2">
              Bertugas sebagai <i>IT Helpdesk</i> yang menangani berbagai proyek
              penting, seperti migrasi data PC/Laptop di PT. Takenaka,
              mendampingi pelaksanaan <i>corrective maintenance</i> jaringan
              fiber optic di PUSLITBANG Polri dari pihak penyedia, serta
              memberikan dukungan layanan ICT Helpdesk di PT. Bonecom Tricom dan
              PT. Toyota Boshoku Indonesia. Juga terlibat dalam implementasi
              aplikasi web dan penyusunan dokumen <i>UAT Form</i> untuk
              mendukung proses pengujian aplikasi.
            </p>
          </div>

          {/* PT. ASKRINDO */}
          <div>
            <h3 className="text-xl font-semibold">
              <i>Internsip</i> – Divisi Transformasi, PT. Askrindo
            </h3>
            <p className="text-sm text-gray-400">Nov 2023 – Jan 2024</p>
            <p className="mt-2">
              Selama masa magang, berkontribusi dalam proses pembuatan UAT Form,
              melakukan pengujian bug dan error pada website perusahaan, serta
              menyusun laporan hasil pengujian sebagai bagian dari proses
              perbaikan sistem digital di PT. Askrindo.
            </p>
          </div>

          {/* FREELANCE FRONT-END */}
          <div>
            <h3 className="text-xl font-semibold">
              <i>Freelance</i> Front-End Developer
            </h3>
            <p className="text-sm text-gray-400">Okt 2021 – Des 2021</p>
            <p className="mt-2">
              Membuat desain UI & UX sesuai kebutuhan klien serta mengembangkan
              sisi <i>front-end</i> dari website yang diminta.
            </p>
          </div>

          {/* FREELANCE IT SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold">Freelance IT Support</h3>
            <p className="text-sm text-gray-400">Agu 2017 – Sekarang</p>
            <p className="mt-2">
              Melakukan perakitan dan instalasi komputer, serta perawatan (
              <i>maintenance</i>) perangkat lunak dan keras pada PC/laptop.
            </p>
          </div>

          {/* PT. POS INDONESIA */}
          <div>
            <h3 className="text-xl font-semibold">
              Pekerja Harian Lepas – <i>Auditor</i>, PT. POS Indonesia
            </h3>
            <p className="text-sm text-gray-400">Okt 2024 – Jan 2025</p>
            <p className="mt-2">
              Membuat data pendataan menggunakan <i>Google Sheets</i>, melakukan
              pemeriksaan terhadap data stunting, CBP (Bansos Bantuan Pangan),
              dan AML (Bantuan Sosial Alat Memasak Listrik), serta mendampingi
              dan membuat laporan kepada penyedia AML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
