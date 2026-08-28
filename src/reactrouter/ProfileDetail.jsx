import React from 'react'
import { useParams } from 'react-router'

const santri = {
    1: "ahmad",
    2: "barra",
    3: "NBA",
}

function ProfileDetail() {
    const {id} = useParams();

    
  return (
    <div>
      <h1>ProfileDetail</h1>
      <p>id: {id}</p>
      
    </div>
  )
}

export default ProfileDetail
