import React from "react";
import { useForm } from "react-hook-form";

function DashboarUser() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "fulan",
      email: "fulan@gmail.com",
      penjurusan: "Tahfidz",
      penjurusanLainnya: "",
      jenisKelamin: "laki-laki",
      ekstrakulikuler: ["Voli", "Panahan", "Berkuda"],
      umur: 12,
      persetujuan: true,
    },
  });

  function onSubmit(data) {
    console.log("Data Terkirim:", data);
  }

  // Pantau field 'penjurusan'
  const selectedPenjurusan = watch("penjurusan");

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center py-10 px-4 font-sans text-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        {/* Header Card khas Google Form */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden border-t-8 border-t-purple-700 p-6">
          <h1 className="text-3xl font-normal text-gray-900">
            Formulir Pendaftaran Siswa
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Isi data diri Anda dengan benar dan lengkap.
          </p>
          <hr className="my-4 border-gray-200" />
          <p className="text-xs text-red-600 font-medium">* Menunjukkan pertanyaan yang wajib diisi</p>
        </div>

        {/* Card Nama */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Nama Siswa <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name", {
              required: "Nama siswa harus diisi",
              minLength: { value: 3, message: "Nama minimal 3 karakter" },
              maxLength: { value: 50, message: "Nama maksimal 50 karakter" },
            })}
            type="text"
            placeholder="Jawaban Anda"
            className="w-full md:w-2/3 border-b border-gray-300 py-1.5 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent"
          />
          {errors.name && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.name.message}
            </p>
          )}
        </div>

        {/* Card Email */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Email Siswa <span className="text-red-600">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email harus diisi",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Format email tidak valid",
              },
            })}
            type="email"
            placeholder="Jawaban Anda"
            className="w-full md:w-2/3 border-b border-gray-300 py-1.5 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent"
          />
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.email.message}
            </p>
          )}
        </div>

        {/* Card Umur */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Umur <span className="text-red-600">*</span>
          </label>
          <input
            {...register("umur", {
              valueAsNumber: true,
              required: "Umur harus diisi",
              min: { value: 12, message: "Umur minimal 12 tahun" },
              max: { value: 30, message: "Umur maksimal 30 tahun" },
            })}
            type="number"
            placeholder="Jawaban Anda"
            className="w-full md:w-1/3 border-b border-gray-300 py-1.5 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent"
          />
          {errors.umur && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.umur.message}
            </p>
          )}
        </div>

        {/* Card Program / Penjurusan */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Program <span className="text-red-600">*</span>
          </label>
          <select
            {...register("penjurusan", { required: "Program harus dipilih" })}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:border-purple-700 outline-none text-sm bg-white"
          >
            <option value="">Pilih Program</option>
            <option value="Tahfidz">Tahfidz</option>
            <option value="IT">IT</option>
            <option value="Diniyyah">Diniyyah</option>
            <option value="lainnya">Lainnya...</option>
          </select>
          {errors.penjurusan && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.penjurusan.message}
            </p>
          )}

          {/* Input Kondisional jika opsi 'lainnya' dipilih */}
          {selectedPenjurusan === "lainnya" && (
            <div className="mt-2 flex flex-col gap-1">
              <input
                {...register("penjurusanLainnya", {
                  required:
                    selectedPenjurusan === "lainnya"
                      ? "Harap sebutkan program lainnya"
                      : false,
                })}
                type="text"
                placeholder="Sebutkan program lainnya"
                className="w-full md:w-2/3 border-b border-gray-300 py-1.5 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent"
              />
              {errors.penjurusanLainnya && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  ⚠ {errors.penjurusanLainnya.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Card Jenis Kelamin */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Jenis Kelamin <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col gap-2 mt-1">
            {["laki-laki", "perempuan"].map((gender) => (
              <label
                key={gender}
                className="flex items-center gap-3 cursor-pointer py-1"
              >
                <input
                  {...register("jenisKelamin", {
                    required: "Jenis kelamin harus dipilih",
                  })}
                  type="radio"
                  value={gender}
                  className="w-4 h-4 accent-purple-700 cursor-pointer"
                />
                <span className="text-sm text-gray-800 capitalize">
                  {gender === "laki-laki" ? "Laki-laki" : "Perempuan"}
                </span>
              </label>
            ))}
          </div>
          {errors.jenisKelamin && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.jenisKelamin.message}
            </p>
          )}
        </div>

        {/* Card Ekstrakulikuler */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base font-normal text-gray-900">
            Ekstrakulikuler <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col gap-3 mt-1">
            {[
              { id: "Voli", desc: "Kegiatan olahraga bola voli." },
              {
                id: "Panahan",
                desc: "Kegiatan melatih fokus, ketepatan, dan keterampilan memanah.",
              },
              {
                id: "Berkuda",
                desc: "Kegiatan melatih keterampilan berkuda, keseimbangan, dan kontrol.",
              },
            ].map((ekstra) => (
              <label
                key={ekstra.id}
                className="flex items-start gap-3 cursor-pointer"
              >
                <input
                  {...register("ekstrakulikuler", {
                    required: "Ekstrakulikuler harus dipilih",
                  })}
                  type="checkbox"
                  value={ekstra.id}
                  className="w-4 h-4 mt-0.5 accent-purple-700 cursor-pointer rounded"
                />
                <div>
                  <span className="text-sm font-medium text-gray-800">
                    {ekstra.id}
                  </span>
                  <p className="text-xs text-gray-500">{ekstra.desc}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.ekstrakulikuler && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.ekstrakulikuler.message}
            </p>
          )}
        </div>

        {/* Card Persetujuan */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              {...register("persetujuan", {
                required: "Persetujuan harus dipilih",
              })}
              type="checkbox"
              className="w-4 h-4 accent-purple-700 cursor-pointer rounded"
            />
            <span className="text-sm text-gray-800">
              Saya menyetujui persyaratan yang berlaku{" "}
              <span className="text-red-600">*</span>
            </span>
          </label>
          {errors.persetujuan && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              ⚠ {errors.persetujuan.message}
            </p>
          )}
        </div>

        {/* Footer & Submit Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <button
            type="submit"
            disabled={!isValid}
            className={`px-6 py-2.5 rounded font-medium text-sm transition-all duration-200 ${
              isValid
                ? "bg-purple-700 text-white hover:bg-purple-800 shadow-md cursor-pointer opacity-100"
                : "bg-purple-700 text-white opacity-20 cursor-not-allowed"
            }`}
          >
            Kirim
          </button>

          {/* Indikator Validasi */}
          <div className="text-xs font-medium">
            {isValid ? (
              <span className="text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200">
                ✓ Formulir terisi lengkap
              </span>
            ) : (
              <span className="text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
                ! Harap lengkapi semua bidang wajib
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default DashboarUser;