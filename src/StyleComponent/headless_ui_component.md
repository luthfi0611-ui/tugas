# Headless UI Component & Radix UI

Dalam pengembangan antarmuka pengguna (UI), memilih pustaka komponen yang tepat sangat memengaruhi kecepatan kerja dan fleksibilitas desain. Pustaka konvensional seperti Bootstrap, Bulma, atau Ant Design membantu mempercepat proses karena kita tidak perlu membuat komponen dari awal. Namun, pustaka dengan desain bawaan ini memicu dilema tersendiri.

## Dilema Pustaka Komponen UI Konvensional

* **Kelebihan**: Sangat mempermudah pembuatan produk jika kita tidak mementingkan keunikan desain.
* **Kekurangan**: Mengkustomisasi desain bawaan agar sesuai dengan desain unik rancangan sendiri sering kali memakan waktu lebih lama daripada membuatnya dari awal. Kita harus mempelajari desain bawaannya, memahami cara kustomisasinya, baru kemudian menulis kode kustomisasi.
* **Masalah Tanpa Pustaka**: Membuat komponen dari awal memang memberikan kebebasan penuh, namun implementasi interaktivitasnya sangat memakan waktu.

**Radix UI** hadir sebagai solusi di tengah dilema ini. Radix menyediakan koleksi komponen interaktif tanpa gaya visual (*unstyled*) untuk React, sehingga memangkas waktu pengerjaan logika interaksi tanpa membatasi kreativitas desain.

---

## Apa itu Radix UI?

**Radix UI Primitives** adalah kumpulan komponen UI untuk React yang menyediakan perilaku (*behavior*) dan interaksi komponen, tetapi tidak memaksakan desain visual tertentu.

### Koleksi Komponen Utama
* Dropdown Menu
* Dialog / Modal
* Popover
* Tooltip
* Accordion
* Tabs
* Select
* Checkbox
* Radio Group
* Toast
* Context Menu

### Pembagian Peran: Radix vs Tailwind CSS

Secara sederhana, pembuatan komponen seperti *Dropdown* dibagi menjadi dua peran utama:

| Fitur / Fitur Interaksi (Radix UI) | Tampilan / Visual (Tailwind CSS) |
| :--- | :--- |
| Membuka & menutup dropdown | Warna & Font |
| Navigasi keyboard (Panah Atas/Bawah, Enter, Escape) | Padding & Border |
| Aksesibilitas & Atribut ARIA | Shadow & Rounded corners |
| Manajemen fokus (*Focus management*) & Event handling | Animasi |

> **Konsep Paling Penting:**  
> **Radix** = Perilaku (*Behavior*) + Aksesibilitas (*Accessibility*)  
> **Tailwind** = Penataan Gaya (*Styling*)

---

## Perbedaan Radix Themes vs Radix Primitives

Radix menawarkan dua pendekatan berbeda sesuai dengan kebutuhan proyek Anda:

### 1. Radix Themes (Dengan Desain Bawaan)
Pendekatan ini cocok jika Anda menginginkan komponen yang siap pakai dan sudah memiliki tampilan visual bawaan.

* **Rumus**: `Behavior` + `Accessibility` + `Styling` = Komponen siap digunakan.
* **Instalasi**:
  ```bash
  npm install @radix-ui/themes
  ```
* **Contoh Penggunaan**:
  ```jsx
  import { DropdownMenu, Button, Theme } from "@radix-ui/themes";
  import "@radix-ui/themes/styles.css";

  export default function App() {
    return (
      <Theme>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">Options</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Theme>
    );
  }
  ```

### 2. Radix Primitives (Tanpa Desain / Headless)
Pendekatan ini memberikan Anda "mesin" komponennya saja, sedangkan desain visualnya 100% dibebaskan kepada Anda (kompatibel dengan solusi *styling* apa pun seperti Tailwind CSS).

* **Rumus**: `Behavior` + `Accessibility` = Komponen unstyled.
* **Instalasi**:
  ```bash
  npm install @radix-ui/primitives
  ```
* **Contoh Penggunaan dengan Tailwind CSS**:
  ```jsx
  import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

  export default function CustomDropdown() {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="bg-blue-500 text-white px-4 py-2 rounded">
          Account
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="rounded-lg bg-white p-2 shadow-lg border mt-2">
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer rounded">
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer rounded">
            Settings
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  }
  ```
