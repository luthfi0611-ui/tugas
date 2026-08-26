import React from 'react'
import { useState } from 'react'

function MenyimpanData() {
  const [angka, setAngka] = useState(0);

  function tambah() {
    console.log(angka + 1);
    setAngka(angka + 1);// mengupdate angka
    
  }
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>Angka : {angka}</h1>
      <button onClick={tambah}>Tambah</button>
    </div>
  )
}

export default MenyimpanData
