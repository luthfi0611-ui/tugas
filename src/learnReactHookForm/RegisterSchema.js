import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, "Nama siswa harus diisi"),

    email: z
      .string()
      .trim()
      .min(1, "Email harus diisi")
      .email("Format email tidak valid"),

    penjurusan: z.string().min(1, "Program harus dipilih"),

    penjurusanLainnya: z.string().optional(),

    jenisKelamin: z
      .string()
      .min(1, "Jenis kelamin harus dipilih")
      .refine(
        (value) => ["laki-laki", "perempuan"].includes(value),
        "Jenis kelamin tidak valid",
      ),

    ekstrakulikuler: z
      .array(z.string())
      .min(1, "Pilih minimal satu ekstrakurikuler")
      .refine(
        (items) =>
          items.every((item) => ["Voli", "Panahan", "Berkuda"].includes(item)),
        "Pilihan ekstrakurikuler tidak valid",
      ),

    umur: z.preprocess(
      (value) =>
        value === "" || value === undefined || Number.isNaN(value)
          ? undefined
          : Number(value),
      z
        .number({ error: "Umur harus diisi dengan angka" })
        .min(12, "Umur minimal 12 tahun")
        .max(30, "Umur maksimal 30 tahun"),
    ),

    persetujuan: z
      .boolean()
      .refine((value) => value, "Persetujuan harus dicentang"),
  })
  .superRefine((data, ctx) => {
    if (!["Tahfidz", "IT", "Diniyyah", "lainnya"].includes(data.penjurusan)) {
      ctx.addIssue({
        code: "custom",
        path: ["penjurusan"],
        message: "Program tidak valid",
      });
    }

    if (data.penjurusan === "lainnya" && !data.penjurusanLainnya?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["penjurusanLainnya"],
        message: "Harap sebutkan program lainnya",
      });
    }
  });
