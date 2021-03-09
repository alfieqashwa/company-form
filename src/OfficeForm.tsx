export default function OfficeForm() {
  return (
    <div className='pl-8'>
      <h1 className='text-2xl text-gray-600'>Create Office</h1>
      <div className='p-2 space-y-2'>
        <div>
          <label htmlFor='Name' className='block'>
            Name:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='officeName'
            placeholder='name'
          />
        </div>
        <div>
          <label htmlFor='Location' className='block'>
            Location:
          </label>
          <div className='flex space-x-4'>
            <input
              className='w-1/2 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
              type='number'
              name='latitude'
              placeholder='latitude'
            />
            <input
              className='w-1/2 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
              type='number'
              name='longitude'
              placeholder='longitude'
            />
          </div>
        </div>
        <div>
          <label htmlFor='Office Start Date' className='block'>
            Office Start Date:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='date'
            placeholder='date'
          />
        </div>
        <div>
          <label htmlFor='Company' className='block'>
            Company:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
            type='text'
            name='code'
            placeholder='select company'
          />
        </div>
      </div>
      <button
        className='w-full py-2 my-4 text-lg text-center text-gray-700 bg-gray-300 rounded-lg'
        type='button'>
        Create
      </button>
    </div>
  );
}
