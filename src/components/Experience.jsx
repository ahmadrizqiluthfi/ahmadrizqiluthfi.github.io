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
          {/* FREELANCE IT SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold">
              IT Support (<i>Freelance</i>)
            </h3>
            <p className="text-sm text-gray-400">Agu 2017 – Sekarang</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Perakitan, instalasi, dan pemeliharaan komputer (<i>hardware</i>{" "}
                & <i>software</i>)
              </li>
            </ul>
          </div>

          {/* PT. POS INDONESIA */}
          <div>
            <h3 className="text-xl font-semibold">
              Admin Verifikasi Data Program Bantuan Sosial – PT. POS Indonesia
            </h3>
            <p className="text-sm text-gray-400">Okt 2024 – Jan 2025</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Melakukan pemeriksaan dan verifikasi data program bantuan
                sosial: Stunting, CBP (Cadangan Beras Pemerintah), dan AML (Alat
                Memasak Listrik)
              </li>
              <li>
                Menyusun laporan dan mengelola data menggunakan{" "}
                <i>Google Sheets</i>
              </li>
              <li>
                Mendampingi penyedia AML dalam proses verifikasi data serta
                pembuatan laporan pelaksanaan
              </li>
            </ul>
          </div>

          {/* PT. IDE SOLUSI INTEGRASI */}
          <div>
            <h3 className="text-xl font-semibold">
              IT Helpdesk – PT. IDE Solusi Integrasi
            </h3>
            <p className="text-sm text-gray-400">Sep 2023 – Apr 2024</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Migrasi data perangkat di PT. Takenaka</li>
              <li>
                Mendampingi penyedia layanan saat proses{" "}
                <i>corrective maintenance</i> fiber optic di Puslitbang Polri
              </li>
              <li>
                ICT Helpdesk di PT. Bonecom Tricom & PT. Toyota Boshoku
                Indonesia
              </li>
              <li>Implementasi web application dan dokumen UAT Form</li>
            </ul>
          </div>

          {/* PT. ASKRINDO */}
          <div>
            <h3 className="text-xl font-semibold">
              <i>Internsip</i> – Divisi Transformasi, PT. Askrindo
            </h3>
            <p className="text-sm text-gray-400">Nov 2023 – Jan 2024</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Penyusunan UAT Form</li>
              <li>Pengujian sistem dan dokumentasi bug/error</li>
            </ul>
          </div>

          {/* FREELANCE FRONT-END */}
          <div>
            <h3 className="text-xl font-semibold">
              <i>Freelance</i> Front-End Developer
            </h3>
            <p className="text-sm text-gray-400">Okt 2021 – Des 2021</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Merancang UI/UX dan mengembangkan web responsif (<i>HTML</i>,{" "}
                <i>CSS</i>, <i>Bootstrap</i>, <i>PHP</i>)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
