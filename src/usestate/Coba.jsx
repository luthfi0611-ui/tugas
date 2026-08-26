import {useEffect, useState} from 'react'


function Coba() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log('nunggu 3 detik')
        }, 3000);

        return () => {
            clearTimeout();
        }
    }, [count]);

    return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Coba
