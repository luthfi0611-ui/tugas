import React from 'react'

function Dasar() {
  const [angka, setAngka] = React.useState(0);

  function tambah() {
    setAngka(angka + 1);
    console.log(angka + 1);
  }

  return (
    <div>
      <button onClick={tambah}>Tambah</button>
    </div>
  )
}

export default Dasar
