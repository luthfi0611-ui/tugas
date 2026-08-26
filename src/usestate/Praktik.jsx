import React from 'react'

function Praktik() {
    const [angka, setAngka] = React.useState(0);

    function tambah() {
        console.log(angka + 1);
        setAngka(angka + 1);// mengupdate angka
    }
  return (
   <div>
    <h1>nilai : {angka}</h1>
   <button onClick={tambah}>
    +
    </button>


    <br/>

    <button onClick={() => setAngka(angka + 3)}>
    + tambah 3
    </button>

    <br/>

    <button onClick={() => setAngka(angka + 2)}>
    + tambah 2
    </button>

    

     <br/>

    <button onClick={() => setAngka(angka - 1)}>
    - 
    </button>

    <br/>

    <button onClick={() => setAngka(0)}>
    reset
    </button>

    


   </div>
     
  )
}

export default Praktik



