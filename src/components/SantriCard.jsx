import { Link } from 'react-router';

function SantriCard({ id, name, classroom }) {
  return (
    <Link
      to={`/santri/list/${id}`}
      className='border p-3 rounded-md flex flex-col cursor-pointer'>
      <h1 className='text-xs font-semibold'>{name}</h1>
      <p className='text-[10px]'>Kelas {classroom}</p>
    </Link>
  );
}

export default SantriCard;
