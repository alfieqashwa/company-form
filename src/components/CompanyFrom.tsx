export default function CompanyForm() {
  return (
    <div className='mr-10'>
      <h1 className='text-2xl text-gray-600'>Create Company</h1>
      <div className='py-2 space-y-2'>
        <div>
          <label htmlFor='Name' className='block'>
            Name:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='name'
            placeholder='name'
          />
        </div>
        <div>
          <label htmlFor='Address' className='block'>
            Address:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='address'
            placeholder='address'
          />
        </div>
        <div>
          <label htmlFor='Revenue' className='block'>
            Revenue:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='revenue'
            placeholder='revenue'
          />
        </div>
        <div>
          <label htmlFor='Phone' className='block'>
            Phone No:
          </label>
          <div className='flex space-x-2'>
            <input
              className='w-1/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
              type='text'
              name='code'
              placeholder='code'
            />
            <input
              className='w-5/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
              type='text'
              name='number'
              placeholder='number'
            />
          </div>
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
