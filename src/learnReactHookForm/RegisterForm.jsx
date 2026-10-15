import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./RegisterSchema";

function RegisterForm() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      penjurusan: "",
      penjurusanLainnya: "",
      jenisKelamin: "",
      ekstrakulikuler: [],
      umur: "",
      persetujuan: false,
    },
  });

  const selectedPenjurusan = watch("penjurusan");

  async function onSubmit(data) {
    console.log("Data Terkirim:", data);
    alert("Formulir berhasil dikirim!");
    reset();
  }

  const inputClass =
    "w-full md:w-2/3 border-b border-gray-300 py-2 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent";

  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center py-10 px-4 font-sans text-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden border-t-8 border-t-purple-700 p-6">
          <h1 className="text-3xl font-normal text-gray-900">
            Formulir Pendaftaran Siswa
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Isi data diri Anda dengan benar dan lengkap.
          </p>
          <hr className="my-4 border-gray-200" />
          <p className="text-xs text-red-600 font-medium">
            * Menunjukkan pertanyaan yang wajib diisi
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Nama Siswa <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="Jawaban Anda"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Email Siswa <span className="text-red-600">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Jawaban Anda"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Umur <span className="text-red-600">*</span>
          </label>
          <input
            {...register("umur")}
            type="number"
            min="12"
            max="30"
            placeholder="Masukkan umur"
            className="w-full md:w-1/3 border-b border-gray-300 py-2 focus:border-purple-700 focus:border-b-2 outline-none transition-all text-sm bg-transparent"
          />
          {errors.umur && <p className={errorClass}>{errors.umur.message}</p>}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Program <span className="text-red-600">*</span>
          </label>
          <select
            {...register("penjurusan")}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:border-purple-700 outline-none text-sm bg-white"
          >
            <option value="">Pilih Program</option>
            <option value="Tahfidz">Tahfidz</option>
            <option value="IT">IT</option>
            <option value="Diniyyah">Diniyyah</option>
            <option value="lainnya">Lainnya...</option>
          </select>
          {errors.penjurusan && (
            <p className={errorClass}>{errors.penjurusan.message}</p>
          )}

          {selectedPenjurusan === "lainnya" && (
            <div className="mt-2 flex flex-col gap-1">
              <input
                {...register("penjurusanLainnya")}
                placeholder="Sebutkan program lainnya"
                className={inputClass}
              />
              {errors.penjurusanLainnya && (
                <p className={errorClass}>{errors.penjurusanLainnya.message}</p>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Jenis Kelamin <span className="text-red-600">*</span>
          </label>
          {[
            { value: "laki-laki", label: "Laki-laki" },
            { value: "perempuan", label: "Perempuan" },
          ].map((gender) => (
            <label
              key={gender.value}
              className="flex items-center gap-3 cursor-pointer py-1"
            >
              <input
                {...register("jenisKelamin")}
                type="radio"
                value={gender.value}
                className="w-4 h-4 accent-purple-700"
              />
              <span className="text-sm">{gender.label}</span>
            </label>
          ))}
          {errors.jenisKelamin && (
            <p className={errorClass}>{errors.jenisKelamin.message}</p>
          )}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
          <label className="text-base text-gray-900">
            Ekstrakurikuler <span className="text-red-600">*</span>
          </label>
          {[
            { id: "Voli", desc: "Kegiatan olahraga bola voli." },
            {
              id: "Panahan",
              desc: "Melatih fokus dan ketepatan.",
            },
            {
              id: "Berkuda",
              desc: "Melatih keseimbangan dan keterampilan berkuda.",
            },
          ].map((ekstra) => (
            <label
              key={ekstra.id}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                {...register("ekstrakulikuler")}
                type="checkbox"
                value={ekstra.id}
                className="w-4 h-4 mt-0.5 accent-purple-700"
              />
              <div>
                <span className="text-sm font-medium">{ekstra.id}</span>
                <p className="text-xs text-gray-500">{ekstra.desc}</p>
              </div>
            </label>
          ))}
          {errors.ekstrakulikuler && (
            <p className={errorClass}>{errors.ekstrakulikuler.message}</p>
          )}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              {...register("persetujuan")}
              type="checkbox"
              className="w-4 h-4 accent-purple-700"
            />
            <span className="text-sm">
              Saya menyetujui persyaratan yang berlaku{" "}
              <span className="text-red-600">*</span>
            </span>
          </label>
          {errors.persetujuan && (
            <p className={errorClass}>{errors.persetujuan.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`px-6 py-2.5 rounded font-medium text-sm transition-all ${
              isValid && !isSubmitting
                ? "bg-purple-700 text-white hover:bg-purple-800 shadow-md"
                : "bg-purple-700 text-white opacity-30 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="text-sm text-purple-700 underline"
          >
            Kosongkan formulir
          </button>

          <div className="text-xs font-medium">
            {isValid ? (
              <span className="text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full">
                ✓ Formulir terisi lengkap
              </span>
            ) : (
              <span className="text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full">
                ! Harap lengkapi semua bidang wajib
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
