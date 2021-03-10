import { IOffice } from 'data/offices';

export default function Card({ office }: { office: IOffice }) {
  // TODO:
  return (
    <>
      <li className='px-2 pt-1 pb-3 mt-2 text-gray-500 border-2 border-gray-300 rounded-md'>
        <div className='flex justify-between pb-1 border-b border-gray-300'>
          <h2 className='font-semibold text-gray-600'>{office.name}</h2>
          <svg
            className='w-6 h-6 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={4}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
        <div className='px-1'>
          <div className='py-1'>
            <h3 className='text-sm font-semibold text-gray-600'>Location:</h3>
            <h6 className='w-5/6 text-xs tracking-tight'>Lat - {office.lat}</h6>
            <h6 className='text-xs'>Lng - {office.lng}</h6>
          </div>
          <div className='py-1'>
            <h3 className='text-sm font-semibold text-gray-600'>
              Office Start Date:
            </h3>
            <h6 className='text-xs'>{office.startDate}</h6>
          </div>
        </div>
      </li>
    </>
  );
}
