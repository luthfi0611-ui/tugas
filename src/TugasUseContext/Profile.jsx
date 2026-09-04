import {useContext} from 'react'
import NameUserContext from '../NameUserContext'

function Profile() {
  const {nama} = useContext(NameUserContext)

  return (
    <>
     <div className="bg-white shadow-md rounded-xl p-5">
        <h1 className="text-xl font-bold text-gray-800">
          Selamat datang, {nama}
        </h1>
      </div>
    </>
  )
}
export default Profile