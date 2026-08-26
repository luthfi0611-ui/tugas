import React from 'react'

function Pratktik2() {
    const [nama, setNama] = React.useState("ali");
  return (
    <> 
     {/* ketika button di clik mengubah nama ali menjadi fulan */}

    <div>{nama}</div> 
    <button onClick={() => setNama("fulan")}>
      change name
    </button>
    </>
  )
}

export default Pratktik2



