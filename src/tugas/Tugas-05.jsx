import React, { useRef, useState } from "react";

function Tugas05() {
  const inputRef = useRef(null);
  const [nama, setNama] = useState("");

  const tampilkanNama = () => {
    setNama(inputRef.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-xl font-semibold mb-4">
          Tugas useRef dan useState
        </h1>

        <input
          ref={inputRef}
          type="text"
          placeholder="Masukkan nama"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={tampilkanNama}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Tampilkan Nama
        </button>

        <h2 className="mt-4 text-gray-700">
          Nama: {nama}
        </h2>
      </div>
    </div>
  );
}

export default Tugas05;